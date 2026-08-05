# Product & Design Brief

- **Purpose:** The single merged brief — design direction + information architecture + content plan — for the rebuilt portfolio, ready for owner approval. Phase 1 builds exactly this; deviations require owner approval.
- **Authority:** Synthesized in Phase 0C (2026-08-05) strictly from Phase 0B research: `current-portfolio-audit.md` (preserve/evolve/remove), `github-project-triage.md`, `featured-project-research.md`, `evidence-ledger.md`. This brief **evolves the current identity; it does not replace it**. Reference portfolios are inspiration only — never factual or copy authority.
- **Last updated:** 2026-08-05
- **Related:** [positioning.md](./positioning.md) · [architecture-and-quality.md](../engineering/architecture-and-quality.md) · [implementation-roadmap.md](../engineering/implementation-roadmap.md) · [evidence-ledger.md](../research/evidence-ledger.md)

## Part 1 — Design direction: "Calm Engineering Ledger"

Every choice below traces to a Preserve/Evolve row of the 0B audit. Nothing is invented from scratch.

### Mood & principles

1. **Evidence over decoration** — the portfolio reads like well-kept engineering records: dated facts, named projects, verifiable links.
2. **Calm and legible** — high reading comfort; no hype visuals, no urgency patterns.
3. **Restraint as identity** — one accent color, one motif, micro-motion only.

Audit roots: preserved restrained light theme, cornflowerblue accent, noise background, restrained hero, card-based projects.

### Color

- **Base:** light paper theme (`#f5f5f5` family) — preserved from the current site (audit: Preserve).
- **Ink:** near-black body text — evolves current `#505050` upward to clear WCAG AA contrast (audit: Evolve).
- **Accent:** cornflowerblue remains the **single accent** — links, focus rings, one highlight per view (audit: Preserve).
- **Never:** gradients, glassmorphism, aurora/iridescent "AI aesthetic". Dark mode: deferred, not v1 (scope discipline).

### Typography

- One sans family with a tight weight range (self-hosted variable font or system stack — decided in Phase 1.0).
- One mono family for labels, dates, metadata — the "ledger" voice.
- Strong heading↔body contrast; body 16–18px; left-aligned — **never justified** (audit: Evolve).
- Real text only; no text inside images.

### Grid & spacing

- Single-column narrative flow; 65–72ch body measure; content max-width ~72rem.
- 8pt spacing scale; generous vertical rhythm between sections.
- **No `100vh`-forced sections** (audit: Evolve) — sections size to content.

### Components

- Cards with hairline borders + subtle shadow — evolves today's shadow-heavy project cards (audit: Preserve anatomy, Evolve styling).
- Per-project tech as small text tags — evolves icon rows; **no logo walls** (spec + audit).
- Semantic lists/tables for experience; real `<nav>` with visible focus states.

### Motion

- Micro-transitions ≤ 200ms on hover/focus affordances only.
- No scroll-jacking, parallax, autoplay, or entrance animations by default.
- Every animation honors `prefers-reduced-motion` (hard acceptance criterion).
- No animation library by default (architecture doc: optional, requires justification).

### Signature motif — exactly one

The **noise-texture paper background**, already shipped (`public/background/background-noise.webp`) and preserved by the audit. Carried over as-is; no second motif is introduced.

### Anti-patterns (explicit, binding)

Skills bars or percentage skills · tech-logo walls · GitHub stats/calendar widgets · decorative timelines · gradient/aurora hero treatments · 3D/WebGL scenes · autoplay video or heavy hero animations · icon-only links without labels · justified body text · duplicated desktop/mobile markup · third-party embeds that can break (stats services).

### Reference portfolios (inspiration only — untrusted content; zero facts or copy taken)

- **brittanychiang.com** — single-page narrative; dated experience list with per-role tags; compact project cards; writing section; archive link. → structural inspiration for the experience list and project cards.
- **paco.me** — extreme restraint; list-shaped projects; short identity statement. → calibration of restraint level.

## Part 2 — Information architecture

### Page hierarchy (one narrative home + depth pages)

| Route | Purpose | Reason to exist |
|---|---|---|
| `/` | Narrative home: hero → selected work → experience → AI journey/now → contact | Single place for the career story; replaces today's duplicated route + anchor model (audit: Evolve IA rows) |
| `/work/code-review-agent` | Featured case study | Triage featured #1 |
| `/work/perplexity` | Featured case study | Triage featured #2 |
| `/work/lingo-agent` | Featured case study | Triage featured #3 |
| `/resume` | Serves the resume PDF | Single source of truth (conflict C-08); nav + hero CTAs point here |
| 404 | Not-found page | Standard hygiene |

**Removed vs. current site:** standalone `/about-me`, `/skills`, `/project`, `/resume`-renders-GitHub-stats mislabel, and the GitHub stats/calendar page (audit: Evolve/Remove rows). Better DEV and LoopLens appear as **compact home cards** linking to repo/demo (secondary tier, per triage) — not full case studies.

### Homepage sections, in order

1. **Header/nav** — Home · Work · Experience · Contact + Resume link. *Reason: persistent orientation; resume CTA always reachable.*
2. **Hero** — name, headline ("Frontend-focused Full Stack Engineer"), short positioning variant, optimized portrait, links: GitHub, dev.to, LinkedIn (canonical `in/kashif-rezwi-149372216` — owner decision 2026-08-05; manual click-through in 1.3 QA), email. *Reason: positioning in the first viewport (CL-01/02/18).*
3. **Selected work** — three featured case-study cards (name, one-line problem, 2–3 tech tags, links: case study · repo · demo), then a compact row: Better DEV, LoopLens (hackathon label), learning-in-public repos (ai-playground, language-playground), and a "full archive on GitHub" link. *Reason: strongest evidence for the validated direction (triage); bootcamp clones and teammate-hosted repos explicitly excluded (C-05/C-06/C-07).*
4. **Experience** — Brand Exponents Creatives (Oct 2023 – Aug 2025) with 3–4 claim-safe bullets (CL-03…CL-11, collaborative wording); Nexus Software Solutions internship (Jun–Aug 2023, CL-12); education line (Masai School bootcamp 2022; BCA Amity, in progress). Text only — **owner decision OQ-08 (2026-08-05): resume-equivalent text + approved feature names (Swipe Genie, Workflow Builder, Template Library, CRM/campaigns, workflow UX redesign, AI workflow generation); no screenshots**. *Reason: the current site's largest content gap (audit).*
5. **AI journey / now** — 3–4 sentences: building AI products and developer tools; link to the dev.to article; learning-in-public repos. Directional language only (CL-18); no ML-research framing (C-02). *Reason: shows direction without unverifiable claims.*
6. **Contact** — mailto link + GitHub/LinkedIn/dev.to links; **no form in v1** (current form has no submit handler — audit). *Reason: working contact with zero backend/maintenance.*
7. **Footer** — colophon, repository link, last-updated note. *Reason: provenance and trust.*

### Case-study template (one-to-one with featured-project-research.md)

| Section | Content rule |
|---|---|
| Header | Name · role label ("Personal project" / "Hackathon project" — always visible) · period/status · links (repo, demo) |
| Overview | Problem + intended user (2–3 sentences) |
| What I built | Key engineering decisions — from README evidence |
| Challenges | Source-backed challenges only; section omitted rather than invented |
| Outcomes | Verified only: live demo, published article; no user/scale claims |
| Tech | Text tags |

### Short vs. expandable

- **Short on home:** hero statement, experience bullets, AI-journey paragraph, contact.
- **Expandable:** the three featured case studies (dedicated pages). No other subpages in v1.
- **Not on the site:** skills page, GitHub stats, bootcamp projects, application-challenge repo (OQ-09/OQ-10 owner decisions, 2026-08-05).

## Part 3 — Content plan & copy direction

| Section | Copy direction | Ledger mapping |
|---|---|---|
| Hero statement | Short variant of the final positioning; first person; plain; zero metrics | CL-01/02/18 |
| Selected work cards | One line: what it is + for whom; tech tags; never "production-ready/commercial" | CL-13/14/15/16/17 |
| Experience — Brand Exponents | Collaborative verbs ("contributed", "helped build"); qualitative outcomes only | CL-03…CL-11 |
| Experience — Nexus | Internship framing; foundation skills | CL-12 |
| AI journey | Directional verbs ("building toward", "learning in public") | CL-18; SRC-11 |
| Case studies | Template above; safe-claim wording taken from the ledger verbatim | CL-13…CL-17 |

### Owner assets needed (before/during Phase 1)

1. Screenshots for code-review-agent, perplexity, lingo-agent, Better DEV — or approval to reuse repo README assets.
2. LinkedIn URL — resolved (OQ-06, 2026-08-05): canonical = `in/kashif-rezwi-149372216`; manual click-through checkpoint in Phase 1.3 QA.
3. Employer disclosure — resolved (OQ-08, 2026-08-05): resume-equivalent text + approved feature names; **no screenshots**.
4. Portrait: the existing `ME.jpg` (378 KB) is reusable once resized/re-encoded (performance criteria); a fresh photo is optional.
5. Resume PDF decision (OQ-05): brief default — keep a repo-served PDF at `/resume`, remove the Google Drive fork (C-08).