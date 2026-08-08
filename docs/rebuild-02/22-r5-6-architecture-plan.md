# R5-6 — Architecture cleanup plan

- **Purpose:** R5-6 implementation plan per `docs/rebuild-02/11-r5-glassmorphism-design.md` §8/§9 (row R5-6, DL-061). Refactor-only; zero visual change.
- **Authority:** `AGENTS.md` (this repo's operating contract) + owner approval of R5-5 in conversation; R5-6 gate = owner "go" after this phase's evidence.
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-061) · [project-status.md](../project-status.md) · [21-r5-5-inner-pages-evidence.md](./21-r5-5-inner-pages-evidence.md) · spec §8/§9 · evidence doc `22-r5-6-architecture-evidence.md` (post-build)

## 1. Objective

| | |
|---|---|
| **Goal** | Make the glass layer safe to evolve: reusable primitives + partitioned sections + a single token source of truth, with **zero visual change** |
| **Done-when** | `npm run build` passes (6 pages); diff is refactor-only (no visual change, verified by before/after screenshots); `check:contrast` 19/19; `check:glass-contrast` 30/30; Lighthouse 100s; axe 0; no overflow; docs updated; evidence doc written; stop for owner gate |
| **Out of scope** | Any copy/claims, any new visual surface, R5-7 QA matrix, deploy, resume/404 pages, new dependencies, JS islands |

## 2. Scope (spec §8 table + §9 row R5-6)

| # | Change | Where | Notes |
|---|---|---|---|
| 1 | `SectionHeader.astro` (label + title + subtitle) | `src/components/SectionHeader.astro` | kills 5× duplicated `div.section-header.reveal` in `index.astro` |
| 2 | `GlassPanel.astro` pure-presentation wrapper | `src/components/GlassPanel.astro` | one glass recipe; wraps `.glass-*` utility classes; no JS |
| 3 | Partition `index.astro` → `src/sections/*` | `src/sections/Hero.astro`, `Work.astro`, `Skills.astro`, `Experience.astro`, `Testimonials.astro`, `Now.astro`, `Contact.astro` | each carries its own scoped styles; data passed via props |
| 4 | Shared scaffolding → `global.css` | `.section-block`, `.section-alt`, `.band-host`, `.section-band`, `.band-host > .container-site` | used by index sections AND `[slug].astro` (case hero) — currently duplicated in both files' scoped blocks |
| 5 | Delete dead tokens/rules | `global.css` | `--elevation-sm/-md`, `--gradient-accent`, `--gradient-accent-text`, `--color-paper`, `--color-hairline`, `--color-border-focus`, `--color-accent-ink`, `.glow-pulse`, `.delay-600`, `.animate-fade-in` — all verified zero-usage (grep) |
| 6 | Unify duration literals → seeds | all `src/**` | `0.15s → var(--duration-fast)`, `0.25s → var(--duration-base)`, `0.4s → var(--duration-slow)`; others (0.1/0.2/0.3/0.35/0.18/0.5/0.6/8s) stay literal (no matching seed; changing would alter feel = visual change) |
| 7 | Extend `check-contrast.mjs` for glass tokens | `scripts/check-contrast.mjs` | fix drift: stale hexes `#888888`/`#848484`/`#6c6c6c` → live `#8d8d8d`/`#8b8b8b`/`#6a6a6a`; glass tokens already enforced in `check-glass-contrast.mjs` (30 checks) |

## 3. Files

| File | Action |
|---|---|
| `src/components/SectionHeader.astro` | **create** — props `label`, `title`, `subtitle?`; renders the header block; carries `.section-header/.section-title/.section-subtitle` scoped styles |
| `src/components/GlassPanel.astro` | **create** — pure wrapper: renders `<div class="glass-panel ...extra">` (variant via `class` prop merge); slot for children |
| `src/sections/*.astro` | **create** — 7 section components, each with markup + scoped styles moved verbatim from `index.astro` |
| `src/pages/index.astro` | **rewrite** — data flows in frontmatter; body = 7 section components; no `<style>` block left |
| `src/pages/work/[slug].astro` | **edit** — remove duplicated scaffolding (`.band-host`/`.section-band` block) since it moves global |
| `src/styles/global.css` | **edit** — add shared scaffolding in components layer; delete dead tokens/rules; keep everything else byte-identical |
| `scripts/check-contrast.mjs` | **edit** — update 3 stale hex values |
| docs (see §7) | **update** |

## 4. Refactor-only guardrails

- **Class names are stable.** Section split only *relocates* markup+styles between `.astro` files. Astro's scoped-CSS hashes change (`data-astro-cid`), but selectors are class-based and relocate 1:1 with their markup, so computed styles are identical.
- `.glass-*`, `.section-label`, `.container-site`, `.reveal`, `.animate-*`, `.delay-*`, `.btn*`, `.link-accent`, `.gradient-text`, `.tech-tag` stay global utilities — unchanged.
- `check-glass-contrast.mjs` THEMES already carry the R5-5 raised hexes (`#8d8d8d/#8b8b8b/#6a6a6a` — verified lines 21–51); only `check-contrast.mjs` had drift.
- No `@supports`/`prefers-reduced-*` behavior changes; no JS changes; no claim/copy changes.
- Every moved CSS rule is copied **verbatim** (values, comments, order preserved) — the only legit diffs are deletions (dead code) and the 3 duration literal swaps + contrast-script hex fix.

## 5. Implementation order

1. `SectionHeader.astro` + `GlassPanel.astro`
2. `global.css`: add shared scaffolding; delete dead tokens/rules (also remove duplicate scaffolding from `[slug].astro`)
3. Section components (Work, Skills, Experience, Testimonials, Now, Contact, Hero) — move markup + scoped styles; index.astro becomes a thin composition
4. Duration unification + `check-contrast.mjs` drift fix
5. Build + full verification (below)

## 6. Verification (after each risky step and at the end)

- `npm run build` — 6 pages, clean
- `npm run check:contrast` — 19/19
- `node scripts/check-glass-contrast.mjs` — 30/30
- Lighthouse CLI (home, mobile+desktop) — 100/100/100/100, TBT 0
- axe dark+light — 0 violations
- horizontal overflow 320/390/768/1024/1440 — 0
- **Zero-visual-diff:** screenshot compare before (`/tmp/r5-6-baseline/`) vs after: home dark/light desktop + mobile, slug dark desktop — pixel-compare (reported diff ≈ 0 or only antialiasing noise)
- `git diff --stat` sanity: only intended files; no dist committed

## 7. Record + stop

- `docs/decision-log.md` DL-061 (this phase's decision)
- spec changelog line + mark R5-6 ✅
- `docs/project-status.md` → R5-6 complete, R5-7 next (owner gate)
- evidence `docs/rebuild-02/22-r5-6-architecture-evidence.md`
- **Stop for owner approval** (commit + R5-7 gate)

## 8. Risks

| Risk | Mitigation |
|---|---|
| Scoped-style relocation breaks a rule (missed media query, etc.) | Move style blocks in whole chunks; screenshot diff at end; Lighthouse/axe/contrast gates |
| `.section-band` mask differs between index (`50% 48%`) and slug (`50% 45%`) | Global scaffolding uses a token-less base; slug keeps its own `case-hero` scoped override — verified both differ only in mask position, kept per-page |
| Duration swap changes feel | Only literals exactly equal to a seed are swapped; others intentionally left |
| Section components need data | Pass `featured`, `testimonials`, `techStack`, `links`, `portrait` via props from `index.astro` frontmatter (single data source) |
