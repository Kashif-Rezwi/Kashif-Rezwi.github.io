# R5-3 — Card + Surfaces Pass: Implementation Plan

- **Purpose:** The bounded plan for phase R5-3 of the R5 glassmorphism evolution (spec §9 row R5-3). Renders the R5 glass material across the home page's content surfaces — work cards, testimonials, GitHub snapshots, tech chips, more-projects — per the §7 score, plus ambient bands behind the sections so glass reads over a lit field.
- **Authority:** Owner "go" (2026-08-07) to start R5-3; subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).
- **Last updated:** 2026-08-07
- **Related:** [`11-r5-glassmorphism-design.md`](./11-r5-glassmorphism-design.md) §5/§7/§9/§12 · [`15-r5-2-header-hero-glass-evidence.md`](./15-r5-2-header-hero-glass-evidence.md) · [`project-status.md`](../project-status.md) · [`decision-log.md`](../decision-log.md)

---

## 1. Objective

Apply the R5 glass material to the content cards and surfaces on the home page — **WorkCard**, **TestimonialCard**, **GitHub contributions card**, **tech chips**, and the **more-projects strip** — with ambient `--color-glow` bands under the affected sections, without regressing any acceptance criterion (S-1…S-12). This is the phase that makes most of the page "console material" behind the already-glassed hero.

## 2. Git truth (loop step 1)

- Branch: `evolve-design`. HEAD `6a1314d` (badge-fix commit), parent `3ae6740` (R5-2). Working tree **clean**; **origin/evolve-design == local** (pushed, R5-2 gate closed).
- Base for R5-3: `evolve-design` only. No merge/deploy this phase; `gh-pages` = production (R3). `develop` already carries R4 + testimonials (DL-055).

## 3. Scope

**In scope (§7 score table rows + §9 R5-3):**
- **WorkCard** (`src/components/WorkCard.astro`): surface → **glass cards (II)** over an ambient band behind the work grid. Cover image + body on glass; hover = same lift as today (transform-only; edge-light sweep deferred to R5-4 motion).
- **TestimonialCard** (`src/components/TestimonialCard.astro`): → **glass cards (II)** per §7; quotes stay AA-verified over glass (OQ-R5-7 condition: only if AA passes over the live backdrop; else flat).
- **GitHub contributions** (`src/components/GitHubContributions.astro`): card → **glass card (II)**; local SVG stays crisp (proof artifact).
- **Tech chips** (`index.astro` / skills section): chip surface → **glass chips (II)**; chart hover brand-glow made tonal (softer mix) per §7; stays in the tech-section banner.
- **More-projects** (`index.astro`): the row list → same rows on a **glass strip (I)** — subtle border + tint.
- **Ambient bands**: one static masked `--color-glow` band `aria-hidden`/pointer-events:none behind each affected section (work grid, skills, testimonials, now) so glass panels read as looking into the lit field (spec §5.2 `.field-backdrop` behavior). Bands are static (no animation).
- Contrast: verify all new glass pairs (card title/summary/meta, chip text, GitHub meta) in dark **and** light via `check-glass-contrast` (extend).
- Evidence: build, contrast, on-glass, Lighthouse, axe, responsive, reduced-transparency fallback.

**Out of scope (owner-locked / later phases — mandatory):**
- Portrait + ring; role-badge parallelogram + white text; all claims/copy (S-11 — zero copy changes).
- Hero identity plate, navbar, portrait (already glass / owner-locked) — untouched.
- Experience timeline glass rail (score I) → not in §9 R5-3 list; **deferred** to a later R5 pass.
- "Now / AI" rows stay flat (I); only an ambient band is added behind the section.
- Motion/micro-interactions (edge-light sweep, field shimmer, reveal refinement) → **R5-4**.
- Case-study/inner pages (sidebar glass, page-hero band) → **R5-5**.
- Architecture refactor (`SectionHeader`, `GlassPanel` extraction) → R5-6.
- Deploy/promote → owner-gated R5-8.

## 4. Constraints (from spec §5, §12, success criteria §2)

- Glass tokens from `global.css` only — no hard-coded hex in component files.
- Every new text-on-glass pair must pass AA **as rendered over the live backdrop** (S-5/§5.3); if a pair fails, fall back locally to the solid path and record (OQ-R5-7 flush).
- `backdrop-filter` is **never animated** (static per surface); no `will-change: backdrop-filter`; ≤3 blurred *motif* surfaces per viewport (navbar + hero plate + this phase's most prominent card band count as the realized set; cards/chips are the authorized "one-premium card system" per §7).
- No glass-over-glass nesting ("double-glass" anti-pattern): the banner/chip backdrop must not blur a large glass panel.
- `prefers-reduced-transparency` / `@supports` fallback → cards fall back to `--glass-bg-solid` (automatic via the shared `.glass…` rules; verify compiled).
- No new JS, dependencies, fonts, routes, or copy.
- A window is **still a window at ≤3 blurred motifs**; bands and chips are cheap (static radial tint, no blur).

## 5. Decisions (loop steps 4–6; min 2 approaches each)

### D1 — WorkCard surface
| Option | Pros | Cons |
|---|---|---|
| **A1 (chosen): glass-card on the whole card** — `class="work-card glass-card"` (material from utility; `.card` base dropped), hover lift `transform` only | per §7 "glass cards (II)"; one-premium card system; cover image + body ride one glass pane | more surfaces on glass than today (still AA-verified); needs a small scoped hover rule since `.card:hover` bg-change disappears |
| A2: flat card, glass only on a top "ledger header" band | lighter touch | §7 IX explicitly says the card is glass; misses the intent |

**Decision: A1.** WorkCard becomes `.glass-card` (replaces `.card` for it); a scoped `.work-card:hover { transform: translateY(-2px); }` preserves the lift (transform-only, motion-safe). Work grid gets a masked ambient `--color-glow` band behind it.

### D2 — Tech chips glass + tonal hover
| Option | Pros | Cons |
|---|---|---|
| **A (chosen):** chip bg → `var(--glass-bg)` + 1px `--glass-border`; hover brand-tint *compound* over the chip (`color-mix(brand 14%, var(--glass-bg))`) and a tonal soft glow (brand mix alpha reduced to ~20%) | matches "glass chips (II)" + "var as made tonal"; chips inherit the fallback automatically | hover still changes bg (color transition only — safe) |
| B: keep chips solid, only border glass | minimal | misses §7 "II"

**Decision: chips.** Rest = `background: var(--glass-bg)`, `border: 1px solid var(--glass-border)`, same mono/radius; hover = tonal brand tint + `0 4px 14px color-mix(in srgb, var(--brand-on-dark, var(--brand)) 20%, transparent)` + translateY(-2px) (pre-existing; keep).

### D3 — Horizontal how to make the bands
| Option | Pros | Cons |
|---|---|---|
| **A (chosen):** one static `.section-band` layer per affected section — absolute, inset 0, `background: var(--color-glow)`, radial mask to a soft ellipse, `aria-hidden`, `pointer-events:none`, `z-index:0`, content `z-index:1` | reuses the hero recipe (consistency); true field reading; zero JS | must be replicated per section (R5-6 will extract) |
| B: `.field-backdrop` on the section itself (background accent band) | least markup | credits the whole section surface, competing with flat `.section-alt` sections and risking band-on-band |

### D4 — More-projects strip (I)
**Glass strip:** give `.more-projects` a glass panel presentation (`background: var(--glass-bg)` + 1px `--glass-border` + radius) with internal spacing preserved; rows (`ProjectRow`) keep their hairline grammar. Intensity I = subtle. The strip sits on the work section band (no nested glass). Chips inside it (the link-accent) unchanged.

## 6. Done-when (measurable)

1. `npm run build` → 6 pages, 0 warnings.
2. `npm run check:contrast` → **17/17** still PASS (no token regression).
3. **On-glass contrast report extended** → card/skill/GitHub text tokens (title `ink`, summary/meta `ink-muted`/`ink-dim`, chip `ink-muted`, GitHub `ink`/`ink-dim`) vs composited glass-over-canvas AND glass-over (canvas+band tint) — all ≥ 4.5:1 in the dark and light.
4. Lighthouse home (mobile + desktop) all categories ≥ 95 (target the R3 100 baseline); TBT 0; CLS 0.
5. axe (axe-core 4.10.2 via jsdelivr) on `/` dark **and** light → `[]` violations.
6. Responsive: widths 320/390/678/768/1024/1440, **no horizontal overflow** (S-10).
7. Fallback audit: compiled CSS contains `prefers-reduced-transparency` + `@supports` → cards/chips/more-projects resolve to `--glass-bg-solid`.
8. No copy, claim, dependency, or route change (S-11/S-12).
9. Screenshots: work grid + tech + testimonials + GitHub + more-strip in dark and light — evidence doc.

## 7. Files touched

| File | Change |
|---|---|
| `src/components/WorkCard.astro` | `class="work-card card"` → `work-card glass-card`; scoped hover = transform-only lift with reduced-motion guard |
| `src/components/TestimonialCard.astro` | `class` → `glass-card`; photo border/background keep (solid above glass); verify quote tokens pass on glass |
| `src/components/GitHubContributions.astro` | card background/border → glass tokens (keep crisp SVG + legend); `mask` fade for the scroll remains |
| `src/pages/index.astro` | skills `.tech-item` glass chip styles + tonal hover; `.more-projects` glass strip; add `.band` layer (absolute, masked, aria-hidden) behind work / skills / testimonials / now sections; scoped `z-index` wiring (band 0, content 1) |
| `scripts/check-glass-contrast.mjs` | add the new text pairs (card body `ink-muted`, meta `ink-dim`, genre chip `ink-muted`, GitHub `ink`/`ink-dim`) for both themes + a band-tint variant |
| `docs/rebuild-02/17-r5-3-card-surfaces-evidence.md` | phase evidence doc (+assets screenshots) |

Note: project-dominance for scoped `class` duplication of `hero-ambience` gets a shared `.band` pattern (same recipe, `aria-hidden`), so R5-6 can promote it.

## 8. Risks / rollback

- **Text contrast on glass cards in light theme** → the extended `check-glass-contrast` covers it; if any pair fails, those chips/cards fall back to the built-in solid path and the deviation is logged (OQ-R5-7). Screenshots validate the real render.
- **Too many render surfaces** → bands are static radial tints (no blur); the only blurred motif per viewport remains hero/nav. If the card grid blurs too many layers, fall back to glass-on-band without `backdrop-filter` on cards (record in evidence).
- **Behavior change**: `.card:hover` background sweep removed on glass cards — replaced with a pure transform lift + cover zoom (both already used elsewhere), motion-safe.
- Rollback: single working-tree change set on `evolve-design`; revert and re-PROVE in <5 min (no deploy).

## 9. Gate

End of phase → record (`docs/decision-log.md`, `docs/project-status.md`, spec changelog + OQ updates, evidence doc) → **stop for R5-3 owner approval** before R5-4 (motion).