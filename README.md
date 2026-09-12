# Kashif Rezwi — Developer Portfolio & Case Studies

> High-performance, evidence-backed personal portfolio and architectural case studies built with Astro 7, Tailwind CSS v4, and TypeScript. Zero runtime framework overhead, automated WCAG 2.2 AA contrast suites, and build-time data harvesting.

[![Live Site](https://img.shields.io/badge/Live_Site-kashif--rezwi.github.io-cornflowerblue?style=flat-square)](https://kashif-rezwi.github.io/)
[![Astro Version](https://img.shields.io/badge/Astro-7.1.6-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![WCAG AA](https://img.shields.io/badge/WCAG_2.2_AA-49_Checks_Passing-success?style=flat-square)](./scripts/check-contrast.mjs)
[![Node Runtime](https://img.shields.io/badge/Node.js-%3E%3D22-5fa04e?style=flat-square&logo=node.js&logoColor=white)](./.nvmrc)

---

## Overview

This repository powers **[kashif-rezwi.github.io](https://kashif-rezwi.github.io/)**, the personal engineering portfolio of **Kashif Rezwi** (Frontend-focused Full Stack Engineer). 

Rather than deploying heavy client-side JavaScript runtimes (React/Next.js/Vue) for primarily static reading content, this site is engineered from the ground up with **Astro 7** and **Tailwind CSS v4** to deliver sub-second paint times, 0 Cumulative Layout Shift (CLS 0), and 0 Total Blocking Time (TBT 0). 

It showcases deep, evidence-based case studies of production and personal systems, featuring honest architectural trade-offs, failure modes, and verified technical outcomes.

---

## Key Engineering Characteristics

- **Zero-JS Core with Progressive Enhancement**: The entire site renders pure, semantic HTML and CSS by default. JavaScript is strictly isolated to opt-in progressive enhancements: an instant theme initialization script in `<head>` (eliminating flash of unstyled content), an interactive canvas dot matrix (`HeroDotMatrix.astro`), a 320ms diagonal wavefront morphing ASCII role cycler (`HeroRoleCycler.astro`), and an interactive 38×17 ASCII logo canvas in the contact section.
- **CSS-First Design Tokens (Tailwind v4)**: Configured via `@theme` in `src/styles/global.css`, driving a unified "Calm Engineering Ledger" aesthetic with dark and light themes, layered glass materials (`.glass`, `.glass-panel`, `.glass-card`), ambient glow fields, and hardware-accelerated transitions.
- **Automated Dual-Suite WCAG Contrast Enforcement**: Two dedicated test suites (`scripts/check-contrast.mjs` and `scripts/check-glass-contrast.mjs`) mathematically verify 49 contrast scenarios across base canvases, semi-transparent glass layers, and radiant ambient glow bands in both dark and light modes, blocking any regression below WCAG 2.2 AA (4.5:1 for text, 3:1 for UI elements).
- **Build-Time GraphQL Data Harvesting**: Instead of shipping client-side API calls that leak access tokens or trigger third-party rate limits, `scripts/fetch-github-contributions.mjs` queries GitHub's GraphQL API at compile time to snapshot the last 52 weeks of contributions into `src/data/github-contributions.json`. The calendar renders as pure static inline SVG.
- **Build-Time Asset Pipelines**: Automated SVG and image composition scripts powered by `sharp` generate circular, accent-bordered browser favicons across multiple resolutions (`scripts/make-favicon.mjs`) and Open Graph social share cards (`scripts/make-og-card.mjs`).
- **Strict Evidence-Backed Content Governance**: Governed by a root-level operating contract ([`AGENTS.md`](./AGENTS.md)), append-only decision record ([`docs/decision-log.md`](./docs/decision-log.md)), and claim registry ([`docs/research/evidence-ledger.md`](./docs/research/evidence-ledger.md)). No metrics, seniority levels, or project outcomes are ever exaggerated or fabricated.

---

## Architecture

The system compiles static markdown documents, typed collections, and reactive CSS design tokens into an edge-deployable static bundle.

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                       1. BUILD-TIME DATA AGGREGATION                       │
├──────────────────────────┬──────────────────────────┬──────────────────────┤
│    GitHub GraphQL API    │     Markdown Content     │    Design Tokens     │
│                          │                          │                      │
│ • 52-week contribution   │ • src/content/work/      │ • global.css (@theme)│
│   calendar snapshot      │ • src/content/           │ • 19 base contrast   │
│ • scripts/fetch-github-  │   testimonials/          │   checks (WCAG AA)   │
│   contributions.mjs      │ • Zod schema validation  │ • 30 on-glass checks │
│                          │   in content.config.ts   │   (scripts/check-    │
│            │             │            │             │   glass-contrast.mjs)│
│            ▼             │            │             │          │           │
│    src/data/github-      │            │             │          ▼           │
│   contributions.json     │            │             │ Automated CI Pass /  │
│       (Local SVG)        │            │             │ Fail Contrast Gate   │
└────────────┬─────────────┴────────────┼─────────────┴──────────┬───────────┘
             │                          │                        │
             ▼                          ▼                        ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                       2. ASTRO STATIC COMPILATION                          │
│                  astro build + @tailwindcss/vite Plugin                    │
│                                                                            │
│  • Component Tree : Base.astro -> Header, Hero, About, Skills, Work,       │
│                     Experience, Testimonials, Now, Contact, Footer         │
│  • Image Pipeline : Automatic AVIF / WebP asset optimization               │
│  • Asset Scripts  : scripts/make-favicon.mjs -> circular accent favicons   │
│                     scripts/make-og-card.mjs -> Open Graph card (1200x630) │
└─────────────────────────────────────┬──────────────────────────────────────┘
                                      │
                                      ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                    3. STATIC ASSETS & ROUTING (dist/)                      │
│                                                                            │
│  • 7 Pre-rendered Pages : / (Home), /resume, /404, /work/better-dev,       │
│                           /work/code-review-agent, /work/lingo-agent,      │
│                           /work/perplexity                                 │
│  • SEO & Manifests      : sitemap-index.xml, robots.txt, manifest.json     │
└─────────────────────────────────────┬──────────────────────────────────────┘
                                      │
                                      ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                    4. DEPLOYMENT & RUNTIME DELIVERY                        │
├─────────────────────────────────────────┬──────────────────────────────────┤
│           GitHub Actions CI/CD          │      Client Browser Delivery     │
│                                         │                                  │
│  • .github/workflows/ci.yml             │  • GitHub Pages Edge Distribution│
│    Runs contrast check + test build     │  • Zero-JS Server-Rendered Core  │
│  • .github/workflows/deploy.yml         │  • Head Theme Script (zero FOUC) │
│    Deploys dist/ to GitHub Pages        │  • Progressive Canvas Overlays:  │
│    on merge to main branch              │    Hero Matrix, ASCII Cyclers    │
└─────────────────────────────────────────┴──────────────────────────────────┘
```

---

## Featured Case Studies

The portfolio features deep-dive engineering case studies located under `/work/<slug>`:

1. **[Code Review Agent](https://kashif-rezwi.github.io/work/code-review-agent/)** — AI-powered code review platform featuring background job pipelines (BullMQ + Redis Streams), reserve-and-settle token billing via Razorpay, transactional outbox patterns, and team-standard vector RAG (pgvector).
2. **[Better DEV](https://kashif-rezwi.github.io/work/better-dev/)** — Full-stack cited AI answer assistant built with React 19, NestJS, and Tavily. Demonstrates live tool execution visibility, token streaming cancellation over SSE, model routing modes, and background document OCR parsing.
3. **[LingoAgent](https://kashif-rezwi.github.io/work/lingo-agent/)** — Autonomous i18n agent for Next.js App Router applications utilizing Babel AST string extraction, sandboxed code execution in E2B environments, automated pull request generation, and Vercel preview deploys.
4. **[Perplexity Clone](https://kashif-rezwi.github.io/work/perplexity/)** — Modular NestJS monolith with PostgreSQL and Prisma providing cited, web-grounded answer generation with Tavily search and threaded conversational follow-ups.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework & Engine** | [Astro 7.1](https://astro.build/) (Static Site Generation), [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`), Vanilla CSS Custom Properties |
| **Language & Validation** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode), [Zod](https://zod.dev/) (Content Collections Schema) |
| **Data & Content Layer** | Astro Content Collections (`astro:content`), GitHub GraphQL API, Markdown |
| **Asset Pipeline** | [Sharp](https://sharp.pixelplumbing.com/) (Build-time favicon & Open Graph card generation) |
| **Quality & Accessibility** | Custom WCAG 2.2 AA Contrast Suites (19 base checks + 30 on-glass compositing checks) |
| **Deployment & CI/CD** | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml                    # CI build & contrast verification workflow
│       └── deploy.yml                # Production GitHub Pages deployment workflow
├── docs/                             # Project governance, decision logs & research
│   ├── decision-log.md               # Append-only architectural decision log (DL-001+)
│   ├── engineering/                  # Branching, QA reports, and workflow guides
│   ├── project-status.md             # Canonical project roadmap and milestone status
│   └── research/                     # Claim evidence ledger and project audit records
├── public/                           # Static assets served at the site root
│   ├── resume/                       # Master full-stack developer PDF resume
│   ├── testimonials/                 # Verified LinkedIn recommender profile images
│   ├── favicon.ico                   # Multi-resolution favicon
│   ├── og.png                        # Open Graph preview card (1200x630)
│   └── robots.txt                    # Search engine crawler configuration
├── scripts/                          # Build-time generation and verification tools
│   ├── check-contrast.mjs            # WCAG 2.2 AA design token contrast test suite
│   ├── check-glass-contrast.mjs      # On-glass compositing contrast test suite
│   ├── fetch-github-contributions.mjs# Build-time GitHub GraphQL contribution harvester
│   ├── make-favicon.mjs              # Sharp-based circular accent favicon generator
│   └── make-og-card.mjs              # Open Graph social preview generator
├── src/
│   ├── assets/                       # Sourced images (portrait, project cover cards)
│   ├── components/                   # Modular UI components (Header, Footer, Cards, Canvas)
│   │   ├── GitHubContributions.astro # Static SVG GitHub activity calendar
│   │   ├── HeroDotMatrix.astro       # Pointer-reactive interactive canvas dot matrix
│   │   ├── HeroRoleCycler.astro      # 320ms diagonal wavefront ASCII role cycler
│   │   ├── TechIcon.astro            # Scalable inline tech stack iconography
│   │   └── ThemeControl.astro        # Dark/Light/System theme selector
│   ├── content/                      # Content collections markdown files
│   │   ├── testimonials/             # Verbatim LinkedIn recommendations
│   │   └── work/                     # Technical case study markdown files
│   ├── content.config.ts             # Zod collection schema definitions
│   ├── layouts/
│   │   └── Base.astro                # Root HTML document layout with SEO & theme script
│   ├── pages/
│   │   ├── index.astro               # Home page composition
│   │   ├── resume.astro              # Resume viewer and auto-download gateway
│   │   ├── 404.astro                 # Custom styled 404 error page
│   │   └── work/
│   │       └── [slug].astro          # Dynamic case-study route template
│   ├── sections/                     # Home page section modules (Hero, About, Work, etc.)
│   └── styles/
│       └── global.css                # Tailwind v4 @theme tokens and glassmorphism styles
├── astro.config.mjs                  # Astro configuration with Tailwind & Sitemap plugins
├── package.json                      # Project scripts and dependencies
└── tsconfig.json                     # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v22.0.0` or higher (verified with `.nvmrc`).
- **npm**: `v10.0.0` or higher.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Kashif-Rezwi/Kashif-Rezwi.github.io.git
cd Kashif-Rezwi.github.io
npm ci
```

### Environment Variables

The project includes build-time data harvesting that optionally uses a GitHub Personal Access Token (`read:user` scope) to snapshot the contribution graph:

Create a `.env` file in the root directory (gitignored):

```env
# Optional: Fine-grained GitHub PAT with read-only user access
GH_CONTRIBUTIONS_TOKEN=ghp_your_token_here
```

> **Note**: If `GH_CONTRIBUTIONS_TOKEN` is omitted, the build gracefully falls back to the existing cached snapshot in `src/data/github-contributions.json` without failing the build.

---

## Development & Build Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run build` | Generates favicons, updates contributions, and compiles the static site into `dist/` |
| `npm run preview` | Spins up a local server to inspect the compiled `dist/` directory |
| `npm run check:contrast` | Executes the 19-point WCAG 2.2 AA base contrast test suite |
| `npm run check:glass-contrast` | Executes the 30-point on-glass mathematical compositing contrast suite |
| `npm run favicon` | Re-generates all circular browser favicons from `src/assets/portrait.jpg` |
| `npm run fetch:github` | Queries the GitHub GraphQL API and refreshes `src/data/github-contributions.json` |

---

## Testing & Quality Gates

The repository enforces strict automated quality gates prior to deployment:

```bash
# 1. Verify WCAG contrast compliance
npm run check:contrast
npm run check:glass-contrast

# 2. Verify static production compilation
npm run build
```

- **Contrast Verification**: `scripts/check-contrast.mjs` and `scripts/check-glass-contrast.mjs` calculate relative luminance and contrast ratios based on W3C formulas, asserting $\ge 4.5:1$ for body/muted text and $\ge 3:1$ for non-text UI components across dark and light palettes.
- **Accessibility**: Audited against axe-core and Google Lighthouse, targeting 100/100 across Performance, Accessibility, Best Practices, and SEO.
- **Reduced Motion**: All canvas scripts and CSS transitions respect `prefers-reduced-motion: reduce` by freezing animations and suppressing motion-heavy wavefront effects.

---

## Branching & Deployment Strategy

- **`develop`**: The primary working and feature integration branch. Pull requests target `develop` and trigger the CI workflow (`.github/workflows/ci.yml`).
- **`main`**: The production source branch. Pushes or merges to `main` trigger the GitHub Actions deployment workflow (`.github/workflows/deploy.yml`), which builds and deploys artifacts directly to GitHub Pages.
- **`gh-pages`**: Historic/static artifact branch containing built distributions.

---

## Contributor & Operating Contract

All modifications to this repository are governed by [`AGENTS.md`](./AGENTS.md) and the loop-based operating model:

1. **Claim Safety**: No unverified claims regarding seniority, business metrics, or skills. Every statement must link to verified sources in [`docs/research/evidence-ledger.md`](./docs/research/evidence-ledger.md).
2. **Repo Privacy**: This repository is public. Private career materials, personal phone numbers not authorized for public release, internal company metrics, and secrets must never be committed.
3. **Decision Recording**: Significant architectural shifts or design updates are recorded in the append-only [`docs/decision-log.md`](./docs/decision-log.md).

For current roadmap progress and active milestone gates, consult [`docs/project-status.md`](./docs/project-status.md).

---

## License

Private / Proprietary. All rights reserved. Kashif Rezwi © 2026.