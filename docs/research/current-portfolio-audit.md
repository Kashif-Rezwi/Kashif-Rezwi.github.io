# Current Portfolio Audit

- **Purpose:** A preserve / evolve / remove assessment of the live portfolio (SRC-01) and its codebase (SRC-02), specific enough to act on in Phase 0C. Assesses what exists; it does not prescribe a new design direction.
- **Authority:** Compiled 2026-08-05 from a full read of the local codebase (branch `develop`) and build-output inspection. The live site is client-rendered React, so copy was audited in source (SRC-02), which is the same code that serves SRC-01.
- **Last updated:** 2026-08-05
- **Related:** [evidence-ledger.md](./evidence-ledger.md) · [github-project-triage.md](./github-project-triage.md) · [open-questions.md](../open-questions.md)

## Verdicts

- **Preserve** — keep this substance in the rebuild (re-implementation allowed)
- **Evolve** — keep the intent, change the substance
- **Remove** — drop from the rebuild (or fix by deletion)

## Visual design

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| Restrained light theme, cornflowerblue accent, noise-texture background | Consistent palette across all sections; `#f5f5f5` + webp background (index.html, components) | Preserve | A calm, working identity; fine as a reference |
| Hero: name + role + short paragraph + resume CTA + circular bordered portrait | HomeContent.jsx | Preserve | Restrained hero + clear CTA pattern |
| Left social icon rail (LinkedIn, dev.to, GitHub) | HomeContent.jsx | Preserve | Good placement; needs accessible labels (see a11y) |
| Card-based project grid with hover elevation, Code/Live/Video/Tech-Stack actions | ProjectInfo.jsx | Preserve | Clear card anatomy |
| Categorized tech-stack grid with alternating alignment | TechStackTab.jsx (recent refactor per git history) | Preserve | Clean and scannable |
| Full-viewport (`100vh`) section stacking on every page | Home.jsx, About.jsx, Github.jsx, Contact.jsx | Evolve | Rigid on short viewports; clipping risk in Projects/Contact |
| GitHub stats/calendar widgets row | Github.jsx | Evolve/Remove | See Content section |

## Content & copy

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| Hero copy: "production-grade web applications, AI-powered features, and workflow automation tools… Focused on AI agents, scalable architectures, system design" | HomeContent.jsx | Evolve | Mostly evidence-backed; "scalable architectures, system design" exceeds recorded evidence (ledger C-03, `INFERRED`); needs claim-safe rewrite |
| About copy: "2+ years… fast-paced startup environments… CRM platforms, workflow automation systems" | About.jsx | Evolve | Verified except the "AI-powered products" nuance (C-04); names no employers or products |
| **No experience section anywhere** — Swipe Pages/Swipe One and Nexus absent from the whole site | Codebase-wide search; only About.jsx mentions "experience" | Evolve | Largest content gap vs resume evidence; employer-product disclosure needs OQ-08 approval |
| Projects page: 2023 bootcamp clones hold 5 of 8 slots; only code-review-agent + betterdev represent the 2026 AI work | ProjectStackTab.jsx | Evolve/Remove | Misaligned with verified current direction (C-05); rebuild around the triage shortlist |
| codeair card: description describes Airtable the product; links to stale repo `glistening-cook-4365` (301 → renamed `Airtable`) | ProjectStackTab.jsx; verified 2026-08-05 | Remove/Replace | Describes the product, not his contribution (C-06) |
| herebuy + trendsy cards link to teammates' repos (`arpit2444/…`, `Shalini1908/…`) | ProjectStackTab.jsx | Remove/Replace | Attribution/hosting risk (C-07); group learning projects need explicit labeling if kept |
| "Github Calender & Stats" section — heading typo; third-party images from `github-readme-stats-fast.vercel.app` + react-github-calendar | Github.jsx | Evolve/Remove | Fragile external dependencies; whether to show stats at all is a 0C choice |
| dev.to writing linked only as a hero icon; no writing/blog presence | HomeContent.jsx | Evolve | One published article is verified evidence (SRC-11) |
| Contact details: phone, email, mailto links, Google Maps location link | Contact.jsx | Evolve | Functional; see code hygiene for leftover remnants |

## Information architecture & navigation

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| Single-page scroll (react-scroll anchors) coexists with standalone routes (`/about-me`, `/skills`, `/project`, `/contact`) | AllRoutes.jsx + Navbar.jsx | Evolve | Duplicated structure; pick one model in 0C |
| `/resume` route renders the Github stats page | AllRoutes.jsx | Evolve | Mislabel — functional bug |
| Nav: Home / About / Skills / Projects / Contact + Resume link, mobile toggle | Navbar.jsx | Preserve | Small, clear nav |
| Heading typo "Github Calender & Stats" | Github.jsx | Remove | Fix in rebuild |

## Accessibility

| Item | Observation (evidence) | Verdict |
|---|---|---|
| Zero `aria-*`/`role` attributes in any component | codebase-wide grep returned none | Evolve — must-fix in rebuild |
| Icon-only social links (LinkedIn/dev.to/GitHub) without labels | HomeContent.jsx, Contact.jsx | Evolve |
| Multiple `<h1>`s per page (About/Skills/Projects/Github/Contact each use `as="h1"`) | Pages/*.jsx | Evolve |
| `UnorderedList` used as layout container throughout | all pages | Evolve — semantic HTML |
| Nav toggle/menu are clickable `div`/`Text`, no keyboard support | Navbar.jsx | Evolve |
| `textAlign="justify"` body paragraphs | HomeContent.jsx, About.jsx | Evolve (readability) |
| Alt text present on images (portrait, project screenshots, stats) | HomeContent/ProjectInfo/Github | Preserve & strengthen (specific alt text) |

## Responsiveness

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| Duplicated full desktop + mobile markup blocks toggled by display props | HomeContent.jsx, About.jsx, Contact.jsx, Navbar.jsx | Evolve | Double-maintained markup |
| Breakpoint coverage complete: mobile block covers base/sm/md, desktop block covers lg | HomeContent.jsx display props | Preserve (as verified fact) | No coverage gap found |
| Desktop hero grid `minWidth: 767px` | HomeContent.jsx | Evolve | Intermediate widths |
| Fixed `100vh` sections | all pages | Evolve | Couples layout to viewport height |

## Performance

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| **2.7 MB `ME.png` preloaded in index.html** (a 378 KB `ME.jpg` also exists) | public/index.html, public/profile/ | Remove/Replace | Single biggest load improvement available |
| ~816 KB minified main JS; three icon libraries bundled (react-icons, unicons, tabler) | build/static/js/main.*.js; package.json | Evolve | Bundle discipline in rebuild |
| Large project screenshots (myntra2.png ~2 MB, etc.) | public/templates/ | Evolve | Compress/modern formats |
| `build/` is 32 MB incl. source maps + resume PDF | build/ | Evolve | Confirm what gh-pages deploy publishes |
| No code-splitting beyond CRA default; whole site in one route component | Home.jsx | Evolve | Small content volume makes this easy |

## SEO & metadata

| Item | Observation (evidence) | Verdict |
|---|---|---|
| meta description = CRA default ("Web site created using create-react-app") | public/index.html | Remove — replace with claim-safe description |
| No Open Graph / Twitter cards; title "Kashif Rezwi" is fine | public/index.html | Evolve |
| Client-only rendering (no prerender/SSG) — fetchers see only the app shell | CRA SPA (observed in SRC-01 fetch) | Evolve — rendering decision belongs to 0C |

## Code hygiene

| Item | Observation (evidence) | Verdict | Notes |
|---|---|---|---|
| Dead code: `Carousel.jsx` referenced only in comments; empty `UnorderedList` in Project.jsx | ProjectStackTab.jsx, Project.jsx | Remove | |
| Commented-out alternative phone/location values in Contact.jsx | Contact.jsx | Remove | Private remnants in a public repo — never reproduce |
| Resume button: `download` attr on local PDF + `onClick` window.open of a Google Drive link — conflicting behaviors (C-08) | Navbar.jsx, HomeContent.jsx | Evolve | One resume source of truth |
| Contact form fields have no submit handler; contact works via mailto links | Contact.jsx | Evolve | 0C: working form vs mailto-only |
| Resume PDF tracked in the public repo | src/Components/Home/resume/ | OPEN QUESTION | OQ-05 |

## Cross-cutting facts for 0C (no design prescription)

- The site currently carries **no professional experience** and **stale featured projects** — content rebuild will drive information architecture.
- Single-page anchor model + duplicated responsive blocks + zero a11y attributes are entangled — rebuild implementation choices should address all three together.
- One oversized hero image dominates load; all shortlist projects have live demos or capturable visuals.
- The entire site ships in one bundle today; content volume is small enough that performance targets are easily met.