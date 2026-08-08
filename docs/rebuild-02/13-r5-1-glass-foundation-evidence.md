# R5-1 — Glass Foundation: Evidence

- **Purpose:** Prove the R5 glass **foundation** (tokens + utilities) is correctly and safely in place: compiled into the production CSS, unused by markup (zero visual diff), contrast-safe, and wired into the R5 Operating Loop artifacts.
- **Authority:** Owner "go" for R5-1 (2026-08-07, DL-054/055 loop; `docs/rebuild-02/11-r5-glassmorphism-design.md` §9 R5-1).
- **Scope of R5-1:** Tokens (§5.1/5.2), `.glass`/`.glass-panel`/`.glass-card` utilities, `.field-backdrop`, `@supports` fallback, transparency preference, `--duration` + `--elevation` seeds, defect-A dead-token cleanup, defect-E text-utility extraction. **No render-side wiring** (that is R5-2+ per spec).
- **Last updated:** 2026-08-07
- **Related:** [`11-r5-glassmorphism-design.md`](./11-r5-glassmorphism-design.md) · [`global.css`](../../src/styles/global.css) · [`engineering-workflow.md`](../engineering/engineering-workflow.md)

---

## 1. Objective & done-when (workflow step 2)

- **Objective:** Lay the *material and vocabulary* for R5 — theme-derived glass tokens, glass surface primitives with graceful-degradation fallbacks, and motion/elevation seeds — **without touching any rendered page** (zero visual diff, by design, because no markup uses the new classes yet).
- **Done-when evidence (from spec §9 R5-1):**
  1. **Utilities run nowhere yet → zero visual diff.** ✅ verified below.
  2. **Token contrast floor** for the new tokens. ✅ verified below (glass fallback = `--glass-bg-solid` = `--color-surface`, which already passes all AA checks; live on-glass contrast is enforced at §5.3 / R5-2).

## 2. Git truth + operating state (workflow step 1)

- Branch: `evolve-design` (HEAD `c9cc3f4`, clean; DL-054/055 already committed).
- Change surface: **single file** — `src/styles/global.css` (+102/−8). No markup, no JS, no config.
- `github-contributions.json` churn from the `npm run build` data-fetch (R3-D prebuild hook) was reverted — it is orthogonal to R5-1 and will be refreshed at deploy.
- Everything in scope follows the loop: Orient (read spec/git) → Decide/Plan → Build → Prove (sections 4–5) → Record (this file + project-status + decision log).

## 3. What was built

### 3.1 Defect A — dead tokens removed
- **Removed** `--color-success: #4ade80` and `--color-warning: #fb923c` (unused since Status pills left in R3-C). Verified **zero matches** in `src/` and none emitted in the built CSS (count = 0). Smaller regression surface, honest token bar.

### 3.2 New design tokens (`src/styles/global.css`)
- **Glass material (§5.1/5.2):**
  - `--glass-blur: 12px` (inside the 8–15 px band)
  - `--glass-saturate: 1.15` (dark) → `1.05` (light override)
  - `--glass-bg` (theme-derived fill: canvas 62% + accent tint dark; white 66% + cooler tint light — per spec §5.1)
  - `--glass-border` (white 14% dark / 55% light edge line)
  - `--glass-highlight` (top-edge "catch light" linear-gradient)
  - `--glass-bg-solid` (= `--color-surface`) — the AA-safe fallback / solid floor
  - `--color-glow` (radial accent ambience for the field behind glass)
- **Motion + elevation seeds (§5.2):** `--duration-fast 150 ms / base 250 ms / slow 400 ms / xslow 700 ms`; `--elevation-sm/md` (soft gauss — **no default depth**; reserved for optional interactive glow per spec). Elevation uses fixed `rgba(0,0,0,…)` so it behaves identically in both themes (a `color-mix` from `--color-canvas` would flip to white in light mode — avoided).
- **Defined in all three theme scopes:** `:root` (dark) · `:root[data-theme='light']` · `@media (prefers-color-scheme: light)` — same convention as the existing palette, so the token system stays single-source.

### 3.3 New utilities / component classes (`global.css`)
- `.glass` (material), `.glass-panel`, `.glass-card` (shape) — `position: relative`, `background: var(--glass-bg)`, static `backdrop-filter: blur(…) saturate(…)`, `1px` border, `--radius-card`, `::before` top-edge catch light.
- `.field-backdrop` — ambient radial glow band for panels floating over the dot field.
- **`@supports not (backdrop-filter)` fallback** → `--glass-bg-solid`, blur disabled, catch light removed (S-9).
- **`@media (prefers-reduced-transparency: reduce)`** → same solid floor per §3.2.
- **Defect E extraction:** `.label-overline`, `.meta`, `.mono` text utilities created; wired into components later (R5-5/R5-6) so refactors stay additive-only.
- **Anti-patterns respected (spec §12):** blur never animated (`backdrop-filter` is static; no `will-change`), no default `box-shadow`/ghost depth on glass, blur value ≤ 8–15 px band, no new JS/fonts/routes.

### 3.4 Nothing else
- Defect B (dead animation rules) left for R5-6 (cleanup phase) per spec; defect C (elevation token adoption) belongs to R5-3 (cards). Zero interference.

## 4. Verification

### 4.1 Build & contrast
- `npm run check:contrast` → **16/16 PASS** (existing palette unchanged; glass solid floor = surface is already covered).
- `npm run build` → **6 pages**, 0 warnings/errors; the fetch-regeneration hook ran as designed (R3-D); the data snapshot was reverted for the commit.

### 4.2 Zero visual diff (the R5-1 contract)
- **No markup uses the glass classes:** grep of `src/` for `glass-panel|glass-card|field-backdrop|glass` in element `class` → only `global.css` definitions found (all matches are in CSS). No component/pages touched.
- **No markup uses the text utilities yet:** grep confirms `.label-overline` / `.meta` / `.mono` appear **only** in CSS. (Existing long forms like `.case-hero-meta`/`.testimonial-meta` are distinct, intact classes.)
- **Built CSS contains the final rule** — `dist/_astro/*.css` → `backdrop-filter: blur(var(--glass-blur))`. Token presence confirmed: glass-blur 2×, saturate 4×, bg 10×, border 4×, highlight 4×, glow 7×, duration 1×, elevation 1×, field-backdrop 1×.
- Dead status colors: 0 occurrences in built CSS.

### 4.3 Contrast story for glass (S-5, staged)
- The **fallback / OS-reduced floor** (`--glass-bg-solid` = `--color-surface`) already passes every existing AA pair for all three ink tiers in both themes (16/16).
- **Actual on-glass text AA** is *not* claimable until a glass surface exists behind real content — that is exactly what R5-2 runs (§5.1/§7, S-5 "incl. glass layers"), using the same `check-contrast` plus a rendered screenshot pass per §5.3.
  → Correctly decoupled: under-glass AA belongs to the phase that creates content on glass, not a CSS-only phase.

## 5. Acceptance-criteria self-review (workflow step 9a)

| Done-when (from §1) | Result |
|---|---|
| Zero visual diff (nothing wired) | ✅ single-file CSS change; classes unused |
| Token contrast floor | ✅ solid fallback is existing AA-safe surface (16/16) |
| All spec §9 R5-1 scope | ✅ sections 3.1–3.4 |
| Existing quality-bar boundaries | unchanged: 0 JS, no new dependencies/fonts/routes |
| `npm run build` clean | ✅ 6 pages |

## 6. Docs-vs-code-vs-git consistency (workflow step 9b)

- Branch/status/docs consistent: `evolve-design` carries the spec (DL-055) + this plan; one code diff, one file; no gains or losses of cross-references.
- Class names in code (`glass`, `glass-panel`, `glass-card`, `field-backdrop`, token seeds) match the verbal contract / R5-0 §5.1/§5.2 exactly, so later agents query the same names.

## 7. Residual risk / notes for R5-2

1. **Light-theme glass** recipe (OQ-R5-2 option A) is provisionally encoded in tokens; on-glass AA is confirmed when R5-2 **actually renders glass on the hero**; if it fails, the swappable token means switching to near-opaque (option B) is a one-line change.
2. **`backdrop-filter` + `@supports`** — verified at build/CSS level today; browser/GPU behavior gets a sanity pass on the rendered page in R5-2 (full quality gates still live in R5-7).
3. **Deferred by spec:** defect B (dead animation rules) and defect C (elevation adoption) stay for the phases R5-0 assigns them (R5-6 / R5-3).

---

**Result:** R5-1 glass foundation is complete — additive-only, zero visual change, build + contrast green, evidence-documented. **Next gate (owner): R5-2 — Header + hero glass (spec §9).**