# R5-5 — Case-Study + Inner Pages Glass: Evidence

- **Purpose:** Acceptance self-review + repo checks for phase R5-5 (spec §7/§9 row R5-5) — page-hero glass band, sidebar glass cards, case-cover glass frame, mobile nav drawer glass — implemented per the pre-agreed plan `20-r5-5-inner-pages-plan.md`.
- **Authority:** Owner "go" (2026-08-07) to start R5-5 after R5-4; subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`), the R5 Operating Loop (`docs/engineering/engineering-workflow.md`), and `AGENTS.md`.

## 1. Scope delivered

| Surface (spec §7/§9) | Implementation | Where |
|---|---|---|
| Page-hero glass band | `.case-hero` becomes `band-host` (relative, isolate, overflow hidden) + `.section-band` (`aria-hidden`, `pointer-events: none`) using the `--color-glow` recipe masked to a soft radial; `.case-hero-inner.glass-band` → `--glass-bg` + `--glass-border` + `--radius-card`, `backdrop-filter: none` (§12: smooth masked field → nothing to blur) | `src/pages/work/[slug].astro` |
| Hero meta on glass | `.case-hero-meta` moves to `glass-settle` (R5-4 motion reused); title/summary/links keep fade-up + stagger; `.case-period`/`.case-sep` → `--color-ink-dim-glass` | `src/pages/work/[slug].astro` |
| Sidebar glass cards | `.case-sidebar-card` → glass (tint + border + radius, no blur), `.case-sidebar-label` → `--color-ink-dim-glass`; keeps `glass-card` catch-light | `src/pages/work/[slug].astro` |
| Case-cover glass frame | `.case-cover` → glass frame (tint + `--glass-border` + radius + overflow hidden); image unchanged; no blur | `src/pages/work/[slug].astro` |
| Mobile nav drawer | `.mobile-nav` → navbar token recipe: `--glass-bg` + `blur(var(--glass-blur)) saturate(var(--glass-saturate))` + `--glass-border` top; `@supports not backdrop-filter` → `--glass-bg-solid`; `prefers-reduced-transparency` → solid; link separators → `--glass-border` | `src/components/Header.astro` |
| Contrast script | New **centre scenario** — the case-hero band sits at the glow *peak* (dark 0.14 / light 0.10), not the card-zone half (7%/5%): the 3 core ink tokens are now checked over canvas + band + centre × both themes | `scripts/check-glass-contrast.mjs` |

**Not in scope (unchanged):** case-study body prose stays flat (§10); resume page; 404; experience rail; footer; home page; all claims/copy. **Zero new JS/deps.**

## 2. Git truth + deliverable state

- Branch `evolve-design`; HEAD `809dce8` (R5-4, pushed), tree clean, origin == local before R5-5 edits.
- Change set (uncommitted): `src/pages/work/[slug].astro`, `src/components/Header.astro`, `src/styles/global.css` (token raises below), `scripts/check-glass-contrast.mjs`; new plan `20-r5-5-inner-pages-plan.md`; this evidence. `github-contributions.json` shows only a `fetchedAt` timestamp bump from the re-fetch tooling — **not part of R5-5**; left uncommitted. No commit yet (owner gate).

## 3. Verification (plan §5 done-when)

### 3.1 Build

| Check | Result |
|---|---|
| `npm run build` | ✅ 6 pages, 0 warnings, complete |
| Compiled CSS | ✅ glass rules present in `dist/_astro/Base.*.css` (case-hero band, sidebar, cover, mobile-nav fallbacks) |

### 3.2 Contrast (token change: D4 play — minimal raises at the glow peak)

| Check | Result |
|---|---|
| `npm run check:contrast` | ✅ **19/19** PASS |
| `npm run check:glass-contrast` | ✅ **30/30** PASS (was 24; +centre scenario) |

The centre scenario exposed exactly the D4-predicted failures — dark `ink-muted` 4.34:1, dark `ink-dim-glass` 4.11:1, light `ink-dim-glass` 4.43:1 over the glow-peak glass. Same play as R5-3's `--color-ink-dim-glass`: minimal token raises preserving the muted/dim step:

| Token | Before | After | Centre ratio |
|---|---|---|---|
| `--color-ink-muted` (dark) | `#888888` | `#8d8d8d` | 4.63:1 |
| `--color-ink-dim-glass` (dark) | `#848484` | `#8b8b8b` | 4.51:1 |
| `--color-ink-dim-glass` (light) | `#6c6c6c` | `#6a6a6a` | 4.56:1 |

No accent/ink changes; all other checks only improved.

### 3.3 Lighthouse (case-study page `/work/perplexity/`, preview `http://localhost:4322`)

| Metric | Desktop | Mobile |
|---|---|---|
| Performance / Accessibility / Best-practices / SEO | ✅ **100/100/100/100** | ✅ **100/100/100/100** |
| TBT / CLS / LCP | ✅ **0 ms / 0 / 1.0 s** | ✅ **0 ms / 0 / 1.0 s** |

### 3.4 Axe-core 4.10.2 (slug page)

| Theme | Result |
|---|---|
| dark | ✅ 0 violations (44 passes) |
| light | ✅ 0 violations (43 passes) |

### 3.5 Computed-material audit (the glass actually landed as specified)

| Surface | Audit result |
|---|---|
| `.case-hero` | ✅ `position: relative` (band-host); `.section-band` `inset: 0`, masked radial at `50% 45%`, `pointer-events: none` |
| `.case-hero-inner.glass-band` | ✅ bg `color(srgb … 0.6504)` (glass-bg composite), `1px solid rgba(255,255,255,0.14)` border, radius 12px, **backdrop-filter: none** |
| `.case-sidebar-card` (×2) | ✅ glass bg composite, `backdrop-filter: none`, label = `#8b8b8b` (new dark dim-glass) |
| `.case-cover` | ✅ glass bg + border, radius, **backdrop-filter: none** |
| `.mobile-nav` (closed) | ✅ glass bg + `blur(12px) saturate(1.15)` + `1px solid rgba(255,255,255,0.14)` top border, max-height 0/visibility hidden |
| `.mobile-nav` (open, menu toggled) | ✅ max-height 240.8px, visible; links at `#8d8d8d` (new dark ink-muted) / accent-light for Resume; separators `--glass-border` |

### 3.6 Reduced-motion / fallbacks

| Check | Result |
|---|---|
| `glass-settle` gating | ✅ rule lives inside `@media (prefers-reduced-motion: no-preference)` (global.css:578) — untouched |
| Drawer toggle | ✅ unchanged logic/transition (R5-4 behavior kept) |
| `@supports not backdrop-filter` | ✅ drawer falls back to `--glass-bg-solid` (mirrors header) |
| `prefers-reduced-transparency` | ✅ drawer falls back to solid; no new transparency-dependent content |

### 3.7 Horizontal overflow (real viewport resize)

| Width | 320 | 390 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|
| `scrollWidth ≤ clientWidth` | ✅ | ✅ | ✅ | ✅ | ✅ |

### 3.8 Acceptance self-review (S-1…S-12)

S-1 (Lighthouse 100/100/100/100 on a case page) 🟢 · S-2 (≤35 KB JS: 0 added) 🟢 · S-3 (HTML ≤120 KB) 🟢 · S-4 (axe 0) 🟢 · S-5 (19/19 + 30/30 incl. glass layers) 🟢 · S-6 (CLS 0) 🟢 · S-7 (no-JS unchanged — glass is CSS-only decoration over static content) 🟢 · S-8 (reduced-motion untouched; only static glass added) 🟢 · S-9 (reduced-transparency falls back) 🟢 · S-10 (no overflow) 🟢 · S-11 (zero claims changed) 🟢 · S-12 (zero new deps) 🟢.

## 4. Decisions + rationale (recorded, DL-060)

- **D1** sidebar cards = local glass, no blur (flat canvas behind → nothing to blur; §12).
- **D2** hero = soft glass over masked `--color-glow` band; hero band sits at the glow *peak* → centre scenario, not the card-zone half.
- **D3** drawer uses the header's exact token recipe incl. blur (open drawer + fixed header = one continuous glass panel) with both fallbacks mirrored.
- **D4** on-glass contrast script extended 24 → 30 with the centre scenario; failures fixed by the same minimal-token-raise play R5-3 used (no hierarchy flattening).

## 5. Residuals / notes

1. `--color-ink-muted` (dark) was raised `#888888 → #8d8d8d` globally — a 5-step lift that only improves contrast everywhere; the muted-vs-dim step is preserved (dim-glass is 2 steps below muted in both themes).
2. Case pages now verify against the glow peak; R5-3's card checks remain at the card-zone half — both modeled in the one script.
3. `github-contributions.json` timestamp bump is tooling churn, excluded from this phase's change set.
4. Screenshots for visual review: pending owner-visible captures (computed-style audits stand in as this session's evidence; the model cannot see images).

**Result:** R5-5 case-study + inner pages glass implemented, 30/30 on-glass AA (incl. the glow-peak centre), Lighthouse 100/100/100/100 on a case page (mob+desk), axe 0, no overflow, motion/fallback policies untouched, zero claims/deploys. **Next gate (owner): R5-5 approval → commit → R5-6 (architecture cleanup).**
