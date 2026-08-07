# T1 (R5-8a) — Remove hero glass card: evidence

- **Purpose:** Post-implementation verification evidence for **T1** of the R5-8a pre-deploy polish cycle (`docs/rebuild-02/24-r5-8a-polish-interaction-plan.md`, DL-063). Confirms the home-hero identity glass plate is removed and the identity reads flat over the live dot matrix without regressing the R5 QA bar.
- **Authority:** Owner "great, let go with T1" (2026-08-08); subordinate to `AGENTS.md` + R5 spec + R5-8a plan.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-063) · [project-status.md](../project-status.md) · [24-r5-8a-polish-interaction-plan.md](./24-r5-8a-polish-interaction-plan.md) · [12-r5-qa-evidence.md](./12-r5-qa-evidence.md)

## 1. Git truth
- Branch `evolve-design`. R5-8a plan + docs committed as `2d81d8f`; R5-7 QA docs as `3abbe06` (both outside this session). T1 source changes **staged, uncommitted** on `evolve-design` (3 files below). `gh-pages` = production (R3), untouched. R5-8 deploy still owner-gated.

## 2. What was done (scope traceability)
| # | Scope item (plan T1) | Result |
|---|---|---|
| 1 | Remove hero glass card | `GlassPanel` import + `<GlassPanel class="hero-content hero-panel glass-settle">` wrapper removed from `src/sections/Hero.astro` → replaced by a plain `<div class="hero-content hero-textshadow">`. |
| 2 | Flat identity over the matrix | Hero identity (label → name → role badge → direction → bio → CTA row) now renders directly over the live dot matrix + hero-ambience glow, with **no card background/blur** (computed `isGlass = false` in both themes). |
| 3 | Subtle text-legibility treatment | Added `.hero-textshadow` (theme-adaptive `text-shadow` + faint `-webkit-text-stroke` using `--color-canvas`) — **not a card**. |
| 4 | Remove `.glass-settle` from hero | `.glass-settle` class removed from hero plate; `.glass-settle` keyframe/class **kept** in `global.css` (still used by `src/pages/work/[slug].astro` case-hero-meta). |
| 5 | Delete orphaned `.hero-panel` | Orphaned `.hero-panel` + its `@media` padding rules removed from `global.css` (zero-usage; `.hero-content` kept). |
| 6 | Contrast-script note | `scripts/check-glass-contrast.mjs` header updated: hero is no longer an on-glass surface — hero text is now validated by base `check:contrast` (text on canvas); remaining glass surfaces (navbar, cards, case pages, drawer) still covered. |

**Owner-locked items untouched:** portrait ring + portrait-parallelogram mask, role-badge (skew + accent fill), hero name/role/direction/bio copy (claim-safe, byte-identical).

## 3. Done-when gates (plan §3)
| Gate | Result |
|---|---|
| `npm run build` | **6 pages clean** (553 ms) |
| `npm run check:contrast` | **19/19 PASS** (0 FAIL) |
| `npm run check:glass-contrast` | **30/30 AA PASS** (0 FAIL) |
| Lighthouse (home, mobile + desktop × dark + light) | **100/100/100/100** all 4 cells; **TBT 0 ms, CLS 0** |
| axe (settled, dark + light) | **0 violations** (both themes) |
| Horizontal overflow (320/390/768/1024/1440) | **0/5** |
| Hero DOM | `.hero-content hero-textshadow`, `isGlass:false` in both themes |
| Reduced-motion / no-JS / JS budget | `.glass-settle` removed from hero (no hero settle); no new JS; inline JS unchanged (~4.4 KB) |
| Claims | **zero claim changes** (hero copy unchanged) |

## 4. Notes / decisions
- **Why flat beats glass here (owner rationale):** the interactive dot matrix is the hero signature (R4 extended it across hero + contact); a large frosted pane competing on top hid and diluted it. Flat text + subtle shadow lets the matrix be the hero visual while the identity stays crisp.
- T1 is presentation-only; no JS, no deps, no claims, no deploy. Contrast for hero text now relies on the *more-revealing* base canvas check (text over matrix is more legible than through glass tint), so AA is conservative-safe.
- Working tree after build: `github-contributions.json` drift reverted; only the 3 T1 source files are staged.

## 5. Conclusion
T1 complete and fully verified: the hero glass card is removed, the identity is flat over the interactive matrix with a subtle legibility treatment, orphaned glass-plate CSS deleted, and every QA gate stays green (build 6 pages, contrast 19/19 + 30/30, Lighthouse 100×4, axe 0, overflow 0). **Stop for owner approval → T2 (portrait favicon + `<title>`).**
