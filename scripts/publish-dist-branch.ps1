param(
  [string]$BranchName = "dist-only",
  [string]$RemoteName = "origin",
  [string]$CommitMessage = "Publish dist build",
  [string]$SourceBranch = "main",
  [switch]$SkipSourceBranchCheck,
  [switch]$SkipBuild,
  [switch]$Push = $true
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$distPath = Join-Path $repoRoot "dist"
$snapshotRoot = Join-Path $repoRoot ".dist-snapshot"
$worktreePath = Join-Path $repoRoot ".dist-worktree"
$sessionBranch = "dist-publish-$([DateTime]::UtcNow.ToString('yyyyMMddHHmmss'))"

function Invoke-Git {
  param(
    [Parameter(Mandatory = $true)][string[]]$Args,
    [switch]$AllowFailure
  )

  & git @Args
  if (-not $AllowFailure -and $LASTEXITCODE -ne 0) {
    throw "git $($Args -join ' ') failed with exit code $LASTEXITCODE"
  }
}

Push-Location $repoRoot
try {
  $currentBranch = (& git rev-parse --abbrev-ref HEAD).Trim()
  if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($currentBranch)) {
    throw "Unable to detect current git branch."
  }

  if (-not $SkipSourceBranchCheck -and $currentBranch -ne $SourceBranch) {
    throw "Current branch '$currentBranch' does not match required source branch '$SourceBranch'. Use -SkipSourceBranchCheck to override."
  }

  $typescriptCli = Join-Path $repoRoot "node_modules/typescript/bin/tsc"
  if (-not (Test-Path $typescriptCli)) {
    Write-Host "[dist-branch] Missing local build dependencies. Running npm ci..."
    npm ci
    if ($LASTEXITCODE -ne 0) {
      throw "npm ci failed with exit code $LASTEXITCODE"
    }
  }

  if (-not $SkipBuild) {
    Write-Host "[dist-branch] Running production build..."
    npm run build
    if ($LASTEXITCODE -ne 0) {
      throw "npm run build failed with exit code $LASTEXITCODE"
    }
  }

  if (-not (Test-Path $distPath)) {
    throw "dist folder not found at $distPath"
  }

  Write-Host "[dist-branch] Preparing dist snapshot..."
  if (Test-Path $snapshotRoot) {
    Remove-Item -Path $snapshotRoot -Recurse -Force
  }
  New-Item -ItemType Directory -Path $snapshotRoot | Out-Null
  Copy-Item -Path (Join-Path $distPath "*") -Destination $snapshotRoot -Recurse -Force
  if (Test-Path (Join-Path $distPath ".htaccess")) {
    Copy-Item -Path (Join-Path $distPath ".htaccess") -Destination (Join-Path $snapshotRoot ".htaccess") -Force
  }

  if (Test-Path $worktreePath) {
    Write-Host "[dist-branch] Cleaning stale temporary worktree..."
    Invoke-Git -Args @("worktree", "remove", "--force", $worktreePath) -AllowFailure
    if (Test-Path $worktreePath) {
      Remove-Item -Path $worktreePath -Recurse -Force
    }
  }

  Write-Host "[dist-branch] Creating temporary worktree..."
  Invoke-Git -Args @("worktree", "add", "--detach", $worktreePath, "HEAD")

  Push-Location $worktreePath
  try {
    Write-Host "[dist-branch] Switching to temporary orphan branch '$sessionBranch'..."
    Invoke-Git -Args @("switch", "--orphan", $sessionBranch)

    $trackedFiles = & git ls-files | Out-String
    if (-not [string]::IsNullOrWhiteSpace($trackedFiles)) {
      Invoke-Git -Args @("rm", "-rf", "--cached", ".")
    }
    Invoke-Git -Args @("clean", "-fdx")

    Copy-Item -Path (Join-Path $snapshotRoot "*") -Destination $worktreePath -Recurse -Force
    if (Test-Path (Join-Path $snapshotRoot ".htaccess")) {
      Copy-Item -Path (Join-Path $snapshotRoot ".htaccess") -Destination (Join-Path $worktreePath ".htaccess") -Force
    }

    Invoke-Git -Args @("add", "-A", ".")

    & git diff --cached --quiet
    $hasChanges = $LASTEXITCODE -ne 0

    if ($hasChanges) {
      Invoke-Git -Args @("commit", "-m", $CommitMessage)
    }
    else {
      Write-Host "[dist-branch] No content changes to commit."
    }

    if ($Push) {
      Write-Host "[dist-branch] Pushing to $RemoteName/$BranchName..."
      Invoke-Git -Args @("push", "--force", $RemoteName, "HEAD`:$BranchName")
    }
    else {
      Write-Host "[dist-branch] Push skipped."
    }
  }
  finally {
    Pop-Location
  }
}
finally {
  Push-Location $repoRoot
  try {
    if (Test-Path $worktreePath) {
      Invoke-Git -Args @("worktree", "remove", "--force", $worktreePath) -AllowFailure
      if (Test-Path $worktreePath) {
        Remove-Item -Path $worktreePath -Recurse -Force
      }
    }

    if (Test-Path $snapshotRoot) {
      Remove-Item -Path $snapshotRoot -Recurse -Force
    }
  }
  finally {
    Pop-Location
    Pop-Location
  }
}

Write-Host "[dist-branch] Done."
