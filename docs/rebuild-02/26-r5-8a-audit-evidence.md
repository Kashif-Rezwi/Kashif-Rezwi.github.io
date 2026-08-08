# R5-8a — Final Pre-Deploy Audit (Dead & Duplicate Code)

- **Purpose:** Final dead-code/duplicate-code audit of the current portfolio (branch `evolve-design`) before the R5-8 deploy gate.
- **Authority:** AGENTS.md (owner directive: "check and run the audit")
- **Date:** 2026-08-08 (DL-072)
- **Related:** [24-r5-8a-polish-interaction-plan.md](./24-r5-8a-polish-interaction-plan.md) · [11-r5-glassmorphism-design.md](./11-r5-glassmorphism-design.md) · [decision-log.md](../decision-log.md)

## Verdict

Build passes, both contrast gates pass. All findings below are **read-only audit results** — no code was changed. Deletions wait for owner approval.

## 1. Dead CSS rules in `src/styles/global.css` (verified 0 usages in all `.astro`/`.ts`/`.mjs`)

| # | Rule / block | Lines | Origin / why dead |
|---|---|---|---|
| 1 | `.label-overline` | 241–247 | Created in R5-1 (DL-065) as defect-E text utility; never wired — `.section-label` is the used recipe |
| 2 | `.field-backdrop` | 392-396 | R5-1 glow-field utility; superseded by `.section-band` in R5-3, which itself was later removed (DL-124/DL-070) |
| 3 | `.section-divider` | 439-444 | Never used. None of the 4 `.astro` pages render `section-divider` |
| 4 | `.section-band` (+ `.band-host` / `.band-host > .container-site`) | 453-462 | Disabled in DL-070 ("Removed all backdrop glows `.section-band` portfolio-wide"); markup deleted from `[slug].astro`; the 2 rules remain as inert remnants (`display:none !important`) |
| 5 | `.section-alt` | 464-466 | 0 markup usages — R5-8a replaced with solid scoped gradients (spots DL-065/067 chain) |
| 6 | `.section-fade-top` / `.section-fade-bottom` (+ both pseudo-element blocks) | 468-519 | Replaced by scoped solid-colour gradients (DL-065); class never applied in markup |
| 7 | `@keyframes field-breathe` | 625-632 | Hero ambience removed (DL-068) — only user was the hero ambience div |
| 8 | `.field-breathe` animation class | 646-648 | Same as #7 — `.hero-ambience` div deleted from Hero.astro |
| 9 | `@keyframes blink` | 634-638 | Terminal cursor effect; no rule/markup ever uses it |
| 10 | `.card` / `.card:hover` | 344-352 | Base card recipe superseded by `.glass-card` (R5-3, DL-073); no `.astro` renders plain `card` |

## 2. Dead scoped style

| File | Rule | Lines | Why dead |
|---|---|---|---|
| `src/sections/Hero.astro` | `.hero-ambience` | 129 | DL-068 removed the `<div class="hero-ambience field-breathe">` markup; scoped rule orphaned |

## 3. Duplicate-code scan (none found)

- `SectionHeader.astro`, `GlassPanel.astro` killed the R5-6 duplication (DL-111); `.section-block` lives in one place in `global.css`; scoped `-bg` gradients are per-section by design (single source each).
- `ProjectRow`, `TechIcon`, `Icon`, `ThemeControl`, `HeroDotMatrix`, `GlassPanel`, `GitHubContributionabilities` — each imported and used ≥1×.
- `.btn` / `.btn-outline` defined once in `global.css` (Hero + WorkCard + resume reference it; no duplicated scoped copy found in `Hero.astro` / `[slug].astro`).

## 4. Asset / component hygiene

- `public/` clean: every file referenced (`favicon.ico`, `apple-touch-icon.png`, `android-chrome-192/512`, `og.png`, `manifest.webmanifest`, `robots.txt`, `background/`, `resume/`, `testimonials/`). No `kashif.png` or stale portrait leftovers.

## 5. Gates (2026-08-08)

- `npm run check:contrast` — PASS
- `npm run check:glass-contrast` — PASS
- `npm run build` — PASS (6 pages, 0 warnings)

## 6. Suggested cleanup (owner gate)

Delete #1–#10 + the `Hero.astro` orphan = ~110 lines of CSS. Included in this audit doc.