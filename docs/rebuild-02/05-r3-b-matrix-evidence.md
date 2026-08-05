# R3-B Hero-Matrix Evidence

- **Purpose:** Record the R3-B hero dot-matrix fallback, tuning, responsive/motion validation, and performance/resilience evidence required for the R3-B owner gate.
- **Authority:** Owner authorization in DL-021 (2026-08-05), scope confirmations in DL-022, bounded by [AGENTS.md](../../AGENTS.md) and the [R3 implementation plan](./02-improvement-implementation-plan.md).
- **Last updated:** 2026-08-05 (complete locally; owner gate pending)
- **Related:** [R3-A system evidence](./04-r3-a-system-evidence.md) · [R3-0 baseline](./03-r3-0-correctness-baseline.md) · [implementation plan](./02-improvement-implementation-plan.md) · [decision log](../decision-log.md) · [project status](../project-status.md)

## Scope disposition

| Item | Status | Evidence / boundary |
|---|---|---|
| Static CSS fallback when canvas is unavailable | Implemented locally | `.hero-dot-fallback` renders by default and is removed only after the first canvas frame is drawn (`html.matrix-ready`). Verified in the no-JS run below. |
| DL-021 elevation corrections | Implemented locally | Portrait glow and hero radial glow removed (`index.astro`); navbar `border-bottom` removed (`Header.astro`). No `box-shadow`/`drop-shadow`/`text-shadow` exists under `src/`. |
| DL-021 hover-feedback corrections | Implemented locally | Card hover now surface background + 2 px translate (`global.css`); case-nav hover now text/surface color (`work/[slug].astro`); no hover border-color transitions remain. |
| Theme-attribute-aware matrix opacity | Implemented locally | **Fix found in R3-B review:** opacity previously followed only `prefers-color-scheme`, so a manual theme choice on a mismatched system drew the matrix at the wrong opacity. Now explicit `html[data-theme='light']` and system `html:not([data-theme])` paths both apply (mirrors `global.css` token structure). Both override combos verified below. |
| Parked-pointer settle | Implemented locally | **Fix found in validation:** a cursor parked over the hero kept the render loop alive indefinitely (`isSettled` required `!pointer.active`). Settle now depends only on spring-motion decay; interaction wakes via `requestRender()`. Verified below. |
| Fallback density match | Implemented locally | Fallback grid 27 px under 640 px to match the canvas spacing. |
| ThemeControl segmented control | Implemented locally (owner-confirmed scope, DL-022) | System/Light/Dark radio group replaces the select; named radios, legend group label, focus-visible outline, arrow-key operation, localStorage persistence, try/catch storage guards. |
| Footer socials wrap | Implemented locally (owner-confirmed scope, DL-022) | Social row wraps with bounded gaps; no horizontal overflow at 320/390 px. |
| Project-card / GitHub module work | Deferred | Reserved for R3-C / R3-D; untouched. |

## Acceptance criteria

| Criterion | Result | Evidence |
|---|---|---|
| No canvas in the accessibility tree | Pass | Canvas and fallback are `aria-hidden`; header/page snapshots expose no canvas node. |
| No interaction requirement to understand content | Pass | `pointer-events: none`; no-JS run shows all 20 `.reveal` elements visible (`hidden: 0`) with the static fallback rendered. |
| No animation under reduced motion | Pass | Emulated `dark reduced-motion` at 390 px: canvas opacity 0.58; pointer burst produced 0 animation frames. |
| No continuous animation when idle or off-screen | Pass | rAF instrumentation: 0 frames after 1.5 s idle; 68 frames during a 1 s pointer burst; 0 additional frames over 2.5 s with the pointer parked (post-fix); 0 frames from bursts while scrolled off-screen (IntersectionObserver pause). |
| DPR ≤ 2 and hero-scoped draw area | Pass | `Math.min(devicePixelRatio, 2)`; canvas is absolute-positioned inside `.hero-section` only. |
| Visually legible in both themes at all target widths | Pass | Captures at 1440/1024/768/390/320 px in system dark and system light, plus manual-dark-on-system-light and manual-light-on-system-dark; text and portrait remain dominant; matrix stays background-subtle in all combos. |
| Lighthouse Performance ≥ 95 (production build) | Pass | `astro build` + `astro preview`: mobile **100** (FCP 0.9 s, LCP 1.1 s, TBT 0 ms, CLS 0), desktop **100**. |
| No material long task in a 10 s interaction profile | Pass | PerformanceObserver during 10 s of continuous pointer movement over the hero: **0 long tasks** (>50 ms). |

## Verification performed

- `npm run build` — passed (six static routes); `git diff --check` — clean; `node scripts/check-contrast.mjs` — all PASS.
- Theme behavior (production build, agent-browser session): system dark 0.92 / system light 0.78 canvas opacity; manual dark on system light 0.92; manual light on system dark 0.78; persistence across reload via `portfolio-theme` (pre-paint initializer restores `data-theme`).
- Keyboard: radio group reachable, arrow keys move and apply selection (`theme-system → theme-light → theme-dark`), change persists to localStorage, focus-visible outline renders on the active choice label.
- Responsive: no horizontal overflow at 390/320 px (`scrollWidth == innerWidth`, zero offending elements); footer socials wrap.
- No-JS: built `index.html` with all script tags removed, served statically — `matrix-ready` absent, fallback `display: block`, fallback grid `34px`, all reveal content visible.
- Visual captures: `/tmp/r3b2-dark-1440.png`, `/tmp/r3b2-light-1440.png`, `/tmp/r3b2-manual-dark-on-light.png`, `/tmp/r3b2-manual-light-on-dark.png`, `/tmp/r3b2-{dark,light}-{1024,768,390,320}.png`, `/tmp/r3b2-reduced-390.png`, `/tmp/r3b2-nojs-fallback.png`. Lighthouse JSON: `/tmp/r3b2-lh-mobile.json`, `/tmp/r3b2-lh-desktop.json`.

## Remaining R3-B gate action

- Obtain explicit owner review/approval of the captures and motion/performance evidence above before beginning R3-C (project cards) or any GitHub-proof work. Merge and production deployment remain unauthorized.
