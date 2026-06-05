# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Conventions (commit style, coding style, manual-testing checklist) live in `AGENTS.md`. This file focuses on the architecture that spans multiple files.

## What this is

A dependency-free static Mandarin lesson site: ~25 standalone HTML pages at the repo root, plus shared data in `refs/`. There is **no** package manager, build step, framework, or test runner. Pages are hand-written HTML with inline `<style>` and `<script>`. Hosted on Vercel as plain static files; `chinese101` is its own git repo (not part of the parent `the_odin_project` monorepo, despite the path).

## Run / develop

```sh
python3 -m http.server 8000     # then visit http://localhost:8000/
vercel dev                      # only when validating vercel.json rewrites locally
```

There is no build or lint. Verification is manual in a browser — see the testing section of `AGENTS.md`.

## Architecture

**Two layers: presentation pages (root `*.html`) and shared data (`refs/*.js`).**

### Shared data globals (`refs/`)
Data files attach to `window` and are pulled in via **absolute-path** script tags (`<script src="/refs/hsk1-words.js">`). The absolute `/refs/` path is load-bearing: clean URLs like `/june/day/3` rewrite to `june-day.html`, so a relative `refs/...` path would resolve against the wrong directory. Always use a leading slash.

- `hsk1-words.js` → `window.HSK1_WORDS` — 300 HSK 1 words. Each entry is a positional 7-tuple: `[hanzi, pinyin, pos, english, example_hanzi, example_pinyin, example_english]`.
- `band4-words.js` → `window.BAND4_WORDS` — 1000 HSK 4 words, **same 7-tuple shape** as HSK1_WORDS.
- `char-defs.js` → IIFE building a map of single character → `{ py, en }`, used by flashcards to break down multi-character words.
- `hsk1-clusters.js` → `window.HSK1_CLUSTERS` — maps a hanzi to a semantic cluster tag. The sentence-completion drill uses it to avoid offering a distractor that would be just as valid as the answer in the blank.
- `june-schedule.js` / `june4-schedule.js` → `window.JUNE_SCHEDULE` / `window.JUNE4_SCHEDULE` — calendar grids mapping each day to either a `vocab` range or an `event`. **Vocab `start`/`end` are 1-indexed into the corresponding word array** (consumers do `WORDS.slice(start - 1, end)`).

### Two parallel course tracks
The "June" course exists in two near-identical variants that share page mechanics and differ only in their data source:
- **HSK 1 (300 words):** `june*.html` pages, `JUNE_SCHEDULE` + `HSK1_WORDS`, routes under `/june`.
- **HSK 4 (1000 words):** `june4*.html` pages, `JUNE4_SCHEDULE` + `BAND4_WORDS`, routes under `/june/hsk4`.

When changing one track's day/calendar logic, check whether the other needs the same change.

### Parameterized pages (query string)
Some pages render from a `?n=` parameter read via `URLSearchParams`, driven by the schedule/word globals rather than hardcoded content:
- `june-day.html?n=N` / `june4-day.html?n=N` — render day N from the schedule.
- `textbook-lesson.html?n=N` — render textbook lesson N.

### Routing (`vercel.json`)
`vercel.json` rewrites clean URLs to the underlying `.html` files, including parameterized routes (`/june/day/:n(\d+)` → `june-day.html?n=:n`, `/tb:n(\d+)` → `textbook-lesson.html?n=:n`). **When adding a page or a clean URL, add its rewrite here** — a new `lessonN.html` is not reachable at `/lessonN` until it is listed. `index.html` is the navigation hub linking to the clean routes.

## Gotcha: `refs/` is gitignored but tracked

`.gitignore` contains `refs/`. The existing data files were committed before/despite that rule, so they remain tracked — editing them shows up in `git status` normally. But a **new** file under `refs/` is ignored and won't be staged by `git add refs/...`; use `git add -f refs/<file>` (then commit explicitly per the per-file commit convention in `AGENTS.md`).
