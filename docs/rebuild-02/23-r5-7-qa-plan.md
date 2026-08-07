# R5-7 — Full QA report (glass): plan

- **Purpose:** Bounded plan for phase R5-7 of the R5 glassmorphism evolution (spec §9 row R5-7 + §12 QA policy). Re-runs the **R3-F production-QA matrix with the glass layer live** and records one all-targets evidence report. QA-only: no code changes.
- **Authority:** Owner "go" (2026-08-08, "yes sure" to R5-7); subordinate to the R5 design spec (`11-r5-glassmorphism-design.md`) and the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).
- **Last updated:** 2026-08-08
- **Related:** [decision-log.md](../decision-log.md) (DL-062) · [project-status.md](../project-status.md) · R3-F matrix in `docs/engineering/qa-report.md` §R3-F · [00-full-audit.md](./00-full-audit.md) · evidence `docs/rebuild-02/12-r5-qa-evidence.md` (this phase's deliverable)

## 1. Objective

Prove the completed R5 layer (R5-1…R5-6) as **one release**: every QA target green **with glass enabled**, including the glass-specific scenarios the R3-F matrix predates — back-of-glass legibility, reduced-transparency fallback, reduced-motion, no-JS, and contrast incl. the on-glass cases (19/19 + 30/30).

## 2. Git truth

- Branch `evolve-design`; HEAD `77618fb` (R5-6 + approval docs). Working tree clean. `gh-pages` = production (R3), untouched.
- R5-7 is **QA-only** — no source- or style-file edits. (If QA ever found a real defect requiring a code fix, that fix would be a separate owner-gated change; the expectation here is "all green / confirm", per plan §6.)

## 3. Scope / matrix (from R3-F §F1–F7, extended for glass)

| # | Dimension | Cases | Pass target |
|---|---|---|---|
| M1 | Build | `npm run build` | 6 pages clean |
| M2 | Contrast | check:contrast + check:glass-contrast | **19/19 + 30/30 AA** |
| M3 | Lighthouse | home + 3 case studies + resume + 404; mobile + desktop × light + dark | all categories ≥ 99, TBT 0 ms, CLS 0 |
| M4 | axe | all 6 routes × dark + light, settled render | **0 violations** |
| M5 | Overflow | home + case study; widths 320/390/768/1024/1440 × dark + light | 0 horizontal overflow |
| M6 | Reduced motion | `prefers-reduced-motion: reduce` screenshots vs normal | byte-identical static render (glass/dot matrix static) |
| M7 | Reduced transparency | `prefers-reduced-transparency: reduce` → glass falls back to `--glass-bg-solid`, no blur | CSS audit + screenshot |
| M8 | Back-of-glass | dot-matrix / band behind glass readable through the tint (no content collision) | visual + manual audit |
| M9 | No-JS | `--disable-javascript` dump of home + case page | all content visible; reveal/hero enhancement-only |
| M10 | Links | internal (all routes) + external (repos, demos, dev.to, LinkedIn) | internal 200; external 200 (LinkedIn 999 = expected authwall) |
| M11 | Console | home + all case studies + resume + 404 | 0 errors |
| M12 | Metadata/SEO | titles/descriptions/OG/Twitter/canonical/sitemap/robots/manifest | all present + unique |

**Nothing else in scope:** no claims/copy, no themes, no JS islands, no new deps, no deploy (R5-8), no visual redesign.

## 4. Method notes

- Preview the built `dist/` (local `astro preview`) so QA runs against the exact release artifact. All automation via Chrome headless.
- Theme forcing via the site's existing `?theme=light|dark` hook + `prefers-color-scheme` emulation; motion/transparency via CDP `Emulation.setEmulatedMedia`.
- Contrast scripts are the authoritative S-5 gate; on-glass ratios use the canvas + band + centre scenarios already present.

## 5. Done-when / decision data

All M1–M11 green in `12-r5-qa-evidence.md`; known/benign residuals listed with expectations (LinkedIn authwall OQ-06; OQ-R5-11 pre-settle axe-CLI noise excluded by design — M4 measures the settled render). Rollback recorded: current production tip `6991386` on `gh-pages` + pre-R5 source on `main`/Pages branch (unchanged through R5).

## 6. Implementation order (all QA-only)

1. Build + contrast scripts
2. Lighthouse matrix (subagent, batched)
3. axe + overflow + reduced-motion/transparency + no-JS + console (subagent, batched)
4. Link check (internal via built-sitemap/index; external via curl/HEAD)
5. Evidence report + `qa-report.md` R5 section + record (DL-062 complete, spec R5-7 row, project-status) → **stop for owner gate (R5-8 deploy).**

## 7. Risks

| Risk | Mitigation |
|---|---|
| Long matrix → asset-heavy runtimes | Batched parallel subagents; local static preview (no network) |
| OQ-R5-11 noise (pre-settle axe CLI) | Excluded by method: settle before axe (Lighthouse a11y already 100) |
| `github-contributions.json` fetch drift on build | Revert after build as in R5-6 |
| QA-only scope creep into fixes | Any defect = stop + log + new gated step, not silent edit |