# R5-2 — Header + Hero Glass: Implementation Plan

- **Purpose:** The bounded plan for phase R5-2 of the R5 glassmorphism evolution (spec §9 row R5-2). The first phase that **renders** glass.
- **Authority:** Owner "go" (2026-08-07) to start R5-2; subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).
- **Last updated:** 2026-08-07
- **Related:** [`11-r5-glassmorphism-design.md`](./11-r5-glassmorphism-design.md) §5/§7/§9/§11 · [`13-r5-1-glass-foundation-evidence.md`](./13-r5-1-glass-foundation-evidence.md) · [`project-status.md`](../project-status.md) · [`decision-log.md`](../decision-log.md)

---

## 1. Objective

Apply the R5 glass material (tokens built in R5-1) to the **navbar** and the **hero identity plate**, delivering the signature "console window into the live build" moment — the first visible glass — without regressing any acceptance criterion (S-1…S-12).

## 2. Git truth (loop step 1)

- Branch: `evolve-design`. HEAD `30a77fd` (`chore: update github contribution data …`), parent `bf60056` (R5-1 glass foundation, DL-056). Working tree clean; **origin/evolve-design == local** (pushed).
- Base for R5-2: `evolve-design` only. R4 work + testimonials already in `develop`; `gh-pages` = production (R3). No merge/deploy this phase.

## 3. Scope

**In scope (the §7 score table, rows "Header" and "Hero"):**
- Header/navbar (`src/components/Header.astro`): replace the accidental frost recipe (`color-mix(canvas 85%) + blur(12px)`, no saturate, no edge) with the token glass: `--glass-bg`, `--glass-blur` + `--glass-saturate`, an edge line, and the reduced-transparency / `@supports` fallback → solid surface. Intensity **II**.
- Hero (`src/pages/index.astro`): float the identity plate (**`.hero-content`**) as one glass panel over the live matrix — name, role badge, direction, bio, CTA row. Add a subtle `--color-glow` ambient field behind the hero so the backdrop reads as the luminous field. Intensity **III** (glass + glow).
- Contrast: verify all hero text on glass and navbar text on glass (AA as rendered) — dark **and** light.
- Evidence: build, contrast, Lighthouse, axe, responsive, reduced-transparency fallback.

**Out of scope (owner-locked / later phases — mandatory):**
- Portrait + its ring (untouched). Role-badge parallelogram + white text (untouched). Claims/copy (S-11 — zero copy changes).
- All other surfaces (work cards, tech chips, testimonials, GitHub, contact, now, footer) → **R5-3+ (they are NOT in this phase).**
- Motion/micro-interactions (field shimmer, reveal refinement) → **R5-4**.
- Case-study/inner pages, architecture refactor (`SectionHeader`, `GlassPanel`) → R5-5/R5-6.
- Deploy/promote → owner-gated R5-8.

## 4. Constraints (from spec §12, §5.4, success criteria §2)

- Glass only over a rich backdrop: header over scroll content, hero over the matrix — both qualify.
- ≤3 glass surfaces per viewport; this phase adds exactly **2** (header + hero plate).
- Never animate `backdrop-filter`; static `backdrop-filter` only; no `will-change`.
- No new JS, no new dependencies, no new fonts, no routes.
- Fallbacks wired: `@supports not (backdrop-filter)` and `prefers-reduced-transparency: reduce` → `--glass-bg-solid`.
- Text on glass must pass AA **as rendered over the live backdrop** (S-5); fall back to near-opaque if it fails.

## 5. Decisions (loop steps 4–6; min 2 approaches)

### D1 — Navbar treatment
| Option | Pros | Cons |
|---|---|---|
| **A1 (chosen): token glass** — `--glass-bg` + `blur(--glass-blur) saturate(--glass-saturate)` + 1px `--glass-border` bottom edge | one source of truth; consistent with §5.1 recipe; edge described by token; fallback automatic | translucent at 62% needs verifying readability over busy content scroll (A11y) |
| A2: keep hand-rolled `color-mix(85%)` | zero risk | violates "glass tokens from `global.css` only" (§3 §hard rule); leaves the accidental recipe the spec calls out (§3.3) |

**Decision A:** **A1.** The navbar is already glass — this systematizes it (per §7). Mobile drawer inherits the glass bg (it sits under the header bar).

### Approach B — Hero identity presentation
| Option | Pros | Cons |
|---|---|---|
| **B1 (chosen): single glass plate over the matrix** — whole identity column (label..CTA) on one `.glass-panel` with padding; glow band behind | one device-crank surface (§4.2: ≤3 glass); the "window" metaphor is strongest; CTA row rides the glass as intended | bigger visual change; must re-check text contrast on the tint |
| B2: separate glass on CTA row only (belt) | even lighter touch | doesn't earn the "signature change" (§7 row Hero = III); plate nothing about the identity block |
| B3: fragment glass (name plate, direction plate, etc.) | granular | creates multiple nested-looking surfaces (violates ≤3 per viewport feel; double-glass anti-pattern) |

**Decision: B1** — one glass plate (`.hero-content` gets `glass-panel` + scoped overrides), plus a `.hero-glow` ambient layer (accent radial, `aria-hidden`, pointer-events none) behind the plate so text sits over an illuminated console field rather than flat alpha.

## 6. Done-when (measurable)

1. `npm run build` → 6 pages, 0 warnings.
2. `npm run check:contrast` → current 16/16 still PASS (no token regression).
3. **On-glass contrast report** (this phase's new check): hero identity text + navbar text vs the composited glass-over-canvas color — all ≥ 4.5:1 (AA) in dark **and** light. Computed in `scripts/check-glass-contrast.mjs` from the §-5.1 formulas and the real `--glass-bg` tokens.
4. Lighthouse home (mobile + desktop, dark theme) all categories ≥ 95 (target the R3 100 baseline); TBT 0 (S-2/S-6).
5. axe (axe-core 4.10.2 via jsdelivr, matching qa-report §F3) on `/` dark + light → `[]` violations.
6. Responsive: widths 320/390/768/1024/1440, **no horizontal overflow** (S-10).
7. Reduction/preference audit: `prefers-reduced-transparency` on → header+hero glass resolve to solid `--glass-bg-solid`; `prefers-reduced-motion` → no new animation (S-8).
8. Screenshots: `/` hero+header in dark and light (mobile+desktop) — evidence doc.
9. No copy, claim, dependency, or route change (S-11/S-12).

## 7. Files touched

| File | Change |
|---|---|
| `src/components/Header.astro` | `header` style → glass tokens (`--glass-bg`, `--glass-blur`, `--glass-saturate`, `--glass-border` bottom edge, `transition: background var(--duration-…)`), `@supports` + reduced-transparency fallbacks; inline JS unchanged |
| `src/pages/index.astro` | hero markup: add `hero-panel`/`hero-glow` wrapper classes; scoped CSS: glass plate + glow + responsive tweaks; portrait/role badge untouched |
| `scripts/check-glass-contrast.mjs` | **new** — computes composited glass over canvas and AA-checks hero/nav text tokens (dark+light) |
| `docs/rebuild-02/15-r5-2-header-hero-glass-evidence.md` | phase evidence doc (prove step) |

## 8. Risks / rollback

- **Translucent navbar over dense content** → text stays AA because navbar text tokens already pass on canvas; enforcement at runtime. Mitigation: keep 8–15 px blur; content behind still reads "frost," not opaque (spec intent).
- **Glass plate text contrast** (in dark/light) → covered by the new on-glass contrast script; if any pair fails, fall back locally to `--glass-bg-solid` (still glass-Border edge) via the built-in `prefers-reduced-transparency` path and record the open question OQ-R5-2 outcome.
- Rollback: single working-tree change set on `evolve-design`; revert and re-PROVE in <5 min (no deploy happened).

## 9. Gate

End of phase → record (`docs/decision-log.md`, `docs/project-status.md`, spec changelog, evidence doc) → **stop for R5-2 owner approval** before R5-3.

---

*End of plan. Implementation begins after commit of this doc (or together).*