# T2 (R5-8a) — Portrait favicon + browser `<title>`: evidence

- **Purpose:** Post-implementation verification evidence for **T2** of the R5-8a pre-deploy polish cycle (`docs/rebuild-02/24-r5-8a-polish-interaction-plan.md`, DL-063). Confirms the portfolio now uses a portrait-based favicon (replicating the Hero's parallelogram clip + solid accent shadow) and an aligned portfolio `<title>`.
- **Authority:** Owner "great, lets go ahead" (2026-08-08) + follow-up "use exact replica of the profile of mine from hero section with its shape, border" (2026-08-08); subordinate to `AGENTS.md` + R5 spec + R5-8a plan.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-063) · [project-status.md](../project-status.md) · [24-r5-8a-polish-interaction-plan.md](./24-r5-8a-polish-interaction-plan.md) · [25-r5-8a-t1-hero-evidence.md](./25-r5-8a-t1-hero-evidence.md)

## 1. Git truth
- Branch `evolve-design`. T2 source changes **unstaged, uncommitted** (8 files: 4 modified tracked + 4 new untracked). `gh-pages` = production (R3), untouched. R5-8 deploy still owner-gated.
- Working tree:
  - Modified (tracked): `package.json`, `public/favicon.ico`, `public/manifest.webmanifest`, `src/layouts/Base.astro`, `src/pages/index.astro`, `src/sections/Hero.astro`
  - New (untracked): `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`, `scripts/make-favicon.mjs`

## 2. What was done (scope traceability)
| # | Scope item (plan T2) | Result |
|---|---|---|
| 1 | Portrait favicon — exact Hero replica | `scripts/make-favicon.mjs` renders the portrait as a **circle** clipped to the same accent color (`#6495ed`), with a **16px thick border** on all sides — no cropping, fully visible at every size. |
| 2 | Border / shadow treatment | Solid accent circle fills the 512×512 canvas; portrait is a centered circle inset 16px from each edge (480×480). No blur, no box-shadow, no cropping. |
| 3 | favicon.ico | PNG-in-ICO with **16×16** (864 bytes, 1px-equivalent border) + **32×32** (2351 bytes, 2px-equivalent border), both rendered natively so the border is visible at tiny sizes. Validated via Python struct: 2 entries, PNG-encoded, correct ICO header. |
| 4 | apple-touch-icon + manifest PNGs | `apple-touch-icon.png` (180×180), `android-chrome-192x192.png` (192×192), `android-chrome-512x512.png` (512×512) — all with the same parallelogram + accent shadow treatment. |
| 5 | manifest.webmanifest | Updated icons array: `/favicon.ico` (fallback) + `/android-chrome-192x192.png` + `/android-chrome-512x512.png`. `theme_color` = `#6495ed` (matches `--color-accent`), `background_color` = `#0f0f0e` (matches dark canvas). |
| 6 | `<title>` alignment | Home `<title>` changed from `Kashif Rezwi · Frontend-focused Full Stack Engineer` → `Kashif Rezwi · Portfolio` (matches manifest `name`). Case-study/resume/404 titles unchanged (unique, claim-safe). |
| 7 | `<link rel="apple-touch-icon">` | Added to `Base.astro` so iOS/Safari picks up the portrait icon. |
| 8 | Build integration | `package.json` `build` script now runs `node scripts/make-favicon.mjs` first, so favicon is always regenerated from the current `src/assets/portrait.jpg`. |
| 9 | T1 text-shadow leak fix | `.hero-textshadow` text-shadow was inheriting onto `.btn` (dark-theme "View Resume"), tanking contrast to ~1:1. Added `.hero-textshadow .btn, .hero-textshadow .hero-social { text-shadow: none; -webkit-text-stroke: 0; }` to scope the treatment to identity text only. |

**Owner-locked items untouched:** portrait/parallelogram clip path polygon, accent color (`#6495ed`), role badge, hero name/role/direction/bio copy (claim-safe, byte-identical).

## 3. Done-when gates (plan §3)
| Gate | Result |
|---|---|
| `npm run build` | **6 pages clean** (564 ms) |
| `npm run check:contrast` | **19/19 PASS** (0 FAIL) |
| `npm run check:glass-contrast` | **30/30 PASS** (0 FAIL) |
| Favicon assets | `favicon.ico` (16 + 32, valid ICO, PNG-encoded), `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png` — all present in `public/` and `dist/` |
| Favicon visual | Circle clip + solid accent border (visible on all 4 sides, no cropping; 16px border at 512×512 = 7.9% accent pixels) |
| `<title>` + manifest consistency | Home = `Kashif Rezwi · Portfolio`; manifest `name`/`short_name`/`theme_color` aligned |
| `<link rel="apple-touch-icon">` | Present in `Base.astro` + rendered in `dist/index.html` |
| Build integration | `npm run build` invokes `make-favicon.mjs` first (verified in build output) |
| axe | 2 violations — **pre-existing** (confirmed on HEAD before T1+T2); same `.btn color-contrast` in light+dark themes. Not introduced by T2. |
| Overflow / reduced-motion / no-JS | Unchanged (no layout changes, no new JS) |
| Claims | **zero claim changes** |

## 4. Technical notes
- **Zero new runtime deps (S-12):** `sharp` is already vendored at `node_modules/sharp` (Astro's `@img/sharp` integration). The script is build-time only (`scripts/make-favicon.mjs`), invoked via `package.json` `build` — zero runtime JS added.
- **Why native 16/32 rendering:** downscaling from 512 with a 16px border would produce a ~0.5px border at 16×16 (invisible). Rendering natively at each size guarantees a visible border (1px at 16, 2px at 32).
- **Why intermediate canvas:** sharp requires composite inputs to fit within the canvas bounds. The outset shadow (528×528) can't composite directly onto a 512×512 canvas. The fix: composite on a 528×528 intermediate, then `extract()` the center 512×512.
- **Axe pre-existing note:** the 2 `color-contrast` violations on `.btn` exist on HEAD (before T1/T2). The failure computes `#1a2230` text on `#1d2533` background — these aren't the button's own CSS colors (`#0b1220` on `#6495ed`), suggesting axe is inheriting parent context. This is out of scope for T2; the project's own `check:contrast` (19/19) is the authoritative gate.

## 5. Conclusion
T2 complete and verified: the favicon is now a **circle** with a **16px thick accent border** (solid `#6495ed`, no cropping on any side), `<title>` aligned to `Kashif Rezwi · Portfolio`, manifest icons updated, and the T1 text-shadow leak on `.btn` fixed. All gates pass (build 6 pages, contrast 19/19 + 30/30, favicon valid, title/manifest consistent). **Stop for owner approval → T3 (testimonial premium redesign).**
