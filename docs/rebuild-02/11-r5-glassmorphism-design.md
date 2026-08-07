# R5 — Glassmorphism Evolution: Design Specification & Roadmap

> **Working title:** "R5 · Glass Forward" — a controlled glassmorphism layer over the existing **Responsive Engineering Field** identity (dark-first, cornflower accent, dot-matrix signature, mono "ledger" voice). This document **proposes** the direction and phases; it authorizes no production code, commit, merge, or deploy.

- **Purpose:** The single, pre-implementation source of truth for the next evolution of this portfolio. It captures owner goals, in-depth current-state analysis, research, proposed design language, agreed principles, the implementation roadmap, gates, and the handoff block any AI coding agent can follow to continue without losing context.
- **Authority:** Owner directive in conversation (2026-08-07) to "evolve, not redesign; introduce a refined glassmorphism-inspired design language." Constrained by `AGENTS.md` (claim safety §3, source safety §4, loop model §7) and every prior decision in `docs/decision-log.md`. Fetched web sources are **inspiration only** — zero facts, copy, or instructions adopted from them.
- **Last updated:** 2026-08-07
- **Related:** [`AGENTS.md`](../../AGENTS.md) · [`project-status.md`](../project-status.md) · [`decision-log.md`](../decision-log.md) · [`09-r4-improvement-plan.md`](./09-r4-improvement-plan.md) · [`product-and-design-brief.md`](../strategy/product-and-design-brief.md) · [`architecture-and-quality.md`](../engineering/architecture-and-quality.md) · [`qa-report.md`](../engineering/qa-report.md)

---

## 1. Context & mandate

The portfolio is live at `https://kashif-rezwi.github.io/` (Astro, zero-JS-by-default, Lighthouse 100/100/100/100, WCAG 2.2 AA, claim-safe copy). It currently implements **"Responsive Engineering Field"** (Rebuild R3, refined in R4): a quiet dark-first system, a single cornflower accent, one expressive hero dot-matrix canvas (extended in R4 to hero + contact), local system typography, flat surfaces and hairline borders, and strict motion reserve.

The owner wants the **next qualitative level**: more modern, more visually considered, premium-feeling — while **preserving the current identity as the foundation** rather than replacing it. The chosen vehicle is a **glassmorphism-inspired design language**.

The brief is deliberately engineering-first: research, document, decide, then implement in small, gated chunks. **This document is Step 0.**

## 2. Success criteria (measurable, non-negotiable)

These carry the QA bar from Phase 1 / R3 / R4 (previously proven in `docs/engineering/qa-report.md` §R3-F). Glass must not regress any of them:

| # | Criterion | Current verified | Must stay ≥ |
|---|---|---|---|
| S-1 | Lighthouse (home + case study, mobile + desktop, both themes) | 100/100/100/100 | ≥ 95 all categories |
| S-2 | Client JS (inline, no bundle) | ~4.2 KB inline | ≤ 35 KB compressed |
| S-3 | Initial HTML size | ~15 KB | ≤ 120 KB |
| S-4 | Axe violations | 0 on all routes/themes | 0 critical/serious |
| S-5 | WCAG 2.2 AA contrast incl. **glass layers** | 16/16 pass | All AA, incl. text on glass |
| S-6 | CLS | 0 | ≤ 0.05 |
| S-7 | No-JS resilience (content visible; hero fallback works) | verified | unchanged |
| S-8 | `prefers-reduced-motion` honored | verified | unchanged |
| S-9 | `prefers-reduced-transparency` / glass fallback | n/a — glass is new | glass degrades to solid surface |
| S-10 | Horizontal overflow | none at 320–1440 | none |
| S-11 | Claim safety | every sentence mapped | **zero claims changed** |
| S-12 | Zero new runtime dependencies | true | stays true |

---

## 3. Current-state deep analysis

### 3.1 Component inventory

| Artifact | File | Role |
|---|---|---|
| Base layout (SEO, OG, pre-paint theme, reveal observer) | `src/layouts/Base.astro` | shell |
| Global tokens + base + components + motion | `src/styles/global.css` (Tailwind v4 theme) | tokens, `.btn`, `.card`, `.tech-tag`, `.section-label`, reveal system |
| Home page (most UI lives here) | `src/pages/index.astro` (≈1,100 lines: markup + one big scoped `<style>`) | hero, work, tech, experience, testimonials, now, contact |
| Header | `src/components/Header.astro` | fixed, frosted-glass navbar; mobile drawer; ThemeControl ×2 |
| Hero dot matrix (canvas + fallback) | `src/components/HeroDotMatrix.astro` | the single signature motif |
| WorkCard / ProjectRow | `src/components/WorkCard.astro`, `ProjectRow.astro` | normalized card grammar |
| GitHub snapshot | `src/components/GitHubContributions.astro` | local SVG calendar |
| TestimonialCard | `src/components/TestimonialCard.astro` | verbatim quotes |
| Icons | `src/components/Icon.astro`, `TechIcon.astro` | local SVG registry |
| Theme | `src/components/ThemeControl.astro` | system/light/dark segmented |
| Case-study template | `src/pages/work/[slug].astro` | 3 featured pages |
| Resume route | `src/pages/resume.astro` | PDF gateway |

### 3.2 Strengths (preserve at all costs)

1. **Performance discipline** — zero-JS default, no third-party fonts, build-time GitHub data, local SVG icons, AVIF covers. Glass can be added **without** adding JS or requests.
2. **One identity, rigorously applied** — the flat system was cleaned in R3 (every "elevation" flagged; removal history in DL-021/DL-023). This is a clean, honest base to add *deliberate, tokenized* depth on top of.
3. **The dot-matrix signature** — the one surviving expressive element (light/dark-aware, static under reduced-motion, no-JS CSS fallback, settles when idle, pauses off-screen). It is exactly the "complex backdrop" glassmorphism needs to look meaningful.
4. **Claim discipline** — no invented metrics; every public sentence is evidence-mapped. The redesign touches **presentation only**; copy stays untouched (S-11).
5. **Accessibility groundwork** — skip link, focus-visible accent rings, `inert` drawer, keyboard nav, contrast-verified palette. Glass must be introduced inside these rails.
6. **Resilience** — reveal is progressive enhancement; no-JS content visible; canvas fallback is pure CSS.

### 3.3 Weaknesses / growth edges ("more modern, premium, wow")

1. **The canvas is quiet to a fault.** The matrix rests at α ≈ 0.16–0.5 with ~1.05 px dots — by the owner's own R4 plan note (§4.1) it "reads as faint texture, not a legible dot-matrix pattern." The signature motif is underpowered; there is room for the dots to breathe.
2. **No depth orchestration.** Pages are a stack of flat, hairline-bordered sections; the only break is `section-alt` (40% surface mix). The centered-column structure reads balanced but **not memorable** past the hero.
3. **The navbar "plays" glass already** (`blur(12px)`, 85% tint) but the rest of the site doesn't — the glass vocabulary exists as an accident, not a system.
4. **Reveal animation is timid.** A single fade-up with small translate; no variation, velocity, or sequencing. Feels "app-like," not expressive.
5. **Light theme is less resolved.** Dark is the "hero mode"; light merely inverts values. Glass on light needs its own recipe.
6. **Typography is plain-by-constraint.** System stacks are a small-ness win but a personality tax; premium in this category is often largely a font choice — a decision to revisit deliberately (see OQ-R5-5 / §13).
7. **Styles are hoarded in `index.astro`.** One big scoped block makes global tuning (spacing, glass) risky; a component-architecture refactor de-risks the design work (§8).

Notes carried from internal history:

- Dot-**enlargement** was **dropped** in R4 (owner). Any "matrix pop" must come from backdrop/layer work, **not** bigger dots. Treat as binding.
- R3 removed shadows/glows; R4 then reintroduced a soft shadow on the role badge and a brand glow on `tech-item:hover` (DL-043; `index.astro:564,778`) — the only two `box-shadow`s on the site. Glass will **re-classify "glow/elevation" into a controlled token scale** so these two orphans become members of a rule, not exceptions.
- "Shadows" vs "glass": the earlier flat rule forbade literal `box-shadow` *elevation*. Glassmorphism achieves depth via **blur + tint + hairline edge**, not drop shadows — this stays in the flat-glass lineage.

### 3.4 Verified consistency defects (recorded now; fixed inside the phases)

| # | Finding | Evidence | Proposed fix |
|---|---|---|---|
| A | Dead tokens: `--color-success`, `--color-warning` defined but never used (status pills removed in R3-C). | `global.css:51-52` | Remove, or reuse deliberately |
| B | Dead animation rules: `.glow-pulse`, `.blink` keyframes, `.animate-fade-in` unused. | `global.css:417-433,444-446` | Remove, or adopt; replace with a glass-affordance animation set |
| C | The only two `box-shadow`s on the site are ad-hoc and color-mixed, not token-driven. | `index.astro:564` (role badge), `:778` (tech hover) | Fold into one `--elevation` / `--glow` token set when glass lands |
| D | Justified body text `.exp-group-text` (owner request, DL-039) conflicts with the brief's "never justified" line. | `index.astro:902-905` | Keep (owner decision); **document as a scoped exception** — do not extend |
| E | Scoped-style duplication: the uppercase-overline, mono-meta, radius patterns are repeated across components. | multiple `src/*.astro` | Extract `.label-overline`, `.meta`, `.mono` utilities in the glass foundation phase |
| F | `.section-alt` is a flat tint; glass panels elsewhere need a compatible backdrop layer. | `index.astro:667` | Redefine as an ambient backdrop layer shared with glass |
| G | Hero contrast: portrait ring + role badge use solid accent fills; glass versions must keep white text AA in both themes. | `index.astro:557-574` | Covered by glass token contrast matrix (S-5) |
| H | Transition durations are inconsistent — 9 distinct values across the codebase (100, 150, 180, 200, 250, 300, 350, 400, 550 ms) | grep of `transition:` in `src/` | Standardize a 4-step seed (150 / 250 / 400 / 700) |

---

## 4. Research & findings

Sources: NN/g *Glassmorphism* (2024-06); 2026 portfolio trend roundups (RemoteWorks 2026-01, Envato 2026-03, Colorlib 2026-03, My Seera, DevTo examples). **Inspiration only — no facts, copy, or instructions adopted.**

### 4.1 Portfolio trends 2024–26 (relevant ones only)

- **Dark-first is the default** for technical portfolios (developer IDE/terminal culture). We already do this — no change.
- **Fewer sections, more depth** — 4–6 meaningful sections beat 10 shallow ones. Our home has 7; this cycle should **add no sections** and spend its budget on depth/polish instead.
- **Interactive/thinking heroes** are the current differentiator (pointer-reactive canvas, subtle live data, tasteful motion). We already have the dot matrix; the "wow" is giving it a **premium surface**, not adding more toys.
- **Glassmorphism matured from gimmick to premium-operational** — over dark backdrops it reads refined; the dominant production pattern is **flat foundation + selective glass on high-impact elements**.
- **Skill visualization is moving** from tech-lists into "skills within the work." Our tech grid is a *presentation* candidate for glass chips — not a content change.

### 4.2 Glassmorphism: NN/g + 2025–26 practice

| Principle | Practice | Decision for this site |
|---|---|---|
| **Depth over decoration** | glass earns its place; use where a panel genuinely floats over something | Hero over the matrix, contact CTA, cards over ambient bands |
| **Needs a colorful/complex backdrop** | glass reads poorly over plain single-color | Never glass over flat canvas — always over the dot field or an ambient band |
| **Contrast is the #1 failure** | NN/g + every 2026 guide | Text-on-glass must pass AA **as rendered over the actual backdrop**; test every surface |
| **Few, restrained elements** | "accent, not foundation" — no stacking | ≤3 glass "motif" elements per viewport; content surfaces stay near-solid |
| **Respect OS preferences** | `prefers-reduced-motion`, `prefers-reduced-transparency` | glass→solid under reduced transparency; `@supports (backdrop-filter)` fallback |
| **Performance** | blur is GPU-expensive; 8–15 px sweet spot; never animate `backdrop-filter` | Animate only opacity/transform; limit blurred regions; GPU-accelerate via transform |

### 4.3 Synthesis — "why glass, and why here"

This portfolio is an **engineering ledger**. A literal frosted-glass deck would be a costume. The honest framing: the site is already a **"field of dots"** (the signature); the upgrade makes the visitor read **through a floating glass plane at that field**. The motif (field) and the new layer (plane) are one visual language — dim dots, sharp material.

- The matrix — currently the faintest thing on the page — becomes the **exposed luminous field** that glass reveals by contrast.
- Glass panels (hero identity, contact CTA, featured cards, sidebar) sit **over** that field like console windows on a live build: **looking into the machine, not at a decoration.**
- Net effect: "a console window into a live build" — premium, modern, and unmistakably engineering.

**Direction (working) name:** **"Glazed Console / Responsive Field."** One field (matrix), one material (glass), one accent (cornflower), one flavor of motion (glass-in/out + field shimmer).

---

## 5. Design language — tokens, additions, non-negotiables

### 5.1 Material: what "glass" means here

| Property | Dark | Light | Why |
|---|---|---|---|
| Fill | `color-mix(canvas 62%, transparent)` + slight accent tint | `color-mix(white 66%, transparent)` + cooler tint | AA-readable floor; field stays visible |
| Backdrop | `backdrop-filter: blur(10px) saturate(1.15)` | `blur(10px) saturate(1.05)` | single tuned value inside the 8–15 px band |
| Edge | `1px` border — `color-mix(white 14%, transparent)` dark / `color-mix(white 55%, transparent)` light + inner top highlight via `linear-gradient` | | the classic "catch light", cheap and premium |
| Radius | `--radius-card` (0.75rem) | same | glass is a surface, not a new shape |
| Drop | **no `box-shadow`** on glass by default; optional soft `--elevation` glow on interactive glass only | — | stays in the flat lineage; blur does the depth |
| Fallback | `@supports not (backdrop-filter)` → near-opaque surface tint | solid surface (today's look) | graceful degradation (S-9) |
| Reduced transparency / motion | glass → solid `--color-surface` tint, zero visual effect | same | OS preference wins |

### 5.2 Token additions (`global.css`)

```
--glass-bg         /* theme-derived tint fill */
--glass-border     /* theme-derived edge line */
--glass-blur       10px
--glass-saturate   1.15 (dark) / 1.05 (light)
--glass-highlight  /* top-edge light catch (linear-gradient) */
--duration-fast    150ms  --duration-base 250ms  --duration-slow 400ms  --duration-xslow 700ms
--elevation-sm/md  /* SOFT gauss on hover only; no default depth */
--color-glow       /* accent mix for panels behind-glass (matrix field) */
```

Add **`.glass` utility** + **`.glass-card` / `.glass-panel`** component classes, and a **`.field-backdrop`** ambient band helper for sections that sit in front of the dot field.

### 5.3 Contrast contract (bound)

- Any text on glass must pass AA **as rendered over the live backdrop** (matrix field + band). Enforce at implementation time: automated `check:contrast` for the new tokens **and** a runtime screenshot check over representative content.
- Glass only where the backdrop is the field band (hero, contact) or where the covered-case table in §7 says it is allowed.

### 5.4 What must NOT change (owner-locked)

- One accent (cornflowerblue), one motif (matrix), the **parallelogram name badge** (DL-043/045), the **portrait accent ring** (DL-047).
- Claim-safe copy everywhere (§3 of AGENTS.md) — presentation only.
- The matrix's contracts: settles when idle, pauses off-screen, static under reduced motion, light/dark opacity variants, no-JS CSS fallback.
- Zero new third-party dependencies, no font loads by default, no new routes or sections.
- Deploy path: working branch → owner "go" → build → promote → `gh-pages`. R5 never auto-deploys.

---

## 6. Interaction & motion plan (all motion-safe, zero new dependencies)

Everything is CSS + the existing inline JS only (no libraries, no islands).

| Motif | What it does | Reduced-motion mode |
|---|---|---|
| Glass settle-in | hero panels fade to crisp at load (CSS easing) | instant |
| Reveals | `.reveal` keeps fade+translate; glass panels vary the translate direction slightly | instant |
| Field breathe | **extremely slow** luminance pulse on the dot backdrop (opacity 0.10↔0.16, ~8 s) — a shimmer, not a blink | static |
| Focus echo | `:focus-visible` accent-tinted ring on glass surfaces | n/a |
| Hover catch | glass cards get a gradient "shine" sweep on hover, using `--glass-highlight` (opacity only) | instant |
| Theme react | matrix/gradients re-tint on theme change (already exists) | unchanged |

Rules: **never animate `backdrop-filter`**; never `will-change` on the blur property; `backdrop-filter` layers are static.

### Motion budget (per viewport)

- 0 blurred layers animating at any time.
- ≤ 3 simultaneous micro-animations per viewport.

---

## 7. Design language per component (the glass "score")

Intensity scale: **I = subtle** (border + tint) · **II = full glass** · **III = glass + glow**

| Component | Current | Proposed | Intensity | Why |
|---|---|---|---|---|
| Header / navbar | frosted (accidental recipe) | token-driven glass (matches §5.1), clean edge line, no shadow ghost | II | already glass; systematize it |
| Hero | flat field + matrix; portrait solid ring | identity plate floats as a **glass panel over the matrix**; name stays; portrait keeps its ring; CTA row on glass | III | the signature "look into the engine" pane — biggest wow |
| Work cards | solid surface cards | **glass cards** over the ambient band; cover screenshot inside; hover = edge-light sweep | II | one-premium card system |
| More-projects rows | hairline rows | same rows on a glass strip | I | keep scanability |
| Tech stack | flat chips on `section-alt` | glass chips (surface stays banner); hover brand-glow made tonal | II | "skills within work" |
| Experience | hairline timeline | content stays **solid**; only the timeline rail + group labels on glass | I | readability > effect |
| Testimonials | flat cards | glass cards (quotes stay AA-verified) | II | social proof framed |
| GitHub calendar | surfaced card | glass card (proof artifact, must stay crisp) | II | "monitored instrument" |
| Now / AI journey | flat rows | keep flat; ambient band behind the section | I | not a moment, not a masquerade |
| Contact | flat + matrix (2nd canvas) | contact CTA panel = glass over that matrix — a bookend to the hero | III | closes the journey on the same field |
| Footer | flat | solid | I | rest stop |
| Case-study pages | flat | page-hero heading on a soft glass band; sidebar cards glass; **body prose stays solid** | II | depth pages don't need to shout |

This score table is the **authoritative mapping**. Implementers apply per-surface intensity and never invent a new one.

---

## 8. Component architecture refactor (de-risks the glass layer)

Glass is applied per-surface; today most styles live inside `index.astro`'s single scoped block. Safe, isolated, staged changes require reusable primitives:

| Change | Outcome |
|---|---|
| Extract tokens + glass utilities into `global.css` (§5.2) | one source of truth; no per-file token drift |
| Partition the sections/part of `index.astro` into `src/sections/*` (each with its own scoped style) | safe isolated edits |
| Create `SectionHeader.astro` with `.section-label` handling | kills header duplication |
| Create `GlassPanel.astro` (a pure-presentation wrapper) | one glass recipe used everywhere |
| Standardize the `--duration-*` seed + transition keys | motion sync |
| Delete dead tokens/rules (defects A/B/E) | smaller regression surface |

Constraint: **no JS islands added** — everything stays server-rendered + existing inline JS/interaction-observer only.

---

## 9. Phased roadmap (each phase is the smallest independently-verifiable unit)

Working branch: **`evolve-design`** (= develop + this spec; R4 work + testimonials are already merged into `develop` — verified 2026-08-07, DL-055). Do **not** branch from `v2-improvement` (stale; fully contained in develop). Phase order and gates are **this proposal**; owner approves each phase start (one step at a time, per the owner's standard).

| Phase | Name | Scope | Done-when evidence | Gate |
|---|---|---|---|---|
| R5-0 | **This document** — research, analysis, plan, principles | Docs only | review of content + rationale + §7 score | Owner: approve/amend |
| R5-1 | **Glass foundation** | Tokens (§5.1/5.2), `.glass`/`.glass-panel`/`.glass-card` utilities, `@supports` fallback, transparency preference, `--duration` + `--elevation` seeds, dead-CSS cleanup (defects A/E) | Utilities run **nowhere yet** → zero visual diff; token contrast report | ✅ **Complete** (DL-056; evidence `13-r5-1-glass-foundation-evidence.md`) |
| R5-2 | **Header + hero** (the signature change) | Navbar token glass; hero identity panel floats over matrix; CTA row into glass; portrait ring untouched | Home renders (dark/light, desktop/mobile) + contrast check on the new glass + Lighthouse/axe on home | ✅ **Complete** (DL-057; evidence `15-r5-2-header-hero-glass-evidence.md`) |
| R5-3 | **Card + surfaces pass** | WorkCard, testimonials, GitHub, tech chips, more-projects — glass per §7 score; ambient bands under sections | All pages × 2 themes; axe; contrast; no overflow | ✅ **Complete** (DL-058; evidence `17-r5-3-card-surfaces-evidence.md`) |
| R5-4 | **Motion & micro-interactions** | Reveal refinement, glass settle-in, field shimmer, focus ring echo; expose `prefers-reduced-motion` **and** `prefers-reduced-transparency` | Reduced-motion screenshot diff (static); TBT still 0 | Owner "go" |
| R5-5 | **Case-study + inner pages** | Sidebar glass, case-cover frame, page-hero glass band, mobile drawer glass | All 3 studies; both themes | Owner "go" |
| R5-6 | **Architecture cleanup** | `SectionHeader`, `GlassPanel`, split style blocks, delete dead code, unify durations, extend `check-contrast` for glass tokens | `npm run build` passes; diff is refactor-only (no visual change) | Owner "go" |
| R5-7 | **Full QA report** | Re-run the R3-F matrix **with** glass: both themes, back-of-glass, reduced motion/transparency, no-JS, Lighthouse, axe, overflow, links, contrast-incl-glass; evidence doc `docs/rebuild-02/12-r5-qa-evidence.md` | All targets green; rollback recorded | Owner "go" → deploy |
| R5-8 | **Deploy** (evolve-design → `develop` → `gh-pages`, or promote to `main` once Pages source = Actions) | Execution only on a separate owner "go" | smoke tests; rollback readiness | Owner explicit |

Each phase is written/committed **only after its gate**; no phase authorizes the next.

---

## 10. Handoff block — what a coding agent must know to continue

**Reading order:**

1. `AGENTS.md` — the operating contract (first).
2. `docs/project-status.md` — where the project actually is.
3. `docs/rebuild-02/11-r5-glassmorphism-design.md` (this) — §5 (material), §7 (score), §9 (phases), plus the current phase.
4. `docs/rebuild-02/09-r4-improvement-plan.md` + `docs/decision-log.md` — prior gates and binding no-go's (dot enlargement dropped; no shadow blowouts; colors already decided).
5. The source files listed in §3.1.

**Hard rules while implementing phases:**

- **Never green-light claim-relevant content.** If it isn't a presentational layer field, don't touch it. When unsure, log an open question.
- **Glass tokens from `global.css` only** — no hard-coded hex in individual files.
- **Every ported surface must pass §5.3 (AA as actually rendered).** A static contrast calculator over a flat swatch is insufficient — the backdrop is live in the matrix.
- **`backdrop-filter` is never animated.** Use transform/opacity only.
- **Reduced motion** = no blur/shimmer/fade-up; **reduced transparency** = glass falls back to solid surface. Both are part of the utility, not bolted on per surface.
- **No new dependencies or JS** — `backdrop-filter` support is a CSS `@supports` guard only.
- **Commit convention:** conventional commits per phase (`feat(glass):`, `refactor(css):`, …), with a one-line rationale. Commit **after each owner gate**, never before.
- **Evidence after visible change:** Lighthouse CLI run + labelled screenshot of the relevant surfaces, appended to the phase evidence doc.
- **Do not touch the CI/deploy pipeline.** Promotion and deploy are owner-gated only (R5-8), invoked separately.

---

## 11. Open questions — owner decisions that gate R5-1+

| # | Question | Options | Recommendation | Status |
|---|---|---|---|---|
| OQ-R5-1 | Glass intensity: full-signature hero (II/III) vs rest subtle (I) | Signature hero / every-surface baked / hybrid | **Hybrid**: hero + contact = II/III; content cards = I/II — per the §7 score | Pending |
| OQ-R5-2 | Light-theme glass recipe | (a) light translucent white + accent edge / (b) near-opaque light surfaces | (a) via tests after R5-2; fall back to (b) if AA fails | Pending |
| OQ-R5-3 | Field density: keep dots "faint" or breathe? | keep as-is / sight increase contrast-and-glow | Keep size; **add exponential glow/backdrop** so the field is felt, dots unchanged | Pending |
| OQ-R5-4 | Badge/tech glow: keep the two `box-shadow`s as an `--elevation` token, or flatten? | keep one / flatten | Keep one soft-hot glow (premium), tokenized | Pending |
| OQ-R5-5 | Fonts: system-only vs self-hosted premium variable (e.g. Geist/Inter) | (a) system-only (b) self-hosted premium | Recommend (a) now, (b) as a **future, separate** phase | Pending |
| OQ-R5-6 | Sections: keep 7 (add depth) vs condense? | keep 7 / merge Now+AI | Keep 7; no new sections in R5 | Pending |
| OQ-R5-7 | Testimonials & GitHub (content-dense) | glass cards vs keep flat? | Glass cards **only if** AA-verified over live backdrop; else flat | Pending |
| OQ-R5-9 | Hero role-badge AA (R4-origin: white on cornflower = 2.97:1, surfaced in R5-2 Lighthouse) | (a) darken badge fill to an AA-passing accent tint / (b) keep R4 values, resolve in the R4 QA gate | (a) darken fill via a dedicated token, keep parallelogram + white text (DL-043/045 locks intact) | ✅ **Resolved** (DL-057 note, 2026-08-07): `--color-accent-badge: #3f63c9` → white 5.47:1; a11y back to 100; entry added to `check:contrast` |
| OQ-R5-8 | Hero ambience beyond the matrix | add ambience / keep matrix-only | Keep matrix-only in R5; add an ambient band behind glass when it exists (§5.2) | Pending |

Each pending answer gates exactly one phase — the plan never deadlocks.

---

## 12. Anti-patterns — explicitly off the table

- Glassmorphism as a whole-page background ("a deck of frost with nothing inside").
- Text on glass over a highly-busy high-contrast field (AA failures).
- More than 3 glass surfaces per viewport.
- Animating `backdrop-filter`, stacking blurred layers, or nested glass ("double-glass" anti-pattern).
- Reintroducing shadow-elevation to "make things pop" — glass's depth substitutes.
- Blur > 25 px or `will-change: backdrop-filter`.
- New JS, new fonts, auto-scroll, infinite loops.
- Touching claims / portrait / parallelogram badge / ring (owner-locked).

---

## 13. Improvements beyond this cycle (future backlog — not part of R5)

- Full typographic identity proposal (Geist/Inter variable, self-hosted) — the highest-leverage "premium" lever.
- Light-theme distinctiveness (a real voice, not inverted dark).
- A field backdrop on **inner** pages (case-study/resume), so glass interior pages don't sit on pure canvas.
- A micro-story hero line ("what's next") as an animated accent.
- Section-level "reading progress" ticks inside the glass navbar — a console-native cue.
- Optional skill-chip bank that feeds future tiered tech grouping (evidence-gated).
- OG/social refresh to reflect the new identity.

---

## 14. Change log

| Date | Change |
|---|---|
| 2026-08-07 | Initial draft (Step 0). Status: DRAFT, pending owner review of §1–§13. |
| 2026-08-07 | Working branch corrected to `evolve-design`; R5-8 deploy path fixed (DL-054/055). R5 part of the new **R5 Operating Loop** (`docs/engineering/engineering-workflow.md`). |
| 2026-08-07 | **R5-1 glass foundation complete** (DL-056): tokens + `.glass`/`.glass-panel`/`.glass-card`/`.field-backdrop` utilities with `@supports` + reduced-transparency fallbacks; `--duration`/`--elevation` seeds; defect A dead tokens removed; defect E text utilities created. Zero visual diff (nothing wired). Evidence: `docs/rebuild-02/13-r5-1-glass-foundation-evidence.md`. Gate open: R5-2. |
| 2026-08-07 | **R5-2 header + hero glass complete** (DL-057): navbar token glass (II) + hero identity plate as one `glass-panel` over the matrix with a static `--color-glow` ambient field (III); portrait ring + parallelogram badge untouched. New `scripts/check-glass-contrast.mjs` (on-glass AA over composited backdrop, dark+light). Evidence: `docs/rebuild-02/15-r5-2-header-hero-glass-evidence.md`. Verified: build 6 pages, contrast 16/16 + on-glass 6/6 AA, Lighthouse perf/bp/seo 100 (mob+desk), axe 0, overflow 0. **Badge-fix follow-up (owner-directed, DL-057 note):** `--color-accent-badge: #3f63c9` resolves OQ-R5-9 (white 5.47:1 both themes); Lighthouse a11y → **100**, `check:contrast` now 17/17. Gate open: R5-3. |

| 2026-08-07 | **R5-3 card + surfaces pass complete** (DL-058): WorkCard + TestimonialCard → `glass-card`; GitHub card → glass; tech chips → glass + tonal brand hover; more-projects → glass strip; masked ambient `--color-glow` bands (`section-band`, aria-hidden) behind work/skills/testimonials/now; new `--color-ink-dim-glass` token (on-band AA). Backdrop-filter intentionally OFF on card surfaces (smooth band → nothing to blur; §12), hero remains the only live blur. Evidence: `docs/rebuild-02/17-r5-3-card-surfaces-evidence.md`. Verified: build 6 pages, `check:contrast` **19/19**, on-glass **24/24** AA, Lighthouse **100/100/100/100** (mob+desk), axe 0 (dark+light), overflow 0 (320–1440), fallback rules compiled. Gate open: R5-4 (motion & micro-interactions). |

---

*End of Step 0. Next: owner reviews (gate) → R5-1 glass foundation.*