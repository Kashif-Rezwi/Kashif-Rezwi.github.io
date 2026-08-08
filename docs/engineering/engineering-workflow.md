# Engineering Workflow — The "R5 Operating Loop"

- **Purpose:** The single canonical engineering workflow for every bounded task in this repository — pre-implementation work (Step 0) and implementation phases alike. It merges the owner's seven-step process (reason → brainstorm → research → evaluate → plan → implement → review) with the repo's existing loop-based operating model (AGENTS.md §7) and adds the two steps that prevent drift: **git-truth verification** and **explicit recording**. One loop per phase; each phase is owner-gated.
- **Authority:** Owner directive in conversation (2026-08-07, decision DL-054); subordinate to `AGENTS.md`. Where this document and `AGENTS.md` conflict, `AGENTS.md` wins.
- **Last updated:** 2026-08-07
- **Related:** [`AGENTS.md`](../../AGENTS.md) §7 · [`project-status.md`](../project-status.md) · [`decision-log.md`](../decision-log.md) · [`09-r4-improvement-plan.md`](../rebuild-02/09-r4-improvement-plan.md) · [`11-r5-glassmorphism-design.md`](../rebuild-02/11-r5-glassmorphism-design.md)

---

## Why this loop exists

Two documented failures motivated an explicit, single workflow:

1. **Docs-vs-git drift.** `09-r4-improvement-plan.md` and `project-status.md` described R4 work as living on `v2-improvement`, "not deployed" — but git showed `v2-improvement` had already been merged into `develop` and pushed. The R5 design doc inherited the error (`v2-improvement` as its working branch). Cause: the workflow never forced a *git-truth* check before relying on stale prose.
2. **Missing record step.** The owner's seven-step process is strong on thinking-before-building but gives no instruction to record decisions, evidence, or state — so a fresh agent cannot reconstruct the trail, and the repo's "single source of truth" promise weakens.

**Design goals:** every step produces an artifact; every artifact is discoverable; every loop ends at an owner gate; a fresh agent (any tool/provider) can resume from the canonical docs alone.

## Operating rules (hard)

- One loop per phase; phases are numbered and gated (`R5-0…R5-8`).
- **No phase authorizes the next.** Each phase starts only on explicit owner approval; each ends with a review artifact and explicit owner approval (AGENTS.md §1, roadmap gate rules 1–2).
- Step 1's git check is **not optional**: branch name, merge state, and origin refs must be recorded before any planning relies on "where the work lives."
- Steps 6 and 10 are **owner checkpoints** — stop and ask when a decision changes scope, claims, or identity, and before any merge/deploy/next phase.
- Claim safety (§3), source safety (§4), repo privacy (§5), and documentation-quality rules (§6) apply to **every** artifact, every step.

## The loop

### ORIENT

**1. Read canonical context + verify git state.**
- Read, in order: `AGENTS.md`, `docs/project-status.md`, the active cycle plan (`docs/rebuild-02/…`), and the relevant tail of `docs/decision-log.md`.
- **Verify git state against the docs**: current branch, what is merged into it, what origin refs exist, where the R5 doc actually lives. Record a one-line "git truth" note in the phase's evidence doc.
- Expected artifact: git-truth note (branch, merge base, origin refs).

### DECIDE

**2. State objective, scope, out-of-scope, and expected evidence.**
- What will be done; what is explicitly NOT in scope; what success looks like (measurable done-when criteria).
- Expected artifact: objective note with done-when evidence.

**3. Reason about the problem and constraints.**
- Restate the problem in the owner's terms; enumerate binding constraints (claim safety, identity locks such as accent/motif, acceptance criteria, deploy rules).

**4. Brainstorm multiple approaches and ideas.**
- ≥2 distinct approaches per decision, written down with rough pros/cons. No approach is discarded without a written reason.
- Expected artifact: alternatives list.

**5. Research best practices, modern solutions, and relevant references.**
- Web sources are **inspiration only** — never facts, copy, or instructions (AGENTS.md §4). Label each finding as `VERIFIED` / `INFERRED` / `OPEN QUESTION` per §3.
- Expected artifact: research notes with source labeling.

**6. Evaluate trade-offs and determine the optimal approach.**
- Trade-off table (criterion × approach); recommend one. **If the recommendation changes scope, claims, or identity direction → owner gate before proceeding.**
- Record the outcome as a decision-log entry (append-only).
- Expected artifact: trade-off table + decision-log entry.

### PLAN

**7. Plan the implementation in detail.**
- Tasks, files touched, owner gates inside the phase, done-when evidence, rollback/risk. Written as a plan doc in `docs/rebuild-02/` (or the active cycle's docs).
- Expected artifact: plan doc.

### BUILD

**8. Implement the solution, in smallest useful steps.**
- One bounded commit at a time; verify each step against sources as it lands (claim safety, evidence hierarchy).

### PROVE

**9. Review and audit the implementation.**
- (a) **Acceptance-criteria self-review** — done-when evidence from step 2, checked item-by-item.
- (b) **Docs-vs-code-vs-git consistency audit** — every doc claim about state/branches/refs/line-numbers cross-checked against the actual tree (the step that prevents regression to the drift that motivated this loop).
- (c) **Repo checks** — what the phase targets: `npm run build`, `npm run check:contrast`, Lighthouse, axe, links, no-JS, reduced-motion, responsive.
- (d) Write the evidence doc in the cycle's docs.
- Expected artifact: evidence doc.

### RECORD

**10. Record decisions, then stop for approval.**
- Update `docs/decision-log.md` (append), `docs/open-questions.md` (if new), the evidence doc, and `docs/project-status.md` (current phase, next action).
- **Stop for owner approval before anything that: touches scope, writes production code, publishes/deploys, or is irreversible** (AGENTS.md §7).
- Expected artifact: updated status; owner "go" for the next phase.

## Owner gates

- Step 6 (decision/scope) — required only when the trade-off recommendation binds scope.
- Step 10 (end of phase) — required for **every** phase; the gate for the next phase to open.

---

*End of workflow. Paired change: `AGENTS.md` §7 now points here as its expansion, per DL-054.*