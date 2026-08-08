# R5-8a — Pre-deploy polish & interaction enhancements: plan

- **Purpose:** Bounded plan (DL-063) for a **pre-R5-8** enhancement cycle on `evolve-design`. Five owner-directed polish/interaction themes landed **before** the R5-8 deploy go/no-go. Captures the owner's brainstorm decisions, per-theme approach, trade-offs, and done-when gates. Implemented **one theme at a time**, each owner-gated.
- **Authority:** Owner directive in conversation (2026-08-08, "great, lets go ahead" after the brainstorm); subordinate to `AGENTS.md` and the R5 spec.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-063) · [project-status.md](../project-status.md) · [11-r5-glassmorphism-design.md](./11-r5-glassmorphism-design.md) · R5 Operating Loop (`docs/engineering/engineering-workflow.md`) · [12-r5-qa-evidence.md](./12-r5-qa-evidence.md)

## 1. Objective

Evolve the live R5 glass release's hero, navbar/branding, testimonials, and ambient lighting into a more premium, cohesive, and interaction-rich experience — **without** regressing the R5 QA bar (build, contrast 19/19 + on-glass 30/30, Lighthouse 100s, axe 0, reduced-motion/transparency, no-JS, overflow, JS budget) and **without** changing any claim/copy. This cycle lives on `evolve-design` and is **not** deployed (R5-8 stays owner-gated).

### T1 — Remove the hero glass card
- **Problem:** one large frosted `GlassPanel` sits over the signature dot matrix, hiding and competing with it — neither stylistic nor aesthetic.
- **Approach (owner-confirmed, option A):** drop the `GlassPanel` wrapper → hero identity becomes a flat content block over the matrix; add a *subtle* text-legibility treatment (soft text-shadow or faint scrim gradient) — **not** a card. Portrait + role badge stay owner-locked.
- **Impacts:** remove `.glass-settle` on the hero (reduced-motion simplifies); update `check-glass-contrast.mjs` (hero-plate pairs change → re-verify AA text-over-matrix).
- **Done-when:** hero has no glass plate; text AA over matrix verified; no overflow; reduced-motion/no-JS intact.

### T2 — Portrait favicon + browser `<title>`
- **Problem:** generic `favicon.ico`; plain `<title>`; no portrait branding in the browser chrome.
- **Approach:** build-time generate a **portrait favicon** (portfolio image incl. its shadow/parallelogram mark) — small PNG + `apple-touch-icon`; refresh `favicon.ico` for legacy. Align `<title>` to a portfolio string and mirror in manifest `short_name`/`name`. Portrait is already public content.
- **Impacts:** one tiny build-time script (like `make-og-card.mjs`); **no runtime dep**; needs the canonical portrait asset located.
- **Done-when:** portrait favicon + apple-touch-icon present; `<title>` + manifest + OG consistent; Lighthouse/axe unchanged.

### T3 — Testimonial premium redesign (text + card audit)
- **Problem:** text and card feel not premium: flat tint+border card (no blur), accent-only `<mark>` highlights with no fill (reads scattered/flat), faint generic serif quote mark, 1rem quote in `--color-ink`.
- **Approach (coherent editorial combo, presentation-only):** larger editorial display-serif quote with refined glyph as a low-opacity background motif; let *key* highlights carry a quiet accent treatment (soft underline or subtle fill) rather than many; hairline top accent + soft inner high-glow + gentle gradient sheen + refined photo ring; authored em-dash attribution. **No wording/claim changes.**
- **Done-when:** premium editorial look; all testimonial text tokens AA (+ band); reduced-motion; claims byte-identical in rendered text.

### T4 — Cursor-driven background lighting (replace static bands)
- **Problem:** static masked `--color-glow` bands behind work/skills/testimonials/now feel flat/bad overall.
- **Approach (owner concept):** remove all static bands + hero-ambience; one fixed radial **spotlight centered at the cursor** painted on the background behind cards (so wherever the pointer is, the main bg lights up; cards get backlit + subtle front-edge glow); plus a **neon-primary cursor glow**. Light is a background property at the cursor position — **not** an emitting cursor element.
- **Implementation:** single fixed overlay `pointer-events:none` behind content, `radial-gradient(circle at var(--mx) var(--my))`; tiny rAF-throttled pointermove updates `--mx/--my`; neon cursor ring/dot. No per-card listeners.
- **Constraints:** no-JS → overlay absent/static (S-7); reduced-motion → freeze at fixed safe position or drop (S-8); touch/no-cursor → static fallback; **AA worst-case glow-under-text** re-verified via on-glass script (extend centre scenario); perf/CLS checked (S-3); JS budget re-measured.
- **Done-when:** static bands removed; cursor-glow + neon cursor working; AA (worst-case), no-JS, reduced-motion, overflow, perf all green.

### T5 — `@chenglou/pretext` (expo-pretext) marquee
- **Problem:** owner wants precise text layout/marquee via the pretext measurement engine as a creative showcase.
- **Finding (VERIFIED):** `@chenglou/pretext` is a **DOM-free text measurement & layout engine** (line-breaking/metrics → canvas/SVG); it does **not** animate — marquee/scroll logic is ours on top.
- **Decision:** use it for **one contained, decoration-only** canvas marquee — a tech/keyword or mono-ledger strip (under hero or as a section divider), `aria-hidden`, `pointer-events:none`, so SEO/sitemap/a11y/S-7 are untouched (real content stays DOM).
- **Constraint override:** item 5 **explicitly overrides S-12** (zero new runtime deps) — the **first runtime JS dependency**, as one contained decoration-only exception. **Owner-approved.**
- **Pilot + fallback:** pilot pretext in the confined strip; measure JS size (S-2 ≤ 35 KB), Lighthouse, a11y, no-JS, reduced-motion. If pretext adds no measurable value over a plain **CSS marquee** (trivial, zero-dep, accessible), use CSS and drop the dep — creative intent retained.
- **What it must NOT do:** render body copy, section titles, or any claim/testable text (stays in HTML).

## 3. Shared done-when (every theme)

- `npm run build` 6 pages clean; `check:contrast` 19/19 + on-glass **30/30** (updated as surfaces change); Lighthouse **100/100/100/100** (mob+desk × light/dark, TBT 0, CLS 0); axe **0** (settled) all routes × themes; overflow **0** (320–1440 × themes); reduced-motion + reduced-transparency fallbacks hold; no-JS content intact; JS budget re-measured; **zero claim changes**; one evidence doc per theme; **stop for owner approval before next theme / R5-8.**

## 4. Out of scope

No claim/copy changes; no deploy (R5-8 stays owner-gated); no new themes; no changes to portrait/parallelogram role-badge (owner-locked); no CI/pipeline changes.

## 5. Risks

| Risk | Mitigation |
|---|---|
| T4 glow under text breaks AA | low accent alpha; extend on-glass centre scenario; re-verify worst-case |
| T4 perf (mousemove) | single overlay + rAF-throttled CSS var updates; no per-card listeners; Lighthouse/CLS check |
| T5 pretext JS size / S-12 | owner-overridden S-12; contained aria-hidden; pilot + CSS fallback; budget check |
| Theme creep into fixes | any defect = stop + separate owner-gated fix, not silent edit |
| Docs-vs-git drift | git-truth note per theme; evidence doc per theme |

## 6. Implementation order

T1 → T2 → T3 → T4 → T5, each: plan → build → prove (evidence doc) → record → **owner gate**. Then R5-8 deploy go/no-go.


