# Decision Log

- **Purpose:** Append-only record of project decisions. New entries are appended; existing entries are never silently rewritten (a status may be updated with a dated note).
- **Authority:** Entries record owner-approved decisions; each states rationale and approval status.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../AGENTS.md) · [project-status.md](./project-status.md)

## DL-001 — Run the project as three gated Phase-0 sub-phases before any implementation

- **Date:** 2026-08-05
- **Decision:** The portfolio rebuild proceeds through three approval-gated sub-phases — 0A (Source Intake & Foundation), 0B (Evidence & Portfolio Research), 0C (Strategy, Design Direction, Roadmap) — before any implementation phase. Each sub-phase starts only with the owner's explicit approval.
- **Rationale:** Guarantees an evidence-first process: sources are verified before they are read, findings are verified before they are interpreted, and strategy is settled before any code is written. Makes the project provider-independent — any AI agent, regardless of tool or provider, can pick it up correctly from the repo's canonical documents alone. Prevents premature design/positioning conclusions and irreversible actions.
- **Approval status:** Approved (owner directive, 2026-08-05)

## DL-002 — Featured-project selection criteria and shortlist proposal

- **Date:** 2026-08-05
- **Decision:** Adopt five equally weighted criteria (relevance to validated direction, technical depth, ownership clarity, documentation/demo quality, recency) and propose exactly 3 featured projects — code-review-agent, perplexity, lingo-agent — plus 2 secondary — Better DEV (better-dev-ui + better-dev-api), looplens. All other repositories stay off the homepage for the named reasons in `docs/research/github-project-triage.md`.
- **Rationale:** Keeps project selection evidence-driven and reproducible; prevents stale bootcamp clones and teammate-hosted repos from dominating a portfolio targeting AI product engineering and developer tools.
- **Approval status:** Criteria approved (owner-approved 0B plan, 2026-08-05); the shortlist itself is proposed — owner confirmation requested.

## DL-003 — Conflicts resolved by source hierarchy; all others recorded

- **Date:** 2026-08-05
- **Decision:** Where sources conflict, apply AGENTS.md §2 — verified resume/approved evidence outranks GitHub profile text, which outranks existing portfolio copy. Applied to C-02 (ML-research aspiration excluded), C-05 (bootcamp-clone featuring superseded), C-10 (approved "2+ years" wording kept). All 13 conflicts recorded in the evidence ledger; none silently resolved.
- **Rationale:** Definition of done for 0B — every conflict between sources is recorded, not silently resolved.
- **Approval status:** Applied per contract (AGENTS.md); owner review welcome.

## DL-004 — Draft claim-safe positioning statement proposed

- **Date:** 2026-08-05
- **Decision:** Propose the draft statement recorded in `docs/research/evidence-ledger.md` §3 ("Frontend-focused Full Stack Engineer with 2+ years building customer-facing SaaS products in startup teams…"). Every clause maps to ledger claims CL-01…CL-18.
- **Rationale:** 0B definition of done — the positioning statement must be evidence-checked, not assumed.
- **Approval status:** Proposed — pending owner approval.