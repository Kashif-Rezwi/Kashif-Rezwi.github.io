# Signal Field — Implementation Evidence

- **Purpose:** Verification record for the owner-approved Signal Field visual-system implementation.
- **Authority:** Owner approval in conversation on 2026-08-19; implementation plan in [28-signal-field-implementation-plan.md](./28-signal-field-implementation-plan.md).
- **Last updated:** 2026-08-19
- **Related:** [decision log](../decision-log.md) · [project status](../project-status.md) · [R5 design specification](./11-r5-glassmorphism-design.md)

## 1. Implemented scope

| Area | Implemented change |
| --- | --- |
| Material system | Added tokenized `primary`, `surface`, and `utility` glass roles. Primary glass is reserved for field-facing Contact and case-study hero surfaces; supporting cards use the quieter surface role; Header stays utility glass. |
| Hero | Preserved the portrait and parallelogram, formalized hover as a fixed geometric extrusion, and gated the movement to hover-capable, no-preference-motion devices. |
| Navigation | Added a stable active-section cue for Home, About, Skills, Projects, and Contact; case studies inherit Projects. |
| Contact | Kept the desktop rail / text / ASCII composition, placed the CTA panel before ASCII at 1100px and below (before the composition becomes constrained), and retained the ASCII renderer as the only full-strength animated ASCII element. |
| Home rhythm | Clarified the About surface ladder, reduced Skills' alternating amplitude on mobile, made Work/Testimonial supporting glass quieter, made testimonial emphasis editorial rather than blocky, and constrained Now to an intentional asymmetric card with a slim accent marker. |
| Inner pages | Added a narrow contextual case-study metadata rail; Resume and 404 receive only a small vertical accent marker. |

## 2. Files changed

- `src/styles/global.css`
- `src/components/Header.astro`, `WorkCard.astro`, `TestimonialCard.astro`
- `src/sections/Hero.astro`, `About.astro`, `Skills.astro`, `Work.astro`, `Experience.astro`, `Testimonials.astro`, `Now.astro`, `Contact.astro`
- `src/pages/work/[slug].astro`, `src/pages/resume.astro`, `src/pages/404.astro`
- `docs/rebuild-02/28-signal-field-implementation-plan.md`
- `docs/decision-log.md`, `docs/project-status.md`

No portfolio content, claims, routes, public assets, or runtime dependencies changed. The required production-build command refreshes the tracked GitHub-contribution snapshot; that generated data refresh is outside the Signal Field visual scope and requires separate review before any commit.

## 3. Verification

| Gate | Result |
| --- | --- |
| Static production build | `npm run build` — **7 pages built cleanly** |
| Base contrast | `npm run check:contrast` — **19/19 PASS** |
| Glass contrast | `npm run check:glass-contrast` — **30/30 PASS** across dark/light composited scenarios |
| Overflow | Rendered `documentElement.scrollWidth === clientWidth` at **320, 390, 960, 1024, 1440, and 2880px** across the checked dark/light states |
| Desktop visuals | Rendered Hero (incl. focused Header at 2880px), Contact, Code Review Agent, Resume, and 404 at 1440px; all four case-study routes verified at 1024px |
| Mobile visuals | Rendered Contact at 320px light and 390px dark, plus Better DEV at 390px |
| Theme visuals | Rendered Contact in light and dark at desktop and mobile, plus the case study, Resume, and 404 in light; light recipe retains clear card edges and restrained accent use |
| Navigation state | Hash targets About, Skills, Work, and Contact activate their matching desktop and drawer links; case studies activate Projects |
| Portrait interaction | Hover result measured: foreground `translate(-6px, -6px)`, accent plate `translate(10px, 12px)` |
| Reduced motion | Portrait transitions clamp to `0.01ms`; the ASCII emitter stops auto-cycling and morphing, Contact still fits at 390px, and no horizontal overflow occurs |
| Browser errors | Browser error and console checks returned no errors |

## 4. Scope audit

- No portfolio copy, claims, project data, routes, runtime dependencies, or deployment configuration changed.
- The Contact renderer remains the only animated ASCII motif.
- No cursor spotlight, global parallax, tilt system, new ambient effect, or generic redesign element was introduced.
- No commit, push, or deploy was performed.

## 5. Post-implementation discrepancy correction

The owner’s screenshot review and final cross-check identified four implementation defects, all corrected without changing the approved design direction:

1. The Contact wrapper is rendered by `GlassPanel`, so its parent-scoped `.contact-content` CSS never reached the actual element. It now deliberately uses `:global(.contact-content)`, restoring the intended padding, flex layout, and maximum width.
2. The original 900px composition switch allowed the complete rail + panel + ASCII system to become cramped at intermediate desktop widths. The action-first stacked composition now begins at 1100px, preserving the desktop split only where its visual balance has sufficient room.
3. The generic utility-glass focus echo applied an all-edge accent border to the fixed Header when a theme control held focus. The Header now retains only its intentional bottom divider; the focused theme choice keeps its local accessible focus ring.
4. The Contact ASCII script had CSS motion reduction but continued its JavaScript auto-cycle. Its `matchMedia` state now makes the renderer static under reduced-motion preference.

The role-based catch-light rule was also narrowed to role-only surfaces, so cards that already use a glass shape utility do not receive redundant decoration.

## 6. Owner decision point

The local implementation and verification are complete. Review the working-tree changes before authorizing any commit, branch promotion, or deployment.
