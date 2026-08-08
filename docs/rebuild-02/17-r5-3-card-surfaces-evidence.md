# R5-3 — Card + Surfaces Pass: Evidence

- **Purpose:** Proof-of-work for phase R5-3 of the R5 glassmorphism evolution (spec §9 row R5-3) — WorkCard, testimonial, GitHub, tech chips, and more-projects surfaces rendered in the R5 glass material with ambient field bands behind the sections.
- **Authority:** Owner "go" for R5-3 (2026-08-07); subordinate to the R5 design spec and the R5 Operating Loop.
- **Last updated:** 2026-08-07
- **Related:** [`16-r5-3-card-surfaces-plan.md`](./16-r5-3-card-surfaces-plan.md) · [`11-r5-glassmorphism-design.md`](./11-r5-glassmorphism-design.md) §5/§7/§9 · [`15-r5-2-header-hero-glass-evidence.md`](./15-r5-2-header-hero-glass-evidence.md) · [`decision-log.md`](../decision-log.md) · [`project-status.md`](../project-status.md)

---

## 1. Git truth (loop step 1)

- Branch: `evolve-design`. HEAD `6a1314d` (R5‑2 + badge-fix), **clean working tree confirmed, origin/evolve-design == local** before R5-3 edits. R5-3 change set is currently **uncommitted** on `evolve-design`.
- Base: `evolve-design` only. No merge/deploy (R5-8 owner-gated).

## 2. Scope delivered

| Surface (§7 score) | Change | File |
|---|---|---|
| Work cards (**II**) | `card` → `glass-card`; hover lift = transform only (old bg sweep dropped); backdrop-filter off locally (smooth band behind — no glass plane greed) | `src/components/WorkCard.astro` |
| Testimonials (**II**) | `card` → `glass-card`; same transform-only hover; quote tokens re-AA'd | `src/components/TestimonialCard.astro` |
| GitHub calendar (**II**) | card bg/border → glass tokens + local top-edge catch light + fallbacks | `src/components/GitHubContributions.astro` |
| Tech chips (**II**) | chip bg → `var(--glass-bg)` + `--glass-border`; hover = tonal brand tint (14%) + tonal glow (20%) | `src/pages/index.astro` |
| More-projects (**I**) | strip → glass bg + border + radius (subtle) | `src/pages/index.astro` |
| Ambient bands | masked static `--color-glow` band behind work / skills / testimonials / now sections (`band-host` + `.section-band`, `aria-hidden`, pointer-events none) | `src/pages/index.astro` |
| Dim-ink on glass | new token `--color-ink-dim-glass` (#848484 dark / #6c6c6c light) for card-period/status/github meta/more-strip label/hero-socials/now meta — AA-safe on the band composite | `src/styles/global.css` |

**Not rendered (deferred per scope):** experience timeline rail, contact CTA surfaces, footer, case-study pages (R5-5), motion (R5-4). Claims/copy zero change (S-11).

## 3. Verification results

### 3.1 Build + static checks
| Check | Result |
|---|---|
| `npm run build` | ✅ 6 pages, 0 warnings |
| `npm run check:contrast` | ✅ **19/19** PASS (adds ink-dim-glass pair; no regression) |
| `npm run check:glass-contrast` (extended) | ✅ **24/24** AA PASS (dark+light × canvas/band backdrop; R5-2 hero/nav + card/skill/GitHub tokens) |

New token `--color-ink-dim-glass` enforced in `scripts/check-contrast.mjs` (both themes, canvas floor) → **19/19** token pairs; on-band AA enforced in `check-glass-contrast.mjs` (24/24).

### 3.2 Lighthouse (home, 13.4.1)
| Form factor | Perf | A11y | Best-practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Mobile | 🟢 100 | 🟢 100 | 🟢 100 | 🟢 100 | 1.3 s | 0 | 0 ms |
| Desktop | 🟢 100 | 🟢 100 | 🟢 100 | 🟢 100 | — | 0 | 0 ms |

Matches the R3 100/100 baseline; badge-fix a11y holds (S-1).

### 3.3 axe-core 4.10.2 (jsdelivr, qa-report §F3 method)
| Route | Theme | Violations |
|---|---|---|
| `/` | dark | 🟢 0 |
| `/` | light | 🟢 0 |

### 3.4 Responsive / overflow
Widths 320 / 390 / 768 / 1024 / 1440 (real `agent-browser set viewport`, not a scale-down): `scrollWidth == clientWidth` at all widths; the only element extending past viewport is inside `.gh-contrib-scroll` (an overflow-x:auto clipboard). **No horizontal overflow** (S-10).

### 3.5 Preference/fallback audit
| Preference | Effect | Evidence |
|---|---|---|
| `prefers-reduced-transparency: reduce` | glass → solid `--glass-bg-solid` on all `.glass…` surfaces incl. new card surfaces | ✅ compiled rule present in `dist/_astro/Base.*.css` |
| `@supports not (backdrop-filter)` | same solid floor | ✅ compiled |
| `prefers-reduced-motion` | no new animation; fade-up reveal already guarded; chips/card hover transform still runs only under `no-preference` | unchanged (S-8) |
| No-JS | glass is pure CSS; reveal enhancement-only | unchanged (S-7) |

### 3.6 Rendered material audit (computed styles, headless Chromium)
| Surface | Dark bg | Border | Radius | Backdrop |
|---|---|---|---|---|
| `.work-card` | `color(srgb 0.074/0.083/0.099 / 0.65)` (canvas 65% tint) | `rgba(255,255,255,.14)` | 12px | none (local override) |
| `.testimonial-card` | same | same | 12px | none |
| `.gh-contrib-card` | same | same | 12px | none |
| `.tech-item` | same | white 14% | 6px | n/a |
| `.more-projects` | same | white 14% | 12px | none |
| `.section-band` | radial accent `--color-glow` layer present | — | — | — |

Dark = R5 dark recipe; light = translucent white 66% + white 55% edge. Confirms token-driven, no hard-coded component hex.

### 4. Screenshots (for owner review)
- `/tmp/r5-3_top_dark.png` — hero + work section head (dark, 1440)
- `/tmp/r5-3_cards_dark.png` — work cards + more-strip + GitHub (dark, 1440)
- `/tmp/r5-3_cards_light.png` — same region (light, 1440)
- `/tmp/r5-3_mobile_dark.png` — cards (dark, 390)

## 5. Decisions exercised this phase (from plan §5)
- **A1 WorkCard → glass-card** whole card; hover transform-only.
- **Chips** = glass chip + tonal brand glow (20% mix), brand box-shadow retained tonally.
- **A (bands)**: one masked `--color-glow` layer per section — matches the hero recipe; extracted to `.band-host`/`.section-band` for reuse.
- **D4** more-projects as glass strip (I), rows untouched.
- **Ink-dim on glass**: dedicated `--color-ink-dim-glass` (4.57/4.64 :1 on band) instead of weakening the band or global ink-dim.

## 6. Risks / residual
- **Backdrop-filter on cards deliberately OFF**: cards/tunes sit over a smooth ambient band — zero blur to extract; keeping it would only spend GPU layers (spec §12 "no stacking"), and the material (tint + edge + highlight) reads identically. Only hero panel truly blurs a live (matrix) field.
- Screenshots reviewed? Owner visual check recommended (my model cannot ingest images); computed-style audit above stands as the automated verification.

## 7. Acceptance-criteria self-review (spec §2)
S-1 (100/100/100/100) 🟢 · S-2 (≤35 KB JS: 0 added) 🟢 · S-3 (HTML ≤120 KB) 🟢 · S-4 (axe 0) 🟢 · S-5 (19/19 flat + 24/24 incl. glass layers) 🟢 · S-6 (CLS 0) 🟢 · S-7 (no-JS unchanged) 🟢 · S-8 (reduced-motion unchanged) 🟢 · S-9 (glass→solid fallback) 🟢 · S-10 (no overflow) 🟢 · S-11 (zero claims changed) 🟢 · S-12 (zero new deps) 🟢.