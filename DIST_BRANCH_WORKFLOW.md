# Dist-Only Branch Workflow

This workflow creates or updates a branch that contains only deploy-ready files at branch root.

## Default command

```powershell
npm run dist:branch
```

Default behavior:
- Updates local `dist-only` from current `dist/` output using `scripts/update-dist-branch.mjs`
- Force-pushes `dist-only` to `origin/dist-only`
- Dist branch content excludes `node_modules` and `.vite`

## Main branch publish command

```powershell
npm run dist:main
```

Behavior:
- Requires current branch to be `main` before publishing
- Runs build, updates `dist-only`, then force-pushes to `origin/dist-only`

For dry runs without pushing:

```powershell
npm run dist:main:local
```

## Optional usage

```powershell
node ./scripts/update-dist-branch.mjs
git push --force origin dist-only:dist-only
```

## Notes

- This does not modify your current working branch files.
- Branch history remains linear by committing on top of the previous `dist-only` commit.
- For Hostinger, use the `dist-only` branch content directly in `public_html`.
