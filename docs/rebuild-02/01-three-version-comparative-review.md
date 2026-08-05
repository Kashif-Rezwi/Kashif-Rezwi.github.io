# Three-Version Portfolio Comparative Review

- **Purpose:** Compare the archived CRA portfolio, the first Astro rebuild, and `rebuild-02` across content, structure, visual language, UX, accessibility, performance, and maintainability; identify the strongest direction without inventing claims.
- **Authority:** Repository/source inspection and local rendered review on 2026-08-05. Owner preferences stated directly in conversation outrank reviewer interpretation.
- **Last updated:** 2026-08-05
- **Related:** [00-full-audit.md](./00-full-audit.md) · [02-improvement-implementation-plan.md](./02-improvement-implementation-plan.md) · [current-portfolio-audit.md](../research/current-portfolio-audit.md) · [home-copy-claim-map.md](../strategy/home-copy-claim-map.md)

## 1. Scope and branch clarification

The requested labels do not exactly match the current refs. The comparison uses the actual lineage:

| Review name | Source reviewed | Actual role |
|---|---|---|
| **Old portfolio** | `origin/master` at `0c2ffe5` | Archived CRA + Chakra UI portfolio. This is the old implementation the owner described, even though current `main` no longer contains it. |
| **First rebuild** | `develop` at `3d06218` and the live production URL | Phase 1 Astro portfolio, “Calm Engineering Ledger.” Current `main` is an earlier commit in this same Astro lineage. |
| **Second rebuild** | `rebuild-02` at `06907a7`, plus the owner-requested hero-background prototype in the working tree | “Dark Precision” redesign based on the first rebuild. |

**VERIFIED:** `main` and `develop` share the same Phase 1 Astro lineage; `origin/master`, not current `main`, is the archived CRA source. Comparing current `main` against `develop` would largely duplicate the first rebuild rather than recover the old portfolio.

## 2. Review method and limitations

Reviewed evidence:

- complete tracked source trees and commit lineage for all three versions;
- local production builds at desktop (1440 × 1000) and mobile (390 × 844);
- live production at `https://kashif-rezwi.github.io/`;
- content/accessibility trees, image inventories, dependencies, and generated HTML;
- Google Antigravity’s public home hero at `https://antigravity.google/` as visual/interaction reference only.

**VERIFIED:** The Antigravity reference uses a viewport-sized `<canvas>` behind its hero. No Google source, copy, logo, or brand asset was reused.

**INFERRED:** Visual scores below are comparative design judgments, not objective measurements. They are intended to prioritize work, not to manufacture precision.

## 3. Executive conclusion

**VERIFIED (owner direction):** `rebuild-02` is the preferred base. The owner prefers its overall design, prefers the old portfolio’s content richness, likes the old project-card concept, considers the first rebuild too shallow/plain, and wants better organization, icons, card consistency, GitHub proof, fewer borders, and a dual-theme Antigravity-inspired hero matrix.

**Reviewer conclusion:** Keep `rebuild-02` as the technical and visual base, but do not ship it unchanged. Its strongest improvement is first-impression energy; its main weakness is that it replaces one generic style (paper résumé) with another familiar style (dark developer template: Inter + mono labels + blue/purple gradients + glows + bordered cards). The best portfolio is a synthesis:

1. `rebuild-02` foundation and project imagery;
2. first rebuild’s claim-safe professional narrative, semantic structure, and static-site quality;
3. old portfolio’s fast visual scan, project-card richness, recognizable tools, and contribution proof;
4. a more original, quieter visual system centered on one interactive hero signature.

### Comparative scorecard

| Dimension | Old CRA | First rebuild | `rebuild-02` | Strongest source |
|---|---:|---:|---:|---|
| Immediate visual impact | 5/10 | 4/10 | 7/10 | `rebuild-02` |
| Professional credibility | 4/10 | 9/10 | 8/10 | First rebuild |
| Project scanability | 8/10 | 5/10 | 8/10 | Old anatomy + `rebuild-02` images |
| Project depth | 4/10 | 8/10 | 8/10 | Astro rebuilds |
| Content breadth | 8/10 | 6/10 | 8/10 | Old, after evidence filtering |
| Visual distinctiveness | 4/10 | 5/10 | 6/10 | None is yet distinctive enough |
| Accessibility | 3/10 | 10/10 | 8/10 | First rebuild |
| Performance/resilience | 4/10 | 10/10 | 7/10 | First rebuild |
| Mobile structure | 5/10 | 9/10 | 8/10 | First rebuild |
| Maintainability | 4/10 | 9/10 | 6/10 | First rebuild |

## 4. Version-by-version findings

### 4.1 Old portfolio — CRA + Chakra UI

#### What is worth preserving

- **VERIFIED:** It is the fastest of the three to scan for breadth: categorized tools, eight visual project cards, project filters, code/live/video actions, GitHub activity, and contact details are all visible without opening case studies.
- **VERIFIED:** The project cards have useful anatomy: screenshot → title → short description → actions → technology icons. This is why they feel richer than text-led cards even though their styling is dated.
- **VERIFIED:** Recognizable technology marks reduce decoding time compared with a wall of text tags.
- **VERIFIED:** The contribution calendar gives visitors a visible proof-of-activity signal that both Astro versions currently lack.
- **VERIFIED:** Cornflower blue, the portrait ring, and project imagery provide more visual anchors than the first rebuild.

#### What must not be carried over literally

- **VERIFIED:** Five of eight showcased projects are old bootcamp/clone work, and some links point to teammate-owned repositories. The old site is richer in volume, not stronger in evidence quality.
- **VERIFIED:** It has no professional experience section, no case-study depth, and weak ownership/role labeling.
- **VERIFIED:** Every major section is forced toward viewport height, producing large dead zones on desktop and an unnecessarily long page.
- **VERIFIED:** Desktop/mobile content is duplicated in source, and mobile navigation is a fixed bottom bar that competes with content.
- **VERIFIED:** The contact form presents a disabled Send button. This looks broken rather than intentionally unavailable.
- **VERIFIED:** The GitHub stats rely on third-party generated images; one card remained in a loading/error state during the rendered review. This directly demonstrates their fragility.
- **VERIFIED:** The project grid has uneven descriptions, mixed image ratios, small text, many icon libraries, weak keyboard semantics, and little hierarchy between primary and secondary actions.
- **VERIFIED:** The CRA build ships a large client bundle and roughly 8.8 MB of tracked raster imagery; SEO metadata and accessibility are materially weaker than both Astro versions.

#### Design-language diagnosis

**INFERRED:** The old site communicates “many things built,” but not “experienced product engineer.” Its visual system is mostly Chakra defaults plus cornflower blue. Preserve the information density and card anatomy—not the component styling, clone-project selection, shadows, fixed section heights, or widget dependencies.

### 4.2 First rebuild — Astro “Calm Engineering Ledger”

#### What it solved exceptionally well

- **VERIFIED:** It adds the missing professional story: named experience, collaborative contribution language, education, current direction, contact, and three evidence-backed case studies.
- **VERIFIED:** It has the clearest information architecture and strongest reading order: identity → selected work → experience → current direction → contact.
- **VERIFIED:** It is static HTML with zero home-page JavaScript, optimized imagery, strong metadata, sitemap/robots/OG support, visible focus states, a skip link, and reduced-motion-safe styling.
- **VERIFIED:** It avoids inflated project volume and labels personal/hackathon work honestly.
- **VERIFIED:** Mobile spacing, text measure, semantic headings, and content flow are the strongest of the three.

#### Why it feels shallow despite stronger professional content

- **VERIFIED:** Only one featured project originally had a cover image; the homepage is dominated by text and repeated white rectangles.
- **VERIFIED:** There is no skill/technology overview and no GitHub contribution proof.
- **VERIFIED:** Secondary projects are compressed into inline prose, making them easy to miss.
- **VERIFIED:** The hero, work cards, experience, “now,” and contact sections use nearly the same visual intensity. There is little editorial contrast or memorable interaction.
- **VERIFIED:** The noise texture is almost invisible and does not function as a recognizable signature.

**INFERRED:** The content is not generally less credible or less detailed than the old portfolio; it is less visually surfaced. The owner’s “shallow content” reaction is therefore best solved through content presentation and selective breadth—not by restoring all old copy or projects.

#### Design-language diagnosis

**INFERRED:** This version overcorrects from a busy component-library portfolio into a résumé-like document. It earns trust after reading, but does too little in the first 10 seconds to motivate that reading.

### 4.3 Second rebuild — Astro “Dark Precision”

#### What improved

- **VERIFIED:** All three featured projects now have consistent 16:9 image slots, case-study pages have stronger visual headers, and the homepage restores a categorized technology section.
- **VERIFIED:** The hero now has clearer hierarchy, stronger scale, a status badge, two CTAs, a prominent portrait, and more confident spacing.
- **VERIFIED:** Dark and light palettes follow the operating-system preference; typography uses Inter and JetBrains Mono; hover and entrance motion make the site feel more active.
- **VERIFIED:** Featured cards use one component and one internal field order. The card structure is technically consistent even where visual density differs.
- **VERIFIED:** Professional experience and case-study depth from the first rebuild remain present.

#### Current weaknesses

##### Originality and visual language

- **INFERRED:** Inter + JetBrains Mono, near-black canvas, blue-to-purple gradient text, glow, green availability pills, and bordered dark cards form a recognizable “AI/developer portfolio” template. It is more stylish than the first rebuild but not yet uniquely Kashif’s.
- **VERIFIED:** The static body-wide dot grid repeats behind every section. Because borders also divide every section, card, tag, badge, header, and footer, the site has too many simultaneous structural lines.
- **VERIFIED:** The strongest visual idea is currently spread everywhere (grid, gradient, glow, borders, pills, timeline, emoji cards), so no single element owns the identity.

##### Project-card consistency

- **VERIFIED:** Featured cards share the same component but diverge perceptually because screenshot crops have different visual density, summaries wrap differently, and technology lists vary from 7 to 11 tags.
- **VERIFIED:** Featured cards, “More projects” rows, “Now” cards, experience entries, and tech pills each introduce a different card/list grammar. The page lacks one clear rule for what deserves a surface versus a row.
- **INFERRED:** Showing every technology on a homepage card weakens quick scanning. Three to five differentiating technologies plus “+N” would produce more consistent card heights; the full list belongs in the case study.

##### Icons

- **VERIFIED:** The design has no coherent icon system. Most social/action links are text-only, while the “Now” cards use platform-dependent emoji (⚡, ✍️, 📚).
- **INFERRED:** Icons should clarify repeated actions and categories, not decorate every label. A single local SVG set for GitHub, LinkedIn, dev.to, email, external link, repository, location, and theme is sufficient. Technology brand marks need consistent optical sizing and should not replace accessible text.

##### Content and claim safety

- **VERIFIED:** The approved title “Frontend-focused Full Stack Engineer” was shortened to “Full Stack Engineer” in page title, metadata, and hero label. This weakens the evidence-backed positioning decision.
- **VERIFIED:** `rebuild-02` adds “Open to opportunities,” “freelance projects,” and broader “AI-powered applications” wording outside the existing home-copy claim map.
- **VERIFIED:** The technology section flattens strong, working, and learning skills into one undifferentiated list. Python, LangChain, and AI tooling therefore appear equivalent to React/TypeScript expertise even though the evidence inventory distinguishes proficiency.
- **INFERRED:** “Let’s build something worth shipping” is energetic but generic; the contact section would be stronger if it named the type of work/conversation sought in claim-safe language.

##### Accessibility, performance, and resilience

- **VERIFIED:** The rebuild retains semantic HTML, keyboard-operable navigation, labels, focus styles, and reduced-motion handling.
- **VERIFIED:** It introduces client JavaScript for navigation/reveal behavior and external Google Fonts, replacing the first rebuild’s zero-JS and zero-font-request baseline.
- **VERIFIED:** `.reveal` elements are hidden by CSS before JavaScript marks them visible. If the script fails or is blocked, most lower-page content remains visually absent even though it exists in HTML. This is a progressive-enhancement regression.
- **VERIFIED:** Theme follows system preference only; there is no user-visible theme control or persisted choice.
- **VERIFIED:** The new project images increase tracked raster-image weight from roughly 0.68 MB on `develop` to roughly 1.98 MB on `rebuild-02` before generated optimization. Astro output optimization helps delivery, but source/OG discipline still matters.
- **VERIFIED:** Header shadow, backdrop blur, numerous borders, card shadows, and glow effects are individually subtle but collectively make both themes busier than necessary.

## 5. Cross-version content decision

### Preserve publicly

- **VERIFIED:** First rebuild’s claim-mapped positioning, professional experience, collaborative verbs, case studies, education, current direction, and direct contact routes.
- **VERIFIED:** `rebuild-02` project imagery, technology overview, stronger hero hierarchy, dual palette, and case-study presentation.
- **VERIFIED:** Old portfolio’s scan-friendly project anatomy, technology recognizability, and contribution proof concept.

### Evolve before publishing

- **VERIFIED:** Restore “Frontend-focused Full Stack Engineer” as the primary professional label unless the owner explicitly changes the positioning decision.
- **VERIFIED:** Group technology by proficiency/evidence status rather than presenting every tool as equal.
- **VERIFIED:** Keep exactly three flagship case studies; use compact, consistent rows for secondary personal/hackathon/learning work.
- **VERIFIED:** Add GitHub activity as first-party proof with a timestamp and graceful fallback, not as unlabelled third-party résumé decoration.
- **VERIFIED:** Use a coherent SVG icon system with adjacent text and accessible labels.

### Do not restore

- **DO NOT USE PUBLICLY:** Unverified historical GitHub numbers copied from screenshots as if current.
- **DO NOT USE PUBLICLY:** Bootcamp clone projects, teammate-hosted projects, or sole-ownership implications already excluded by owner decisions.
- **DO NOT USE PUBLICLY:** Disabled contact forms, broken video actions, or unsupported metrics/outcomes.
- **DO NOT USE PUBLICLY:** Private evidence files or details not already approved for public use.

## 6. Prioritized findings

| Priority | Finding | Why it matters | Recommended response |
|---|---|---|---|
| P0 | Positioning and new copy drift from the approved claim map | Trust and traceability | Restore/map/owner-approve every changed public sentence |
| P0 | Reveal content depends on JS to become visible | Resilience and accessibility | Make visible the baseline; apply hidden state only after JS initializes |
| P1 | Visual system is busy but still generic | First impression | Make the hero matrix the single signature; remove the body-wide grid and reduce borders/glows elsewhere |
| P1 | Project cards are structurally but not perceptually consistent | Core portfolio evidence | Normalize media framing, content slots, tech count, actions, and equal-height behavior |
| P1 | No GitHub activity proof | Owner requirement and credibility | Build a first-party, timestamped contribution module with no invented metrics |
| P1 | No coherent icon language | Scanability and polish | Adopt one local SVG system; remove emoji UI icons |
| P1 | Skill proficiency is flattened | Accurate positioning | Label Core / Working / Exploring from approved evidence |
| P2 | Theme cannot be selected manually | User control | Add system/light/dark control with persistence and no flash |
| P2 | External fonts and image weight increase dependency/cost | Performance and privacy | Self-host subset fonts or return to a deliberate local stack; enforce budgets |
| P2 | Too many section/card/tag borders | Hierarchy | Reserve borders for interactive/contained objects; use spacing and typography elsewhere |
| P3 | Secondary work and writing are understated | Breadth | Add one compact evidence rail, not another large card grid |

## 7. Final recommendation

**INFERRED:** Move forward with `rebuild-02`, not the old CRA site or the first rebuild. Treat the current branch as a strong visual prototype rather than a finished modern portfolio. The desired design should feel like a precise engineering workspace with one responsive “field” in the hero—not a collection of dark cards. Content should remain evidence-first, but its evidence should be surfaced visually through project media, concise technology signals, contribution history, and consistent action icons.
