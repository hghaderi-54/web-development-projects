# Web Development Projects

A compact collection of complete static web projects, with no build dependencies.

- **[Portfolio](index.html)** — a responsive landing page linking to the three project collections.
- **[HTML Fundamentals](html-fundamentals/README.md)** — semantic markup and document structure.
- **[Interactive Web Page](interactive-webpage/README.md)** — HTML, CSS, and JavaScript with an accessible button interaction.
- **[Git Workflow](docs/git-workflow.md)** — a practical branch, commit, and pull-request exercise.

Open any `index.html` in a browser. For a local server, run `python -m http.server 8000` from this directory, then visit `http://localhost:8000`.

## Live portfolio

[View on GitHub Pages](https://hghaderi-54.github.io/web-development-projects/). The portfolio is maintained here rather than in a separate repository.

## Checks

Run `node --test tests/web.test.cjs`. The tests verify page metadata, local assets, and the button interaction. GitHub Actions runs the same checks.

Duplicate web exercises were consolidated into the interactive page. The histories of the former web and portfolio repositories remain reachable in this repository's Git history.
