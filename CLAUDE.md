# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install   # install dependencies
npm start     # launch the Electron app (runs `electron .`)
```

There is no configured test suite, linter, or build step (`npm test` is a placeholder that exits with an error). No bundler is used — the renderer loads plain `.js`/`.html`/`.css` files directly.

## Architecture

This is a small Electron "adventure game" demo with two independent halves:

**Electron shell** (`main.js`, `preload.js`): a single `BrowserWindow` (1024x900, non-resizable) is created on `app.whenReady()` and loads `menu.html`. `nodeIntegration: true` and `contextIsolation: false` are set, so renderer scripts have direct Node access — `preload.js` is mostly a formality here (it just prints Chrome/Node/Electron versions into the DOM). The application menu is explicitly removed (`Menu.setApplicationMenu(null)`).

**Game flow**: `menu.html` is the entry screen; its "Start Game" button navigates via `window.location.href` to `index.html`, which loads `game.js` as an ES module.

**Location graph** (`locations.js` → `game.js`): the game world is a plain object keyed by location id, where each location has a `name`, `description`, optional `monster`, optional `picture` (path under `assets/images/`), and a `connections` array of other location ids. `game.js` renders the current location's info into `index.html` and dynamically builds one "Go to X" button per entry in `connections`, wiring each to `updateLocation()`. Adding a new location means adding an entry to the `locations` object in `locations.js` and linking it from/to existing locations via `connections` — there is no separate routing or state-management layer.

## CI: AI code review

`.github/workflows/ai-code-review.yaml` runs on every PR (opened/synchronize): it computes the diff against the base branch and pipes it to `custom_scripts/ai-code-review.js`, which sends it to OpenAI (`gpt-4o-mini`, via `OPENAI_API_KEY` secret) and posts the model's response back as a PR comment. The diff sent to the model is truncated to the first 12,000 characters.
