# R5-4 — Motion & Micro-Interactions: Implementation Plan

- **Purpose:** The bounded plan for phase R5-4 of the R5 glassmorphism evolution (spec §9 row R5-4). Adds the spec §6 motion motifs — **glass settle-in, reveal refinement, field breathe, focus echo, hover catch** — as pure CSS over the R5-3 glass surfaces, with zero new JS/deps and strict motion-safe gating.
- **Authority:** Owner "go" (2026-08-07) to start R5-4; subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).

## 1. Objective

Make the R5 glass feel alive in the most restrained possible way: an entrance (hero plate settles in), a living field (extremely slow shimmer on the hero ambience), keyboard feedback on glass (focus echo), and one premium hover cue (shine sweep on work cards). Everything CSS-only, everything gated by `prefers-reduced-motion`, nothing animates `backdrop-filter` (spec §6 rules, motion budget: **0 blurred layers animating, ≤ 3 simultaneous micro-animations per viewport**).

## 2. Git truth

- Branch: `evolve-design`. HEAD `6cd44b6` (R5-3 commit, pushed). Working tree **clean**; **origin/evolve-design == local**.
- Base for R5-4: `evolve-design` only. No merge/deploy this phase; `gh-pages` = production (R3). `develop` already carries R4 + testimonials (DL-055).

## 3. Scope

**In scope (§6 motifs + §9 R5-4):**

| Motif | Implementation | Reduced-motion mode |
|---|---|---|
| Glass settle-in | `.glass-settle` entrance on the hero plate (fade to crisp, short 8px rise, `--duration-xslow`, ease-out) | instant (rule gated `no-preference`; reduced-motion = no animation, content visible) |
| Reveal refinement | `.reveal` transition unified to `var(--duration-slow)`; glass panels get the settle-in as their distinct direction (children keep their stagger) | instant (existing `.js-reveal` guard + global kill) |
| Field breathe | `@keyframes field-breathe` — 8s ease-in-out opacity shimmer (1 → 0.85 → 1) on `.hero-ambience` only (the dot backdrop; section bands stay calm behind text) | static (gated `no-preference`) |
| Focus echo | `.glass-panel:focus-within, .glass-card:focus-within` → accent-tinted border echo (transition `--duration-fast`); existing global `:focus-visible` outline unchanged | n/a (non-motion affordance) |
| Hover catch | `.work-card::after` diagonal shine sweep on hover using `var(--glass-highlight)` (opacity + translateX pass, transform-only, `pointer-events: none`) | instant (gated `no-preference`; no sweep, no lift flash) |
| Theme react | matrix/gradients re-tint on theme change | unchanged (already exists) |

**Out of scope:** section bands shimmer (keep calm behind text-heavy cards), contact CTA glass (later phase), case-study pages (R5-5), experience rail glass, architecture refactor / dead-CSS cleanup (R5-6), duration unification across all components (R5-6), any JS change, any claims/copy.

## 4. Decisions

- **D1.** Field breathe targets `.hero-ambience` only. Rationale: spec §6 says "the dot backdrop"; the hero field is the signature; section bands sit behind dense text (work cards, testimonials, now) where shimmer adds noise and invites AA scrutiny. Breathe range 1 ↔ 0.85 keeps composite alpha at-or-below the verified values (contrast script worst case = full band), so on-glass AA can only improve. This resolves **OQ-R5-3** (field density: keep size, field felt via glow — shimmer without changing dots).
- **D2.** Hover catch = one-pass diagonal shine sweep on `.work-card::after` (opacity 0→1 + `translateX(-120% → 120%)`, ~700ms), using `var(--glass-highlight)`. Transform/opacity only — never `backdrop-filter` (§6). Testimonial/GitHub cards keep their existing transform-only lift; no sweep on them (content-dense, spec §7).
- **D3.** Glass settle-in replaces the hero plate's `animate-fade-up` with a shorter, softer `glass-settle` (8px vs 20px rise). Children keep their `animate-fade-up` stagger. This is the "glass panels vary the translate direction slightly" clause of §6 Reveals.
- **D4.** Focus echo via `border-color` transition on `:focus-within` for glass surfaces — a tinted glass edge, complementary to (not replacing) the global `:focus-visible` outline. Non-motion; reduced-motion irrelevant.

## 5. Done-when evidence (spec §9 R5-4)

1. Build clean (`npm run build`, 6 pages, 0 warnings).
2. `npm run check:contrast` **19/19** PASS + `npm run check:glass-contrast` **24/24** PASS (no token changes; breathe only dims → safe).
3. Lighthouse **100/100/100/100** mobile + desktop on preview; **TBT 0** (motion budget holds).
4. Axe **0** violations (dark + light) — focus echo is additive styling only.
5. **Reduced-motion screenshot diff (static):** with `prefers-reduced-motion: reduce` emulated, two screenshots taken ~1s apart are identical (no shimmer/sweep/settle); `field-breathe`/`glass-settle` rules absent from applied CSS (computed-style audit); `.work-card::after` not present in reduced-motion.
6. Motion budget audit: at any viewport, ≤ 3 simultaneous micro-animations; **0 blurred layers animating** (new animations animate opacity/transform on non-backdrop-filter layers only).
7. Horizontal overflow: none at 320–1440 (unchanged; all new rules are opacity/transform/absolute within `overflow: hidden` containers).
8. No-JS: unchanged (all new motion is CSS-only enhancement; reveal stays JS-gated progressive enhancement).
9. No claims changed; no new deps; no deploy.

## 6. Files

| File | Change |
|---|---|
| `src/styles/global.css` | Add `@keyframes glass-settle` + `.glass-settle`; `@keyframes field-breathe` + `.field-breathe`; `.glass-panel:focus-within`/`.glass-card:focus-within` border echo; `.reveal` transition → `var(--duration-slow)` — all inside `@media (prefers-reduced-motion: no-preference)` except focus echo (non-motion) |
| `src/pages/index.astro` | Hero plate class: `animate-fade-up` → `glass-settle`; `.hero-ambience` gains `field-breathe` |
| `src/components/WorkCard.astro` | `.work-card::after` shine sweep (scoped, gated `no-preference`), `pointer-events: none`, respects `overflow: hidden` |

## 7. Risks

1. **Shine sweep clipping/overlay** — `::after` absolute inside `.work-card` (already `overflow: hidden`); `pointer-events: none`; z-index under body content; verified at 320/390 widths.
2. **Settle-in CLS** — entrance uses opacity+transform only (`animation-fill-mode: both`), no layout shift; `glass-settle` gated `no-preference`.
3. **Reduced-motion regression** — every new rule gated inside `no-preference` block; verified by computed-style audit + screenshot diff (static).
4. **Contrast drift** — breathe only dims the field (≤ full band); on-glass worst case is the already-verified full-alpha state.

## 8. Gate

End of phase → record (`docs/decision-log.md` DL-059, `docs/project-status.md`, spec changelog + OQ-R5-3 status, evidence doc `19-r5-4-motion-microinteractions-evidence.md`) → **stop for R5-4 owner approval** before R5-5 (case-study + inner pages).
