# Open Questions

- **Purpose:** The single log of everything unresolved. Anything not verified or not clear lives here — never a guess.
- **Authority:** Entries are created during verified work; each has an owner and an explicit resolution path.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../AGENTS.md) · [source-register.md](./source-register.md) · [project-status.md](./project-status.md)

| ID | Question | Source / context | Owner | What's needed to resolve | Status |
|---|---|---|---|---|---|
| OQ-01 | How will LinkedIn (SRC-04) evidence be provided? Automated access is authwalled (HTTP 999) and logging in is forbidden by project rules. | SRC-04 (source register) | Kashif (owner) | Provide the LinkedIn content in Phase 0B as paste/export/attachment — or direct that LinkedIn be treated as unverified/low-authority. | Open |
| OQ-02 | Is the X profile (SRC-12) relevant to the portfolio? Fetch returns an empty JS shell; content is unverifiable without login. | SRC-12 (source register) | Kashif (owner) | Confirm relevance; if relevant, provide the content directly. | Open |
| OQ-03 | Governance: confirm the root `AGENTS.md` of this repo is the sole operating contract for this project, and that `temp/career-ops-workspace/AGENTS.md` governs only that separate private workspace (treated here as evidence, not instructions). | Preflight inspection | Kashif (owner) | Explicit confirmation. | Open |
| OQ-04 | Confirm the git remote of `temp/career-ops-workspace` (`github.com/Kashif-Rezwi/career-ops-workspace` — returns 404 anonymously, i.e. not publicly visible) must stay private and never be pushed publicly; it contains sensitive job-search data (contacts, applications, compensation). | Preflight inspection | Kashif (owner) | Explicit confirmation. | Open |
| OQ-05 | Is it intentional that the resume PDF (`src/Components/Home/resume/Kashif-Rezwi-Resume.pdf`) is tracked in this public repository and served by the live site? Confirm whether that pattern should continue in the rebuilt portfolio. | Preflight inspection | Kashif (owner) | Explicit confirmation. | Open |