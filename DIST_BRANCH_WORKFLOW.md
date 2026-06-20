# Dist-Only Branch Workflow

This workflow creates or updates a branch that contains only deploy-ready files at branch root.

## Default command

```powershell
npm run dist:branch
```

Default behavior:
- Runs `npm run build`
- Creates/updates `dist-only` branch using an orphan history snapshot
- Commits only root deploy artifacts (`index.html`, `assets/`, `.htaccess`)
- Force-pushes to `origin/dist-only`

## Optional usage

```powershell
pwsh -ExecutionPolicy Bypass -File ./scripts/publish-dist-branch.ps1 -BranchName dist-only -RemoteName origin -CommitMessage "Publish dist build" -SkipBuild
```

## Notes

- This does not modify your current working branch files.
- It uses a temporary git worktree under `.dist-worktree` and removes it after publishing.
- Branch history is rewritten each publish (`--force`) so it stays clean and dist-only.
- For Hostinger, use the `dist-only` branch content directly in `public_html`.
