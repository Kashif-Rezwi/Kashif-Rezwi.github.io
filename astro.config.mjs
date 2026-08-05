// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Preview builds (companion repo `Kashif-Rezwi/portfolio-preview`) set
// PREVIEW_BASE='/portfolio-preview'; production uses the site root.
// See docs/engineering/branching-and-deploys.md (decision DL-008).
const base = process.env.PREVIEW_BASE || '/';

export default defineConfig({
  site: 'https://kashif-rezwi.github.io',
  base,
  vite: {
    // Tailwind v4 is a Vite plugin (CSS-first config via @theme in global.css)
    plugins: [tailwindcss()],
  },
});