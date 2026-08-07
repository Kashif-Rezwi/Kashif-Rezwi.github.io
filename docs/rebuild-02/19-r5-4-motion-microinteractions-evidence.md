# R5-4 — Motion & Micro-Interactions: Evidence

- **Purpose:** Acceptance self-review + repo checks for phase R5-4 (spec §6 motion motifs + §9 R5-4) — glass settle-in, reveal refinement, field breathe, focus echo, hover catch — implemented as CSS-only micro-interactions over the R5 glass surfaces.
- **Authority:** Owner "go" (2026-08-07); subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).

## 1. Scope delivered

| Motif (spec §6) | Implementation | Where |
|---|---|---|
| Glass settle-in | `@keyframes glass-settle` — fade to crisp + 8px rise, `--duration-xslow` ease-out; replaces the hero plate's generic `animate-fade-up` | `.glass-settle` in `global.css`; applied to `.hero-panel` in `index.astro` |
| Reveal refinement | `.reveal` transition unified from raw `0.55s` to the `--duration-slow` seed (400ms) — motion sync per §5.2 | `global.css` `.js-reveal .reveal` |
| Field breathe | `@keyframes field-breathe` — 8s ease-in-out opacity 1↔0.85 on the hero ambience (dot backdrop); range keeps composite alpha ≤ verified full-band → on-glass AA only improves | `.hero-ambience` gains `field-breathe` |
| Focus echo | `.glass / .glass-panel / .glass-card:focus-within` → accent-tinted edge (`--color-accent-text`), `--duration-fast` transition; complements the global `:focus-visible` outline (WCAG 2.4.11) | `global.css`; work/testimonial base transitions extended with `border-color` so the echo animates through the unlayered rules |
| Hover catch | `.work-card::after` one-pass diagonal shine sweep using `var(--glass-highlight)`, opacity 0→1 + `translateX(-120%→280%)` at `--duration-xslow`, `pointer-events: none` | `WorkCard.astro` (scoped, gated no-preference) |

**Not in scope (unchanged):** section-band shimmer (kept calm behind text), contact CTA glass, case-study pages (R5-5), experience rail, R5-6 cleanup. **No JS added; no deps; zero claims touched.**

## 2. Git truth + deliverable state

- Branch `evolve-design`; HEAD `6cd44b6` (R5-3), clean tree, origin == local before R5-4 edits.
- Change set (uncommitted): `src/styles/global.css`, `src/pages/index.astro`, `src/components/WorkCard.astro`, `src/components/TestimonialCard.astro`; new plan `docs/rebuild-02/18-r5-4-motion-microinteractions-plan.md`; new evidence (this). `github-contributions.json` build churn reverted. No commit yet (owner gate).

## 3. Verification (spec §9 R5-4 done-when)

### 3.1 Build

| Check | Result |
|---|---|
| `npm run build` | ✅ 6 pages, 0 warnings, complete |
| Compiled CSS tokens | ✅ `glass-settle` ×3, `field-breathe` ×3, `focus-within` ×3, `--duration-slow` ×2 in `dist/_astro/Base.*.css` |

### 3.2 Contrast (no token change; breathe only dims)

| Check | Result |
|---|---|
| `npm run check:contrast` | ✅ **19/19** PASS |
| `npm run check:glass-contrast` | ✅ **24/24** PASS (dims never exceed verified full band → on-glass worst case unchanged) |

### 3.3 Lighthouse (preview `http://localhost:4322`, dark)

| Metric | Result |
|---|---|
| Performance / Accessibility / Best-practices / SEO | ✅ **100 / 100 / 100 / 100** |
| TBT / CLS / LCP | ✅ **0 ms / 0 / 1.3 s** (motion budget holds) |

### 3.4 Axe-core 4.10.2

| Theme | Result |
|---|---|
| dark | ✅ 0 violations (45 passes) |
| light | ✅ 0 violations |

### 3.5 Reduced-motion static audit (§9 "Reduced-motion screenshot diff")

Emulated `prefers-reduced-motion: reduce` at desktop, normal scroll → computed audits + two screenshots taken 1.2 s apart:

| Check | Result |
|---|---|
| `matchMedia(reduce)` matches | ✅ true |
| `.hero-panel` animation | ✅ `none` / `0.01ms` — no settle |
| `.hero-ambience` animation | ✅ `none` — no shimmer |
| `.work-card::after` (shine) | ✅ pseudo-element absent (no rule under reduce; opacity 1 = default of non-existing pseudo) |
| Panel visibility | ✅ opacity 1, transform none — content immediately visible |
| Screenshot diff (`/tmp/r5-4_rm_a.png` vs `b`, 1.2 s apart) | ✅ **byte-identical SHA-256** — page fully static |

### 3.6 Motion budget (§6: 0 blurred layers animating; ≤ 3 simultaneous micro-animations/viewport)

| Audit | Result |
|---|---|
| Elements running an animation at load | `hero-ambience` (field-breathe, 8s, **infinite**) + `.hero-panel` + 7 children (settle/fade-up, `both` fill — **finite, complete once**) |
| `backdrop-filter` animated anywhere | ✅ none — all new motion animates opacity/transform on non-blur overlays |
| Hover shine | ✅ `transform`+`opacity` only, gated no-preference |
| Footprint | ✅ steady-state infinite animations = 1 (field-breathe); dust state identical under reduced motion |

### 3.7 No-JS / reduced-transparency

| Check | Result |
|---|---|
| No-JS | ✅ motion is pure CSS enhancement; reveal stays `.js-reveal`-gated; content visible by default (S-7) |
| `prefers-reduced-transparency` | ✅ untouched — glass→solid fallback rules unchanged in compiled CSS |

### 3.8 Horizontal overflow (real viewport resize)

| Width | 320 | 390 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|
| `scrollWidth ≤ clientWidth` | ✅ | ✅ | ✅ | ✅ | ✅ |

### 3.9 Acceptance self-review (S-1…S-12)

S-1 (Lighthouse 100/100/100/100) 🟢 · S-2 (≤35 KB JS: 0 added) 🟢 · S-3 (HTML ≤120 KB) 🟢 · S-4 (axe 0) 🟢 · S-5 (19/19 + 24/24 incl. glass layers) 🟢 · S-6 (CLS 0) 🟢 · S-7 (no-JS unchanged) 🟢 · S-8 (reduced-motion static — proven by screenshot diff) 🟢 · S-9 (reduced-transparency falls back) 🟢 · S-10 (no overflow) 🟢 · S-11 (zero claims changed) 🟢 · S-12 (zero new deps) 🟢.

## 4. Decisions + rationale (recorded, DL-059)

- **D1** field breathe targets only `.hero-ambience`; section bands stay static behind text-heavy cards (noise + AA risk). Resolves **OQ-R5-3** (keep dots, field felt via glow shimmer) — OQ-R5-3 → ✅ resolved in spec.
- **D2** hover catch only on WorkCard (flagship card, §7); testimonial/GitHub keep their transform lifts; shine uses `--glass-highlight`, `pointer-events: none`, clipped by card overflow.
- **D3** glass-settle replaces plate `animate-fade-up` (8px vs 20px rise) — the §6 "glass panels vary translate direction" clause; children keep stagger.
- **D4** focus echo via `border-color` transition on `:focus-within`; complements global `:focus-visible` ring; discovered the layered-vs-unlayered cascade → added `border-color` to `.work-card`/`.testimonial-card` base transitions (evidence: computed `transitionProperty: transform, border-color`; `borderColor` echo = `rgb(169,200,255)`).

## 5. Residuals / notes

1. Field breathe range 1↔0.85 (not 1↔0.10): 0.85 keeps the field legible while remaining "extremely slow, a shimmer not a blink" (spec §6); dimming only improves contrast. Owner can ask for a wider range.
2. GitHub card is a local (non-`.glass-card`) glass surface; the global focus echo doesn't apply there (it has no transition rule of its own to animate through) — its contents' `:focus-visible` ring still shows. If the owner wants the edge echo there too, R5-6 (architecture) can promote a shared utility plus it.
3. Screenshots for visual review: `/tmp/r5-4_hero_dark.png`, `/tmp/r5-4_hero_light.png`, `/tmp/r5-4_mobile_dark.png`, `/tmp/r5-4_shine_dark.png`, `/tmp/r5-4_rm_a.png` (reduced-motion static).

**Result:** R5-4 motion & micro-interactions implemented, fully motion-safe, budget-compliant (0 blurred layers animating, one steady-state infinite animation), static under reduced motion (verified), all quality gates green. **Next gate (owner): R5-5 — case-study + inner pages.**