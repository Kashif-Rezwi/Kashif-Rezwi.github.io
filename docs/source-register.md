# Source Register

- **Purpose:** The single canonical inventory of every source for the portfolio rebuild, with verified accessibility, privacy classification, and verification dates. Deep reading of content is deferred to Phase 0B.
- **Authority:** Populated from actual access attempts during Phase 0A (2026-08-05). Statuses reflect what was verified, never what is assumed.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../AGENTS.md) · [project-status.md](./project-status.md) · [open-questions.md](./open-questions.md)

## Register

| ID | Source | URL or local path | Access | Public-safe? | Last verified | Status |
|---|---|---|---|---|---|---|
| SRC-01 | Current live portfolio | https://kashif-rezwi.github.io/ | Public | Yes | 2026-08-05 | Available |
| SRC-02 | Current portfolio codebase | https://github.com/Kashif-Rezwi/Kashif-Rezwi.github.io · local checkout: this repo root, branch `develop` | Public + Local | Review | 2026-08-05 | Available |
| SRC-03 | GitHub profile | https://github.com/Kashif-Rezwi | Public | Yes | 2026-08-05 | Available |
| SRC-04 | LinkedIn profile | https://www.linkedin.com/in/kashif-rezwi/ | Public | Review | 2026-08-05 (fetch blocked) | Access denied |
| SRC-04b | Job-search source-tracking data — *registered in 0A as "LinkedIn local substitute"; corrected 2026-08-05 per OQ-11: this file is application-source tracking, not LinkedIn content* | temp/career-ops-workspace/data/sources.csv | Local | No | 2026-08-05 | Available |
| SRC-05 | Current resume(s) | temp/career-ops-workspace/resumes/ | Local | No | 2026-08-05 | Available |
| SRC-06 | Core professional profile notes | temp/ExportBlock-b09de94d-5604-4a51-96e6-58447c858e4d-Part-1/ | Local | No | 2026-08-05 | Available |
| SRC-07 | Career positioning notes | temp/career-ops-workspace/profile/career-positioning.md | Local | No | 2026-08-05 | Available |
| SRC-08 | Proof points / achievements | temp/career-ops-workspace/profile/proof-points.md | Local | No | 2026-08-05 | Available |
| SRC-09 | Project-specific evidence/docs (all repositories) | https://github.com/Kashif-Rezwi?tab=repositories | Public | Review | 2026-08-05 | Available |
| SRC-10 | Experience/employment evidence | temp/career-ops-workspace/profile/experience-evidence.md | Local | No | 2026-08-05 | Available |
| SRC-11 | dev.to profile — *added: referenced in SRC-02 code and commit history* | https://dev.to/kashifrezwi | Public | Yes | 2026-08-05 | Available |
| SRC-12 | X profile — *added: linked from SRC-03* | https://x.com/KashifRezwi | Public | Review | 2026-08-05 (fetch returned empty shell) | Requires confirmation |
| SRC-13 | Remaining private profile docs in career-ops-workspace — *added: directory inventory* | temp/career-ops-workspace/profile/: career-journey.md, skills-inventory.md, interview-stories.md, projects.md, compensation-history.md, salary-location-preferences.md · plus temp/career-ops-workspace/PROFILE.md | Local | No | 2026-08-05 | Available |
| SRC-14 | Loose journey note — *added: temp inventory* | temp/My Journey 29514423768080598af2c688ba00748a.md | Local | No | 2026-08-05 | Available |

## Verification notes

- **SRC-01:** Live and serving, but it is a client-rendered React app — an automated fetch returns only the app shell. The actual current copy is accessible through SRC-02 (codebase).
- **SRC-02:** Public repo fetched; local checkout inspected on branch `develop` (clean, up to date with origin). Note: a copy of the resume PDF is tracked in this public repo — see privacy flags below and OQ-05.
- **SRC-03:** Profile exists; has a profile README and 55 public repositories.
- **SRC-04:** LinkedIn returns HTTP 999 (authwall) to automated access. Logging in is forbidden by project rules, so LinkedIn content remains unverified in 0A. See OQ-01.
- **SRC-05:** Directory exists and contains masters/, tailored/, legacy/, source/, manifest.json, GENERATION.md, STYLE.md, README.md.
- **SRC-06:** Directory exists (owner-only permissions) containing a "My Professional Journey" markdown file and a same-named subfolder.
- **SRC-09:** Repositories tab loads; public repo list visible.
- **SRC-12:** Fetch returns an empty JS shell; content unverifiable without login. See OQ-02.
- **Duplicate copies observed (informational):** `/Users/kashifrezwi/Developer/career-ops-workspace` and `/Users/kashifrezwi/Downloads/ExportBlock-…` also exist outside this workspace. This register tracks the workspace-relative copies under `temp/`.
- **Workspace git remote (informational):** `temp/career-ops-workspace` has its own git remote (`github.com/Kashif-Rezwi/career-ops-workspace`) that returns 404 to anonymous access (not publicly visible). See OQ-04.

## Privacy flags

- `src/Components/Home/resume/Kashif-Rezwi-Resume.pdf` is **tracked in this public repository** and served by the live site. Appears intentional (the site offers the resume), but requires owner confirmation — see OQ-05.
- All rows marked `No` under Public-safe must never be committed to this repo; they are readable only from the local, gitignored `temp/` workspace.