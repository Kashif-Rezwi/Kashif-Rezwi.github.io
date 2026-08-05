# Rebuild-02 Improvement Implementation Plan

- **Purpose:** Convert the three-version review into a bounded, approval-gated implementation plan for the preferred `rebuild-02` direction.
- **Authority:** Owner directives in conversation (2026-08-05), constrained by `AGENTS.md`, the evidence ledger, and the comparative review. This plan authorizes no deployment by itself.
- **Last updated:** 2026-08-05 (R3-A authorization and implementation notes)
- **Related:** [01-three-version-comparative-review.md](./01-three-version-comparative-review.md) · [00-full-audit.md](./00-full-audit.md) · [home-copy-claim-map.md](../strategy/home-copy-claim-map.md) · [architecture-and-quality.md](../engineering/architecture-and-quality.md) · [project-status.md](../project-status.md)

## 1. Outcome

Build one polished portfolio from the strongest parts of all three versions:

- `rebuild-02` remains the implementation base;
- evidence-backed professional content remains authoritative;
- the old portfolio contributes scanability and proof concepts, not stale copy or excluded projects;
- the hero’s interactive particle matrix becomes the single memorable visual signature;
- cards, icons, theme behavior, GitHub proof, and hierarchy become systematic;
- accessibility, claim safety, resilience, and performance return to at least the Phase 1 quality floor.

### Product job

Help a hiring manager or engineering lead understand within 30 seconds:

1. who Kashif is professionally;
2. what kind of product engineering he has done;
3. which three projects best demonstrate current direction;
4. what technologies he can use and at what confidence level;
5. where to verify work or start a conversation.

### Design thesis

**“Responsive engineering field.”** The portfolio should feel like a calm technical workspace reacting to attention. The hero matrix is the expressive moment. Everything below it is editorial, image-led, and restrained. Borders, glows, gradients, icons, and animations are tools—not the identity.

## 2. Non-negotiable constraints

- **VERIFIED:** Keep all public claims mapped to authoritative evidence or explicit owner confirmation.
- **VERIFIED:** Preserve personal/hackathon/learning labels and collaborative professional wording.
- **VERIFIED:** Do not restore excluded bootcamp clones or teammate-hosted work.
- **VERIFIED:** Support light and dark themes with equivalent hierarchy and WCAG 2.2 AA contrast.
- **VERIFIED:** Honor `prefers-reduced-motion`; content must remain available with JavaScript disabled or failed.
- **VERIFIED:** Do not copy Google Antigravity source, assets, logo, copy, or exact brand palette. Reproduce only the public interaction principle using original implementation.
- **VERIFIED:** GitHub metrics must be first-party rendered, dated, and obtained from GitHub data; never hard-code screenshot numbers as current.
- **VERIFIED:** No production deployment or branch merge occurs without a separate owner go decision.

## 3. Target information architecture

1. **Header** — identity; Work, Experience, Stack, Contact; theme control; Resume.
2. **Hero** — evidence-backed title, concise direction, portrait, two primary actions, social links, interactive matrix.
3. **Selected work** — three normalized flagship project cards.
4. **Evidence rail** — compact GitHub activity + writing signal; one module, not a dashboard wall.
5. **Technology** — Core / Working / Exploring groupings with text and selective brand marks.
6. **Experience** — editorial timeline/list with less decoration and stronger product/contribution grouping.
7. **Now** — building, writing, learning represented as compact rows or one editorial block, not three emoji cards.
8. **Contact** — one clear invitation and action; social/contact links with coherent icons.
9. **Footer** — availability, source, social links, updated date.
10. **Case studies** — consistent hero/media/overview/decisions/challenges/outcomes/technology/navigation.

## 4. Component and token architecture

### Proposed source shape

```text
src/
├── components/
│   ├── HeroDotMatrix.astro       # implemented prototype; canvas interaction
│   ├── Icon.astro                # local, named SVG icon registry
│   ├── ThemeControl.astro        # system/light/dark selection
│   ├── WorkCard.astro            # one normalized flagship anatomy
│   ├── ProjectRow.astro          # secondary work only
│   ├── GitHubActivity.astro      # first-party data, graceful empty state
│   ├── SkillGroup.astro          # Core / Working / Exploring
│   ├── ExperienceItem.astro
│   ├── Header.astro
│   └── Footer.astro
├── data/
│   ├── skills.ts                 # evidence status + display metadata
│   └── github-activity.json      # generated public snapshot, if adopted
├── scripts/
│   ├── theme.ts
│   └── reveal.ts                 # enhancement-only visibility behavior
└── styles/
    ├── global.css                # tokens/base/shared utilities
    └── motion.css                # optional centralized motion primitives
```

Components should be created only when implementation reaches their phase; this is a target map, not permission to add placeholders.

### Token revisions

| Token family | Required change |
|---|---|
| Surfaces | Canvas + one raised surface + one quiet alternate; remove redundant surface levels |
| Borders | Default border quieter; strong border reserved for focus/selected/interactive state |
| Accent | Cornflower blue remains primary; violet is a rare matrix/project-media secondary, not a universal gradient |
| Radius | Three values only: control, card, pill; stop inventing per-component radii |
| Type | Retain a deliberate sans/mono pairing only after font-delivery decision; reduce mono use to metadata/actions |
| Motion | One entrance curve, one hover duration, one spring-return behavior; no independent decorative effects |
| Icons | 16/20/24 px optical sizes; currentColor; 1.75–2 px stroke; visible text for ambiguous actions |

## 5. Phased delivery plan

Each phase ends with review evidence and an owner-held gate. A later phase does not begin automatically.

### R3-0 — Correctness, claim map, and baseline

**Objective:** Remove content and resilience regressions before further visual work.

**Scope**

- restore or explicitly owner-change “Frontend-focused Full Stack Engineer” across hero, title, metadata, and OG text;
- map every new `rebuild-02` sentence to the existing claim ledger;
- resolve “Open to opportunities,” freelance availability, Kolkata display, and “AI-powered applications” wording;
- change reveal animations to progressive enhancement: content visible by default; JavaScript adds an animation-ready class before hiding eligible elements;
- inventory all current borders, gradients, shadows, pills, emoji, external fonts, and client scripts;
- record measured current asset/JS/Lighthouse baseline.

**Expected evidence**

- updated claim map;
- zero unmapped public sentences;
- page remains fully visible with JavaScript blocked;
- baseline table for home and one case study in both themes.

**Acceptance**

- no public claim drift;
- headings and metadata agree;
- no content depends on IntersectionObserver to exist visually.

**Gate:** owner approves positioning/availability wording and baseline.

**Execution status (2026-08-05):** Complete locally. Approved positioning was restored; unsupported availability/freelance/location wording was removed; reveal behavior is enhancement-only; baseline/claim evidence is in [03-r3-0-correctness-baseline.md](./03-r3-0-correctness-baseline.md). Owner gate approval remains required before R3-A.

### R3-A — Visual-system simplification, icons, and theme control

**Objective:** Make the system more modern by removing noise and creating repeatable rules.

**Scope**

- remove the global body dot grid (hero owns the matrix motif);
- reduce section dividers to transitions that actually need separation;
- define card/row/surface hierarchy and the three-value radius system;
- create a local SVG icon registry for GitHub, LinkedIn, dev.to/article, email, phone, repository, external link, resume, location, sun, moon, and system;
- replace emoji UI icons and clarify repeated action links with icons plus text;
- implement system/light/dark theme control with persisted preference and an inline pre-paint initializer to prevent theme flash;
- choose and document either self-hosted subset fonts or a high-character local stack; remove Google Fonts if self-hosting/local wins.

**Expected evidence**

- visual token table and icon inventory;
- desktop/mobile screenshots in light and dark;
- keyboard and screen-reader labels for theme and icon actions;
- no layout shift or incorrect-theme flash on reload.

**Acceptance**

- one accent hierarchy in both themes;
- no platform emoji used as interface icons;
- icons never carry meaning without accessible text/name;
- theme selection supports system, light, and dark and persists locally.

**Gate:** owner approves the simplified system before all sections are restyled.

**Execution status (2026-08-05):** Complete locally under DL-020; owner gate pending. Owner confirmed that the site may invite freelance-project conversations and display `Kolkata, India`; a generalized availability statement remains omitted. The later R3-D direction is a dated public GitHub contribution view plus project links. R3-A does not implement that proof module or redesign project cards.

### R3-B — Hero signature: interactive dot matrix

**Objective:** Create the requested Antigravity-inspired hero interaction as the portfolio’s one aesthetic risk.

**Prototype status (2026-08-05)**

- **Implemented in the working tree, not committed or deployed:** `src/components/HeroDotMatrix.astro`;
- sparse canvas matrix with cornflower/indigo marks;
- pointer repulsion and spring return;
- theme-aware palettes;
- reduced-motion/coarse-pointer static mode;
- resize handling, DPR capped at 2, and off-screen pause;
- hero-only placement; body-wide dot grid removed;
- hero height revised to a bounded viewport-responsive range.

**Remaining scope**

- visual tune against real screenshots at 1440, 1024, 768, 390, and 320 widths;
- test pointer movement, theme switch, scroll, resize, tab backgrounding, and orientation change;
- profile animation and reduce particle density/paint work where needed;
- ensure text/portrait remain dominant and matrix never reduces contrast;
- add a static CSS fallback if canvas context is unavailable.

**Acceptance**

- no canvas in the accessibility tree;
- no interaction requirement to understand content;
- no animation under reduced motion;
- no continuous animation when idle or off-screen;
- DPR ≤ 2 and hero-scoped draw area;
- visually legible in both themes at all target widths;
- Lighthouse Performance ≥ 95 on production-equivalent build;
- no material long task caused by the matrix during a 10-second interaction profile.

**Gate:** owner reviews light/dark desktop/mobile captures and motion behavior.

### R3-C — Flagship project-card system

**Objective:** Combine the old cards’ scanability with the Astro case studies’ credibility.

**Single card anatomy**

1. fixed-ratio media frame;
2. role/status metadata;
3. project title;
4. one outcome/problem-oriented summary capped to a consistent line range;
5. three to five differentiating technologies plus optional “+N” disclosure;
6. primary “Read case study” action;
7. icon+text Repo and Live actions;
8. full-card hover may enhance, but explicit links remain available.

**Scope**

- normalize source images/crops and focal positions;
- enforce equal content slots without hiding meaningful copy;
- reduce tags on home while retaining full lists in case studies;
- clarify status semantics (“Live demo” is an action/status, not a green success claim);
- build one secondary `ProjectRow` grammar for Better DEV, LoopLens, and learning repos;
- remove borders from containers that can be separated by spacing/typography.

**Acceptance**

- all three cards align at desktop and remain naturally sized on mobile;
- title, media, summary, technology, and action order never changes;
- keyboard focus is clear; nested invalid interactive elements are absent;
- all images have useful alt text or are marked decorative as appropriate;
- each card has one obvious primary action.

**Gate:** owner approves all three cards and secondary rows.

### R3-D — Capability and GitHub evidence

**Objective:** Restore fast scanning and contribution proof without restoring fragile widgets or inflating claims.

#### Technology section

- derive groups from approved evidence: **Core**, **Working**, **Exploring**;
- use selective brand marks only where they speed recognition;
- keep visible text for every technology;
- separate product/frontend strength from supporting backend/infra and current learning;
- avoid percentages, skill bars, and arbitrary ratings.

#### GitHub activity module

Preferred implementation:

1. add a build-time script that queries GitHub’s authenticated GraphQL API for public contribution-calendar data and a small set of public repository facts;
2. use GitHub Actions’ scoped token at build/deploy time; do not expose a token client-side;
3. generate semantic local HTML/SVG—no third-party stats image service and no iframe;
4. show “Public GitHub activity” and an explicit “Last refreshed” date;
5. use a compact contribution strip/calendar plus at most three useful values (for example public contributions in the returned period, public repositories, and stars across owned public repositories) only if definitions are documented and values are successfully fetched;
6. if refresh fails, use the last verified generated snapshot with its old timestamp or hide numeric summaries and retain the GitHub profile link;
7. never frame activity as a productivity score or employment outcome.

**OPEN QUESTION:** Confirm which GitHub facts the owner wants surfaced. Recommended default: contribution calendar + selected repository links; avoid streak, grade, top-language percentages, issue counts, and all-time totals because they are noisy or misleading.

**Acceptance**

- every number has a source, definition, and refresh date;
- no third-party stats host is required at runtime;
- module degrades without breaking the build or page;
- private contribution details are not exposed;
- visual contrast is valid in both themes.

**Gate:** owner approves proficiency labels and GitHub facts before publication.

### R3-E — Experience, now, contact, and case-study refinement

**Objective:** Remove résumé-paste feeling while keeping evidence depth.

**Scope**

- group Brand Exponents content by product/problem rather than one long four-bullet block, without changing supported meaning;
- retain collaborative verbs and approved product/feature names;
- replace three bordered emoji “Now” cards with one editorial module or compact rows using the shared icon system;
- make writing visible as evidence with article title/date/source, if verified;
- refine contact copy after owner availability decision; use one primary email CTA;
- standardize all three case-study heroes, media, section spacing, link actions, and next-project navigation;
- audit every project image for authenticity, crop, caption, and alt text.

**Acceptance**

- no unsupported outcome, metric, ownership, or seniority implication;
- experience is scannable at 30 seconds and readable in depth;
- case studies share one information order but preserve project-specific evidence;
- no decorative card is added without a structural purpose.

**Gate:** owner approves all changed copy and representative home/case-study captures.

### R3-F — Production QA

**Objective:** Prove the revised portfolio is ready to launch.

**Test matrix**

- widths: 320, 390, 768, 1024, 1440;
- themes: light, dark, system;
- motion: normal and reduced;
- input: keyboard, mouse, coarse pointer/touch;
- execution: normal JS, blocked JS, slow network, canvas unavailable;
- routes: home, all case studies, resume, 404, sitemap, robots, manifest, OG image.

**Quality targets**

- Lighthouse ≥ 95 in Performance, Accessibility, Best Practices, and SEO on home and one case study;
- axe: zero critical/serious violations;
- WCAG 2.2 AA contrast and focus appearance;
- initial client JavaScript target ≤ 35 KB compressed; any exception documented;
- no render-blocking third-party font request if fonts are self-hosted/local;
- no unexpected layout shift; CLS ≤ 0.05;
- all internal/external links checked;
- all meaningful content present in raw HTML and visible without JS;
- no console errors in either theme or reduced-motion mode.

**Evidence**

- `docs/engineering/qa-report.md` updated with commands, measurements, captures, exceptions, and residual risks.

**Gate:** owner go/no-go for launch.

### R3-G — Launch and rollback

**Objective:** Publish only after explicit approval and preserve a rollback path.

**Scope**

- commit approved phases with meaningful conventional commit messages;
- update canonical status and decision log;
- merge/promote only the approved commit;
- build production output and deploy through the documented Pages mechanism;
- smoke-test production routes, assets, theme, matrix, resume, GitHub data, and links;
- retain the previous production commit/build for rollback until owner confirmation.

**Gate:** explicit owner launch authorization. This plan does not provide it.

## 6. Delivery order and dependencies

```text
R3-0 correctness
  └─> R3-A system
       ├─> R3-B hero matrix
       ├─> R3-C projects
       └─> R3-D capability/GitHub
             └─> R3-E content/case studies
                    └─> R3-F QA
                           └─> R3-G launch
```

R3-B, R3-C, and R3-D may be developed separately after R3-A, but each remains owner-gated. R3-E depends on owner-resolved copy/proficiency/GitHub decisions. R3-G is always separate and irreversible.

## 7. Implementation checklist

### Claims and content

- [x] Restore approved professional title and metadata (R3-0).
- [x] Remove unapproved availability/freelance/location wording pending owner decision (R3-0).
- [x] Map all R2/R3 home copy (R3-0).
- [ ] Label skill proficiency (R3-D).
- [x] Verify article wording/metadata boundary (R3-0; SRC-11 reference retained).
- [ ] Approve exact GitHub facts (R3-D gate).

### Visual system

- [x] Remove body-wide dot grid in working prototype.
- [x] Add hero matrix prototype.
- [ ] Reduce section/card/tag borders.
- [ ] Normalize radii, shadows, and accent use.
- [ ] Add coherent local SVG icons.
- [ ] Add manual theme control.
- [ ] Decide font delivery.

### Components

- [ ] Normalize `WorkCard`.
- [ ] Add one secondary `ProjectRow`.
- [ ] Add evidence-aware `SkillGroup`.
- [ ] Add first-party `GitHubActivity`.
- [ ] Simplify experience/now/contact structures.
- [ ] Standardize case-study actions and navigation.

### Quality

- [x] Fix and verify no-JS reveal baseline (R3-0).
- [ ] Test matrix performance and reduced motion (R3-B QA).
- [ ] Run responsive/theme/input matrix.
- [ ] Run axe, Lighthouse, contrast, and link checks.
- [ ] Update QA report, status, decision log, and rollback instructions.

## 8. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Canvas becomes visual noise | Weakens content hierarchy | Hero-only; sparse particles; masked edges; owner screenshot/motion gate |
| Canvas harms battery/performance | Lower Lighthouse and mobile quality | Idle/off-screen pause, coarse-pointer static mode, DPR cap, density tuning |
| Dark-template aesthetic persists | Portfolio remains generic | Remove secondary effects; one signature; editorial layouts below hero |
| GitHub API fails during build | Deployment failure/stale evidence | Cached dated snapshot or hidden metrics fallback; no runtime dependency |
| Metrics imply quality/seniority | Misleading claim | Neutral labels, definitions, timestamp, no grades/streak rhetoric |
| Skill list overstates expertise | Credibility damage | Core/Working/Exploring labels tied to approved evidence |
| Theme script flashes/wrong theme | Perceived polish/accessibility | Tiny inline pre-paint initializer; test system/light/dark persistence |
| Reveal animation hides content | Severe resilience issue | Visible-by-default baseline fixed in R3-0 |
| Scope expands into total rewrite | Delays and regression | Keep Astro/content collections; bounded phases; owner gates |

## 9. Immediate next gate

The current working tree contains only the requested hero matrix prototype and documentation changes; nothing has been committed or deployed. Before broader implementation, the owner should review:

1. the comparative recommendation;
2. whether the approved title remains “Frontend-focused Full Stack Engineer”;
3. public availability/freelance wording;
4. preferred GitHub facts;
5. light/dark desktop/mobile behavior of the matrix prototype.

After those decisions, start with R3-0 rather than styling more sections. This prevents attractive UI work from hardening claim and resilience regressions.
