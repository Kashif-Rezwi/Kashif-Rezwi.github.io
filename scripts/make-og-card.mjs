// Generates a dedicated Open Graph card (1200x630 PNG) for the site.
// Claim-safe: name + headline (CL-01) + site URL (factual) + direction (CL-18).
// Run: node scripts/make-og-card.mjs   (re-run if copy changes)

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'og.png');

// "Calm Engineering Ledger" identity: paper bg, single cornflower accent bar,
// near-black ink, mono site URL. Text uses web-safe fonts so it renders via
// sharp/libvips without bundling fonts.
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f5f5f5"/>
  <rect x="0" y="0" width="16" height="630" fill="#6495ed"/>
  <text x="96" y="246" font-family="Helvetica, Arial, sans-serif" font-size="98" font-weight="700" fill="#1f1f1f">Kashif Rezwi</text>
  <text x="96" y="322" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="600" fill="#4f4f4f">Frontend-focused Full Stack Engineer</text>
  <text x="96" y="540" font-family="Menlo, Consolas, monospace" font-size="28" fill="#3862c0">kashif-rezwi.github.io</text>
  <text x="96" y="582" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#4f4f4f">AI products \u00b7 developer tools \u00b7 workflow automation</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);

// Verify text actually rendered (libvips font availability can vary). Sample a
// band of pixels across the headline row; if it is entirely the background
// color, text did not render and we warn.
const { data, info } = await sharp(outPath)
  .resize(600, 315) // sample smaller for speed
  .raw()
  .toBuffer({ resolveWithObject: true });

let darkPixels = 0;
for (let y = 110; y < 140; y++) {
  for (let x = 48; x < 540; x++) {
    const i = (y * info.width + x) * info.channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // "dark" = noticeably below paper (#f5f5f5)
    if (r < 180 && g < 180 && b < 180) darkPixels++;
  }
}
console.log(`og card written -> ${outPath}`);
console.log(`headline-row dark pixels (sampled): ${darkPixels}${darkPixels > 50 ? ' (text rendered OK)' : ' (WARNING: text may not have rendered)'}`);