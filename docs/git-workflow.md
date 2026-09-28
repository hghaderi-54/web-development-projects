# Git Workflow

Use the interactive page to practice changes on a branch:

```sh
git switch -c improve-page-copy
# Edit interactive-webpage/index.html.
git diff
git add interactive-webpage/index.html
git commit -m "Improve the page introduction"
git push -u origin improve-page-copy
```

Open a pull request, review the change, and merge it when ready. Keep commits focused and run `npm run check` inside `interactive-webpage/` before publishing JavaScript changes.
