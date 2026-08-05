# R4 — Portfolio Improvement Plan

- **Purpose:** Capture the five owner-requested improvements to the live portfolio (served from `v2-improvement`/`gh-pages`) as a clear, evidence-mapped plan. This document is the brainstorming + planning artifact; it authorizes no code, branch merge, or deploy by itself.
- **Authority:** Owner directives in conversation (2026-08-06), constrained by `AGENTS.md` (claim safety §3, source hierarchy §2, loop model §7). The `temp/career-ops-workspace` resumes/profile evidence is treated as input evidence per DL-007, not as a live override.
- **Last updated:** 2026-08-06
- **Related:** [project-status.md](../project-status.md) · [decision-log.md](../decision-log.md) · [02-improvement-implementation-plan.md](./02-improvement-implementation-plan.md) · [skills evidence](./07-r3-d-skills-evidence.md) · [career-ops skills-inventory](../temp/career-ops-workspace/profile/skills-inventory.md)

## 1. Outcome

Apply a focused round (R4) of polish to the currently-live portfolio:

1. **Hero identity** — single-line name with a consistent professional role line directly beneath it.
2. **Dot-matrix animation** — extend the pointer-reactive hero matrix so it reads as a deliberate visual signature across the portfolio, and enlarge the dots (currently barely visible).
3. **Tech-stack accuracy** — cross-check the published tech stack against the verified evidence and online profiles, then update claims and grouping so nothing overstates depth.
4. **Experience detail** — deepen the Experience section bullets using the master resumes and the private evidence workspace, while preserving claim safety.
5. **Navbar behavior** — keep the navbar pinned at the top while scrolling and give it a bottom fade so content never looks "cut" or flat beneath it.

Scope rule: this round is **content + interaction + styling polish only** — no architecture change, no new routes, no public claim invented.

### Product job

A hiring manager should, in the first screen, see a consistent professional identity (name + role) and a portfolio that feels alive but calm. Below, the tech-stack and experience sections should be **more truthful and richer** than they currently are — adding depth without overstating.

## 2. Non-negotiable constraints

- **VERIFIED:** Every published claim stays mapped to an authoritative source (evidence, resumes, profiles) or owner confirmation. No invented metrics, scale, outcomes, or seniority (AGENTS.md §3).
- **VERIFIED:** Role wording must be **consistent** across the hero, page `<title>`/meta description, `PROFILE.md`, GitHub profile, and master resumes. A single canonical role string, chosen once, applied everywhere the public can see.
- **VERIFIED:** Tech-stack additions must be labeled by evidence tier (strong / working / learning) — the current "AI & Tools" group risks implying depth not backed by a source. No unverified tool is added.
- **VERIFIED:** Experience additions must use verified/collaborative wording from the master resume + experience evidence. No "core team" / "built from scratch" / measured-outcome claims unless the source supports them.
- **VERIFIED:** Dot-matrix must not break performance (Lighthouse targets from Phase 1.3/QA), must honor `prefers-reduced-motion`, and must keep the no-JS/canvas fallback working.
- **VERIFIED:** Navbar change is CSS-only and must keep mobile menu behavior + `inert` drawer intact.
- **VERIFIED:** No production deploy or branch merge without a separate owner go (AGENTS.md §7).

## 3. Improvement 1 — Hero identity (name + role)

### Current state

- Name is forced onto two lines: `Kashif<br />Rezwi` (`index.astro:77`). On wide layouts this looks like a deliberate split; owner finds it "odd."
- Below the name sits a gradient line ("Building toward AI product engineering and developer tools") that is a *direction*, not a role title — there is no explicit professional role line in the hero at all.
- Across profiles the owner is known by slightly different titles; this plan resolves them to one consistent public string (§3.3).

### 3.2 Proposed change (Improvement 1 of 5)

Collapse the name to a single line, then add a verified professional role line directly beneath it.

### 3.3 Role string — evidence & recommendation

Cross-checked across the authoritative sources:

| Source | Role wording found |
|---|---|
| `PROFILE.md` (canonical private profile) | "Full Stack Engineer with a strong frontend focus" |
| `target-roles.md` (canonical targeting) | Primary target: "Frontend-focused Full Stack Engineer" (also Product Engineer) |
| GitHub profile (live, public) | Bio: "Full Stack Engineer **(Frontend Focus)** \| React, Next.js, TypeScript, Node.js" |
| Master resume (full-stack) | "Full Stack Developer \| React, Node.js & TypeScript" |
| Master resume (product-engineer, 2026-08) | "Product Engineer \| React, TypeScript & AI Workflows" |
| Current site `title` + meta description | "Frontend-focused Full Stack Engineer" |

**Recommendation:** use **"Frontend-focused Full Stack Engineer"** as the public role line.

- It already appears verbatim in the live `<title>` and meta description (`index.astro:62`, `description` at `:13–14`), in the approved positioning (DL-004) and the primary target-role string — so it is the most consistent single phrase across every public surface.
- It matches GitHub ("Full Stack Developer (Frontend Focus)") and `PROFILE.md` ("Full Stack Engineer with a strong frontend focus") in meaning.
- It is claim-safe: "Full Stack" is supported by the Brand Exponents title + full-stack work; "Frontend-focused" matches PROFILE + evidence (multidoc backend contributions are real but measured as contribution, not ownership). It does not overstate "Product Engineer" or "Software Engineer" (the latter appears nowhere authoritative and adds ambiguity).

Alternatives considered and rejected:
- **Software Engineer** — not used in any authoritative profile or the approved positioning; generic; rejected.
- **Full Stack Developer** — appears on resumes but is slightly junior-titled versus the approved positioning phrase; acceptable as fallback but less consistent with `title`/meta.
- **Product Engineer** — a strong growth-role phrase but targets "AI product engineering direction; using it as the fixed role line would mismatch the current `title` and feels like a leap from approved wording. Keep as secondary/optional, not primary.

Owner decision: **one canonical role string, used consistently** — also applied to the page `<title>` + meta description (they already carry this phrase).

### 3.3 Implementation sketch

- Replace the two-line name with one `<h1>` line, tune `clamp()` so it fits one line across breakpoints (currently `clamp(2.75rem, 7vw, 4.5rem)`).
- Replace/augment the current direction line with the resolved role phrase (e.g. `Frontend-focused Full Stack Engineer` with the gradient treatment); keep the "building toward AI product engineering" as a *bio/direction* line only if it adds signal without duplication — **owner pick: role line, then keep/retain bio** (final layout in §3.4).
- Reuse the same role string in `<title>` and meta (already present) and, optionally, hero subtitle. Update nothing else.

### 3.4 Open choice (owner, quick)

A) Role-only: name → role (cleanest, most "identity first").
B) Name → role → direction tagline ("building toward AI product engineering & developer tools") → bio.

Recommend **B** (keeps the human direction while adding the role), but only if it doesn't crowd the hero; else **A** with the direction folded into the bio.

## 4. Design decision 2 — Dot matrix: enlarge + extend as a signature

### 4.1 Current behavior

- `HeroDotMatrix.astro` draws a canvas grid with spacing `34px` (fallback `27px` under 640px), base dot size ~`1.05px` (emphasized up to `1.7px`), and alpha ~`0.16–0.5` (light theme lower).
- Sizes are deliberately tiny; at these alpha/size the matrix reads as faint texture, not a legible "dot matrix" pattern — owner says it's "barely visible."
- Interaction only exists on the **hero** (`inset: 0` within `.hero-section`); the CSS fallback + canvas are hero-only.

### 4.2 Change

1. **Make dots bigger but calm.** Increase base dot size (proposal: ~1.4–1.6px, emphasized ~2.2–2.4px) and modestly raise minimum alpha so the pattern is clearly legible on both themes, while keeping the "calm field, not confetti" feel. Re-verify contrast/noise in light theme (currently opacity .78 canvas, .18 fallback).
2. **Extend the motif across the portfolio**, not just the hero. Two candidate approaches (owner pick):
   - **(B1) Subtle site-wide fixed grid backdrop** — a near-invisible static dot grid on the body (a CSS `radial-gradient` background layer, respecting reduced-motion and no-JS) so the texture colours every section, with the hero keeping the only *interactive* canvas. Cheapest, most cohesive, no perf hit.
   - **B2) Reuse the interactive canvas on a second section** (e.g. the contact/CTA band) via a prop so the component is generic. More impressive but more animation surface + risk; likely only if B1 feels too flat.
3. Support both themes equivalently (dark: cornflower palette; light: deeper accent set already present) and keep `prefers-reduced-motion` → static fallback; keep `matrix-ready` fallback retirement flow.

### 4.3 Constraint guard

- Dots remain `aria-hidden` and `pointer-events: none` (layout and a11y untouched).
- No pixel-count FPS → keep rAF budget today; if reusing canvas on 2+ sections, ensure cleanly-scoped resize/visibility observers and cancel on scroll-to-section (reuse existing `IntersectionObserver` settle logic).
- Performance: Lighthouse target unchanged (≥95 all categories; the hero already scores 100).

## 5. Design decision 3 — Tech-stack accuracy (cross-check + update)

### 5.1 Current published stack + why several items are OR are over/under-stated

Current `index.astro` groups (`:37–58`):

| Group | Items | Evidence note |
|---|---|---|
| Languages | JavaScript, TypeScript, Python | Python is `working/learning` in skills-inventory — listed as a flat language without depth marker. Verify before leaving strong. |
| Frontend | React, Next.js, Tailwind CSS, Redux, TanStack Query | All strong/working — supported by PROFILE/skills-internal + GitHub. Good. |
| Backend | Node.js, Express, NestJS, WebSockets, REST APIs | Backend-ish, matches resumes; some are `working` — ok if grouped as "Backend." Fine. |
| Databases & Infra | PostgreSQL, MongoDB, Redis, Docker, GitHub Actions | PostgreSQL/DB "working-data;" Redis/Docker/GH-Actions = `working knowledge` in skills-log; framing as flat "Database & Infra" is slightly optimistic vs "working knowledge." |
| AI & Tools | Vercel AI SDK, LangChain, BullMQ, Prisma, pgvector | **Open question:** Vercel AI SDK / LangChain / BullMQ / Prisma / pgvector come from **projects** (code-review-agent, perplexity, lingo-agent). They're not in PROFILE/skills-inventory as a flat claim; `ai-playground` is "learning." No authority (profile/GitHub/skills) lists them as a headline technology. Risk of overstating. |
| (not shown) | — | ClickHouse and RabbitMQ are in skills (working) but **absent** from the site — a gap; MongoDB+PostgreSQL are present, ClickHouse+Redis working. |

### 5.2 Verdict and recommendation

- Split the current groups into the **evidence-tier** labels the rebuild already decided in R3-D ("proficiency tiers were dropped" per status — see §07). The site currently shows **flat groups**, which flattens strong/working/learning and lets "AI & Tools" imply depth the resumes do not claim.
- **Proposed schema (consistent with R3-D intent):**
  - **Core** — JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, TanStack Query (all strong/working, top of stack).
  - **Backend & data** — Node.js, Express, NestJS, PostgreSQL, MongoDB, REST, WebSockets (working backend/data; infra sits here).
  - **Working knowledge** — Redis, Docker, GitHub Actions, ClickHouse, RabbitMQ, Python (working/learning — clearly labeled "working knowledge," never "specialist").
  - **AI / building-with** — Vercel AI SDK, LangChain, Prisma, pgvector, BullMQ (only if we confirm they map to the AI-product direction; otherwise move under a "now building" note or drop. These are project-learnt, not professional headline.—label accordingly).
- Decide, owner: **(a)** keep a single flat "Tech stack" (simplest, current style) but re-order/correct group membership + add missing ClickHouse/RabbitMQ; **(b)** move to the evidence-tier grouping (Core / Working / AI-building) for stronger claim-safety narrative. Recommend **(b)** given this round's "cross-check and update" ask, but it's a bigger visual change — **owner pick** (implement can be phased: correctness first, regrouping second).

### 5.3 Source-bind each item

Before any item appears, tag it to `skills-inventory` tier + supporting source (PROFILE, evidence, project repo). Any item with no source stays off. Specifically decide: **Vercel AI SDK / LangChain / BullMQ / pgvector / Prisma** are project-derived — confirm whether the owner wants these labelled as "building/toward AI" (they are self-built project tools) vs omitted as official technology. See Open Questions §9.

## 6. Tech-stack implementation step

### 6.1 Constraint

The tech stack is a hardcoded array of group → tags in `index.astro` (`:37–58`). Regrouping/reordering is a content-markup change and needs no new data model, dependency, or schema. No public claim may be added without a supporting source (AGENTS.md §3).

### 6.2 Files touched (mini-plan)

- Update the `techStack` array groups to the resolved schema (e.g. `Core / Backend & data / Working knowledge / AI & tools — building`), with correctness-corrected membership and any missing items (ClickHouse, RabbitMQ) added under the right tier.
- If owner chooses (b), re-style the grid as evidence tiers (group labels + badges) in the section's `<style>` block.
- No new dependencies.

## 7. Design decision 4 — Experience: add verified detail ("few more points")

### 7.1 Current Experience content (`index.astro:232–324`)

- Brand Exponents: 4 grouped bullets — Integrations / CRM / AI-assisted / Platform & reliability.
- Nexus intern: one summary line.
- Education: Masai + Amity.

### 7.2 Candidate additions from the **master resumes** + experience-evidence (all VERIFIED wording)

From master **full-stack** + **product-engineer** + `experience-evidence.md`. The strongest, claim-safe additions:

1. **Template Library — end-to-end shared library** (product-engineer master `:36`): contributed end to end to a shared **Template Library** across frontend, backend, REST integration, builder handoff, and S3-compatible storage. This is a large full-stack feature **absent** from the public experience section; strong add, worded as "contributed end to end."
2. **Drag-and-drop builder** — worked on the drag-and-drop landing-page builder, adding/improving features and refactoring parts of the existing implementation (`experience-evidence.md:88`). Currently implicit in "original Swipe Genie"; make it an explicit builder bullet.
3. **Workflow-builder refactor (integration layer)** — the strongest single story (shared configuration / property-selection / field-mapping / auto-match / label-recovery patterns reused across SendFox, ActiveCampaign, AWeber, Moosend, Salesflare, EngageBay). Already present as "Integrations"; sharpen wording without overclaiming.
4. **Swipe One launch + AppSumo + customer feedback iteration** (`experience-evidence.md:171–176`): supported the first stable release and two AppSumo campaign periods; debugging, hotfixes, deployments, monitoring, and feedback-driven iteration via Discord/Facebook/AppSumo. Granular, currently **absent**; add under "Platform & reliability."
5. **Reusable infinite-pagination system** used across four product surfaces (`experience-evidence.md:77,150`). A specific, shareable systems claim.
6. **AI-assisted workflow intent-mapping** — already partially present (natural-language → valid config). Optionally add "email nodes that draft content from available user-profile context" (`experience-evidence.md:168`).

Recommend adding **1, 4, 5, 2** as the "few more points," and **sharpen 3**; **6** is optional. All re-worded with collaborative framing ("contributed / helped build / collaborated").

### 7.3 Claim guard

- No measured outcomes (60–70% duplicate-code reduction, adoption, user counts, page-generation speed, revenue) — all sit under "Verify before use" flags in the evidence — skip them unless the owner confirms a metric verbatim.
- Preserve collaborative wording: "helped build / contributed / collaborated."
- Never claim sole ownership or "core team / key role" without owner-confirmed evidence.

### 7.4 Open choices (owner)

- Confirm the bullets to add (recommend 1, 4, 5, 2; sharpen 3).
- Keep the current 4-group Brand Exponents layout or expand to a 5th group (e.g. "Platform & delivery").

## 8. Design decision 5 — Navbar pin + bottom fade

### 8.1 Current issue

- `Header.astro` uses `header { position: sticky; top: 0; z-index: 50; ... backdrop-blur }`. `sticky` should pin the header once the page scrolls, but the owner reports the header scrolls away at the top — likely because the header is inside the normal flow before content and `sticky` may be defeated by a scroll container mismatch (to be reproduced/confirmed in QA). Whatever the root cause, the intended behavior — a header that stays at the top during scroll — must be made reliable.
- There is no bottom-edge fade: the header background is `color-mix(in srgb, var(--color-canvas) 85%, transparent)` + blur, so content scrolling beneath abuts a hard line and can feel "cut."

### 8.2 Change

1. Confirm/reproduce the sticky header behavior, then set/patch `position` so the header reliably stays pinned while scrolling; confirm on home + case-study pages (all use `Base` → `Header`).
2. **Add a bottom fade gradient.** Implement via a `.site-header::after` gradient (or a `background: linear-gradient(color-mix(canvas) → transparent)`) so content scrolls gently out of view beneath instead of abutting a hard edge. Keep it muted, theme-safe, and generous so nothing reads flat. Coordinate with any hero-section top fade so the transition is seamless.
3. The fade must never block clicks or the mobile menu.

### 8.3 Constraint

- The change is CSS only (position + fade gradient). The mobile drawer and its `inert` toggle behavior stay untouched.
- Do not regress the backdrop-blur effect the theme currently relies on.

## 9. Open decisions (owner) — record in `docs/open-questions.md`

| # | Question | Options | Recommendation |
|---|---|---|---|
| OQ-R4-1 | Hero layout | A role-only / B role + direction | B (if not crowded) |
| OQ-R4-2 | Tech groups (flat vs tiered) | Flat-corrected / tiered Core+Working+AI | Tiered (b) |
| OQ-R4-3 | AI & Tools items (Vercel AI SDK, LangChain, BullMQ, Prisma, pgvector) — keep vs label vs drop | Keep as headline / label "AI · building" / move to projects note / drop | Label as "AI · building" with a caveat, or drop from headline |
| OQ-R4-4 | Which Experience bullets to add | All / subset | 1, 2, 4, 5 (sharpen 3) |
| OQ-R4-5 | Dot extension mode | B1 static site-wide / B2 interactive repeat | B1 |
| OQ-R4-6 | Header fade intensity | subtle gradient / full fade | subtle |

Each open decision is gated: owner picks → implement.

## 10. Implementation roadmap (bounded, gated)

Per AGENTS.md §7, each step is the smallest useful action, verified, recorded; no deploy without separate go.

| Step | Scope | Expected evidence | Gate |
|---|---|---|---|
| R4-0 | Decide OQ-R4-1..6 | Open questions closed | owner |
| R4-1 | Hero — single-line name + role line | Build passes; role legible at all widths | owner spot-check + LinkedIn cross-check |
| R4-2 | Dot matrix size + extension (B1) | Enlarged dots; site-wide static grid; reduced-motion/no-JS fallback | Lighthouse + axe + visual |
| R4-3 | Tech-stack correctness (+ regroup if tiered) | Updated groups; each item source-tagged | owner |
| R4-4 | Experience additions | Added bullets (claim-safe wording); source map | owner |
| R4-5 | Navbar pinned + bottom fade | Pinned across scroll on all pages; fade confirmed | owner |
| R4-6 | QA + record | Lighthouse, axe, contrast, links, no-JS; evidence in a 10-r4-* doc | owner gate → R4-7 |
| R4-7 | (Deploy) branch promotion | `v2-improvement` → `develop` → `gh-pages` | owner only ("go") |

## 11. Approval

This document is a **plan for owner review** — brainstorming + decision artifacts. No code has been changed. Owner: review `docs/decision-log.md`, open the OQ-R4 items (log in `docs/open-questions.md`), then approve Step gated implementation.

---

- **Status:** DRAFT (plan, no code, no deploy).
- **Owner gate:** required before R4-0 execution.