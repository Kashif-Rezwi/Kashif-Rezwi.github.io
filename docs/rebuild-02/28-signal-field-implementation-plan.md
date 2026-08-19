# Signal Field — Visual-System Implementation Plan

- **Purpose:** Implement the owner-approved final visual audit without altering portfolio claims, technical stack, routes, or public content.
- **Authority:** Owner approval in conversation on 2026-08-19; constrained by `AGENTS.md`, the R5 design specification, and the existing R5 accessibility/contrast contracts.
- **Last updated:** 2026-08-19
- **Related:** [final audit](./00-full-audit.md) · [R5 design specification](./11-r5-glassmorphism-design.md) · [R5 operating loop](../engineering/engineering-workflow.md) · [decision log](../decision-log.md)

## Objective

Evolve the existing Responsive Engineering Field into the approved **Signal Field** system: one ambient dot field, one geometric portrait offset, contextual rails, selective glass roles, and one full-strength animated ASCII emitter in Contact.

## Scope

1. Define primary, surface, and utility glass roles without changing the single cornflower palette or applying blur indiscriminately.
2. Refine the Hero portrait offset into a consistent, fixed directional extrusion; no tilt, spotlight, or global parallax.
3. Improve mobile Contact hierarchy by placing actionable contact content ahead of the ASCII visual while retaining the desktop split composition and social rail.
4. Establish clearer hierarchy in About, Skills, Testimonials, Now, Projects, Experience, and shared case-study pages through spacing, material intensity, rails, and restrained hover behavior.
5. Add an accessible active-section state to the shared navigation and small shared visual cues to Resume and 404.

## Out of scope

- Copy, claims, project data, routes, dependencies, stack, SEO, backend, deployment, and the ASCII renderer logic.
- New ambient effects, extra animated ASCII placements, global cursor lighting, large 3D interactions, or additional sections.
- Optional footer decoration and testimonial quote-glyph expansion from the audit's P2 list.

## Design decisions

| Decision | Rationale |
| --- | --- |
| Glass is role-based | Header is utility glass; Contact and case heroes are primary; cards are quieter surface glass. |
| Rails are contextual | Social rails remain Hero/Contact-only; inner pages use a narrow metadata rail rather than repeated social icons. |
| ASCII remains singular | The Contact renderer remains the portfolio's only animated ASCII motif. |
| Directional motion is local | Portrait and cards use small fixed displacement; reduced-motion continues to disable transitions. |
| Mobile action precedes decoration | Contact text/actions appear before the full ASCII visual at 1100px and below, before the desktop rail/text/ASCII composition becomes constrained. |

## Files and gates

| Area | Files |
| --- | --- |
| Tokens and system | `src/styles/global.css` |
| Header and navigation | `src/components/Header.astro` |
| Home sections | `src/sections/Hero.astro`, `About.astro`, `Skills.astro`, `Work.astro`, `Experience.astro`, `Testimonials.astro`, `Now.astro`, `Contact.astro` |
| Reusable cards / inner pages | `src/components/WorkCard.astro`, `TestimonialCard.astro`, `src/pages/work/[slug].astro`, `src/pages/resume.astro`, `src/pages/404.astro` |
| Records | this plan, `docs/decision-log.md`, `docs/project-status.md`, implementation evidence |

Done when: build and both contrast checks pass; desktop/mobile light/dark renders preserve hierarchy; reduced-motion remains static; navigation state, Contact ordering, and inner-page rails are visually verified; no claims change.
