# Branching & Deployments

- **Purpose:** The decided branch model and the preview/production deployment mechanisms for Phase 1 — the explicit deliverable audit finding F-04 assigned to Phase 1.0 ("which branch carries Phase 1 work, and what triggers preview vs production deploys").
- **Authority:** Owner-approved 2026-08-05 (decision DL-008); subordinate to `AGENTS.md` and the roadmap's gate rules. GitHub platform facts below were verified 2026-08-05.
- **Last updated:** 2026-08-05
- **Related:** [implementation-roadmap.md](./implementation-roadmap.md) · [architecture-and-quality.md](./architecture-and-quality.md) · [decision-log.md](../decision-log.md)

## Why a separate mechanism was needed (verified platform facts)

- This repository is a **GitHub Pages user site**: exactly one production URL (`https://kashif-rezwi.github.io/`); any Pages deployment of this repo deploys to that URL.
- `actions/deploy-pages`'s `preview: true` input is **alpha and not available to the public** (action.yml, checked 2026-08-05); current GitHub Pages docs offer no public preview-environment feature.
- Gate rule 4 forbids touching the production URL until Phase 1.4 with explicit approval.
- Conclusion: previews must live on a **separate project site** (one Pages site per repo; project sites sit under `kashif-rezwi.github.io/<repo>/`).

## Branch model

| Branch | Role during Phase 1 | Deploys? |
|---|---|---|
| `develop` | Phase 1 integration branch (Astro rebuild + project docs). All Phase 1 commits land here. | Preview only |
| `main` | **Frozen.** Carries the old CRA app until the Phase 1.4 merge. | Never directly |
| `gh-pages` | **Frozen.** Legacy build output currently serving production (Pages source: branch `gh-pages`, `build_type: legacy`). Retained for rollback after launch until the owner confirms. | Production until 1.4 (no further pushes planned) |

- Phase 1 work happens exclusively on `develop` (roadmap gate rule 4; commits ratified in OQ-13).
- The merge `develop → main` happens **only** in Phase 1.4 with explicit owner approval; that merge is the owner-approved removal of the old CRA app from the trunk.

## Preview deployment

- **Repo:** `Kashif-Rezwi/portfolio-preview` (companion, GitHub-only — no new platforms).
- **Trigger:** on demand — `workflow_dispatch` inside the preview repo (owner via the Actions tab, or the agent via `gh workflow run`). No auto-deploys on push; zero secrets needed.
- **Flow:** the preview repo's workflow checks out `Kashif-Rezwi/Kashif-Rezwi.github.io@develop` (public repo — no token required), runs `npm ci` + Astro build with `PREVIEW_BASE=/portfolio-preview` and `PUBLIC_PREVIEW=1`, then deploys the output to its own Pages environment via `actions/upload-pages-artifact` + `actions/deploy-pages`.
- **URL:** `https://kashif-rezwi.github.io/portfolio-preview/` — the `/portfolio-preview` base path is the unavoidable difference from production; internal links are generated base-aware by Astro (`src/lib/paths.ts`).
- **Indexing:** preview builds emit `<meta name="robots" content="noindex">` (`PUBLIC_PREVIEW=1`); the preview repo carries a README marking it as a temporary review surface. Archived after launch.
- **Verified 2026-08-05:** first preview deployed successfully (run 31005904254). One platform quirk found and fixed: enabling Pages via the API created the `github-pages` environment with a **custom deployment-branch policy containing zero branches**, which silently rejected the first deploy (job failed with no logs). Fix: `POST /repos/{owner}/{repo}/environments/github-pages/deployment-branch-policies` with the deploying branch (`master` for the preview repo). **At Phase 1.4, after switching the main repo's Pages source to GitHub Actions, verify the `github-pages` environment permits `main` the same way.**

## Production deployment

- **Phase 1.0–1.3:** production keeps deploying from branch `gh-pages` exactly as today — **except no further pushes are planned to it**; the old site simply stays live. `deploy.yml` exists in-repo but is `workflow_dispatch`-only and inert (the Pages source is not Actions yet).
- **Phase 1.4 (owner-approved, step by step):** (1) merge `develop → main`; (2) switch Pages source from branch to **GitHub Actions** (repo Settings → Pages, owner action); (3) run `deploy.yml` manually (recommended: add an environment protection rule so only `main` can deploy to the `github-pages` environment); (4) live smoke tests per the roadmap; (5) retain `gh-pages` for rollback until the owner confirms.
- **Rollback before 1.4:** nothing can have changed — production never receives Phase 1 deployments.
- **Rollback after 1.4:** redeploy the retained `gh-pages` content (switch Pages source back to branch `gh-pages`), or revert the merge, owner's choice.

## CI in this repository

- `ci.yml` — build check on pushes/PRs touching the site or workflows on `develop` and `main` (catches breakage before preview/production work). CI runs automatically on both branches; no manual trigger needed.
- `deploy.yml` — production build + `upload-pages-artifact` + `deploy-pages`; manual-only (`workflow_dispatch`); runs against the branch selected in the Actions UI (default `main`). Effective only after the 1.4 Pages-source switch.