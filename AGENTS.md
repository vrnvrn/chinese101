# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free static Mandarin lesson site. Most pages are standalone HTML files at the repository root, such as `index.html`, `lesson1.html`, `practice.html`, and `june.html`. Shared vocabulary and schedule data lives in `refs/` as browser-loaded JavaScript globals, for example `refs/hsk1-words.js` and `refs/june-schedule.js`. Route aliases for deployment are defined in `vercel.json`; update it when adding a new clean URL such as `/lesson7`.

## Build, Test, and Development Commands

There is no package manager or build step. Open files directly in a browser for quick checks, or run a static server from the repo root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. Use the Vercel CLI only when validating deployment rewrites locally:

```sh
vercel dev
```

## Coding Style & Naming Conventions

Keep pages self-contained unless data is shared across multiple pages. Match the existing HTML style: 4-space indentation, inline `<style>` and `<script>` blocks for page-specific behavior, semantic class names, and mobile-first responsive CSS using `clamp`, flex, and grid where useful. Name lesson files with lowercase kebab or numbered patterns already in use, such as `lesson6.html`, `june-lesson2.html`, and `june-matching.html`. In `refs/`, expose shared datasets on `window` with uppercase names, such as `window.HSK1_WORDS`.

## Testing Guidelines

No automated test framework is configured. Before committing, manually verify changed pages in a browser. Check navigation links, keyboard controls, reveal buttons, flashcards, query-string pages such as `june-day.html?n=3`, and any Vercel rewrite you touched. For data changes, confirm the consuming page loads without console errors and renders the expected Mandarin, pinyin, and English text.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects under 72 characters, for example `Add June Lesson 3 drill` or `Fix practice route`. Make one commit per logical change after verification. Confirm the current branch before the first commit in a session, and do not bundle unrelated fixes.

Pull requests should include a clear summary, rationale, linked issue or task ID when available, and screenshots for UI changes. Never delete remote branches without asking.

## Security & Configuration Tips

Do not add secrets or API keys to HTML, JavaScript, or `vercel.json`. Keep deployment behavior explicit in `vercel.json`, and prefer static assets or checked-in reference data over runtime external dependencies.
