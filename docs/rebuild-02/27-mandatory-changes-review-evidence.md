# Mandatory-Changes Review — Evidence (2026-08-18)

- **Purpose:** Evidence record for the review of owner branch `mandatory-changes` (`4611d8d`) and the follow-up fixes T1–T7 (DL-074).
- **Authority:** Created during DL-074 work; decisions in [decision-log.md](../decision-log.md); pending item in [open-questions.md](../open-questions.md) (OQ-14).
- **Last updated:** 2026-08-18

## 1. Review scope

Structural, stylistic, consistency, and UX review of `mandatory-changes` (diff `develop..mandatory-changes`): About section, 6-item nav, Better DEV as 4th featured card + case-study page, resume PDF links.

## 2. Findings → fixes (T-map)

| # | Finding | Fix (T) | File(s) |
|---|---|---|---|
| 1 | Nav order (Home · About · Skills · Projects · Contact · Resume) contradicted page order (Work before Skills) → non-monotonic scrolling | T1 — sections reordered to About → Skills → Work → Experience → Testimonials → Now → Contact | `src/pages/index.astro` |
| 2 | Reorder would put the band fade-in ramp mid-page (About|Skills hard canvas→band seam; band→canvas→band sandwich inside Work) | T2 — duty-swap: `.skills-bg` = ramp, `.work-bg` = flat band | `src/sections/Skills.astro`, `src/sections/Work.astro` |
| 3 | 4 featured cards in auto-fill grid → 3+1 orphan row at desktop (4 tracks need ~1420px; container ~1104px) | T3 — `@media (min-width:1024px) { .work-grid { grid-template-columns: repeat(2,1fr) } }` | `src/sections/Work.astro` |
| 4 | Better DEV is the only featured card without a cover | T4 — deferred to owner (OQ-14) | — |
| 5 | Three resume-link semantics (nav: new tab + JS download shim; hero: new tab; About: `/resume/` hub interstitial) + open-tab-AND-download double artifact | T5 — one semantics per intent: nav/About/footer = native `download`; hero = view in new tab; footer Resume entry keeps `/resume/` hub reachable; JS shim deleted | `Header.astro`, `About.astro`, `Footer.astro`, `resume.astro`, `paths.ts` |

## 3. Verification (T6)

| Gate | Result |
|---|---|
| `npm run build` | **7 pages clean** — incl. new `/work/better-dev/` route |
| `npm run check:contrast` | **19/19 PASS** |
| `npm run check:glass-contrast` | **30/30 PASS** |
| Built HTML section order | `about, skills, work, experience, testimonials, now, contact` — monotonic ✓ |
| Nav links | `download` + `aria-label="Resume (PDF, downloads)"` on desktop + drawer; zero `data-resume-download` in output ✓ |
| Built CSS | `.work-bg` flat band + `.skills-bg` ramp present; `@media (width>=1024px){.work-grid{grid-template-columns:repeat(2,1fr)}}` present ✓ |
| Footer | Resume entry renders (4 "Resume</a>" occurrences: nav ×2, About, footer) ✓ |
| Internal-link sweep (`dist/`) | **0 broken** (custom walker: every root-relative href resolves) |
| Sitemap | 7 URLs incl. `/work/better-dev/` |
| `astro preview` smoke | `/`, `/resume/`, all 4 `/work/*` → 200; `/nope` → 404; PDF → 200 (6,984 B) |
| External link | `betterdev.in` → 307 → `https://www.betterdev.in/` → 200 |

**Owner gates pending (external tooling):** Lighthouse (mobile+desktop × light/dark), axe, overflow sweep 320–1440px (watch 641–768px six-item nav), visual captures of the reordered band + 2×2 grid in both themes.

## 4. Known deltas

- "Projects" nav label vs "Selected work" section heading — accepted (breadcrumb `← Work` and `#work` deep links preserved).
- Home nav item duplicates the logo-Home — accepted (mandated order).
- `order <= 4` featured filter — accepted at current scale (4 entries).

## 5. Follow-up fixes (2026-08-18, DL-075)

Owner-directed after reviewing T1–T5; no commit/push (explicit instruction). Copy verbatim; layout only.

| # | Ask | Fix | Verified in build |
|---|---|---|---|
| F1 | Skills groups as rows (Languages, Frontend, …), items flex-row wrap, rows alternate left/right start; chip styles unchanged | `.tech-grid` → flex column; `.tech-group` → inline label + wrapping chips; `:nth-child(2n) { justify-content: flex-end }` ≥640px (mobile left-aligned); added missing `.delay-600` utility | `tech-grid{flex-direction:column…}` + `tech-group:nth-child(2n){justify-content:flex-end}` in `@media (width>=640px)` present |
| F2 | About section + content didn't look good | Full-width card (Now-family), two-col split ≥900px, lead paragraph (full ink, 1.0625rem), resume link as bordered card footer | `about-columns{grid-template-columns:1fr 1fr}` at `width>=900px`; `about-lead{color:var(--color-ink)…}`; footer `border-top` present; markup in `dist/index.html` |
| F3 | Nav clicks landed showing neighbouring sections' content | `.section-block { min-height: calc(100svh - 65px); flex column; justify-content: center }` + `scroll-padding-top: 65px` (was 1.25rem) — one section per viewport, anchored tops exact under header | Both rules in `Base.*.css`; scope check: 7 home sections only, Contact matrix absolute → unaffected |

Gates re-run after F1–F3: build **7 pages clean**; `check:contrast` **19/19**; `check:glass-contrast` **30/30**. Owner visual gates still pending (captures at 320/768/1024/1440 × both themes).
