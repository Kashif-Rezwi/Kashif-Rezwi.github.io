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