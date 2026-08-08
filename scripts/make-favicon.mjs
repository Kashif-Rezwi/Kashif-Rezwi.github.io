/**
 * R5-8a (T2) — Build-time portrait favicon generator (circle variant).
 *
 * Generates browser favicon assets from the canonical portrait
 * (`src/assets/portrait.jpg`) so the favicon is a **circle** with a thick
 * accent border — matching the Hero's accent color (#6495ed).
 *
 *   Layer 0 (back):  solid --color-accent circle (fills the canvas).
 *   Layer 1 (front): portrait clipped to a centered circle, inset 16px
 *                    from each edge so the border shows through.
 *
 * Output (in `public/`):
 *   - favicon.ico                 (16 + 32, legacy)
 *   - apple-touch-icon.png        (180 × 180)
 *   - android-chrome-192x192.png  (192 × 192)
 *   - android-chrome-512x512.png  (512 × 512)
 *
 * Build-time only. Uses vendored `sharp`. NO new runtime dep (S-12).
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

// --color-accent (#6495ed).
const ACCENT_RGB = [100, 149, 237];
const BORDER = 16; // 16px border on all sides

const SIZE = 512;
const portraitSrc = resolve(process.cwd(), 'src/assets/portrait.jpg');
const outDir = resolve(process.cwd(), 'public');

function circleSvg(w, h, cx, cy, r, fill) {
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/></svg>`;
}

/** Render one favicon frame at `size` with a `border`-wide accent circle. */
async function makeOne(src, size, border) {
  const portraitSize = size - 2 * border;
  const radius = size / 2;
  const cx = size / 2;
  const cy = size / 2;

  // Layer 0: solid accent circle that fills the entire canvas.
  const borderBuf = Buffer.from(circleSvg(size, size, cx, cy, radius, `rgb(${ACCENT_RGB.join(',')})`));

  // Layer 1: portrait clipped to a centered circle.
  // sharp can't use raw SVG as a composite mask, so rasterize it to PNG first
  // at the SAME size as the portrait (portraitSize × portraitSize).
  const maskPng = await sharp(Buffer.from(circleSvg(portraitSize, portraitSize, portraitSize / 2, portraitSize / 2, portraitSize / 2, 'white')))
    .png()
    .toBuffer();

  const portrait = await sharp(src)
    .resize(portraitSize, portraitSize, { fit: 'cover' })
    .ensureAlpha(1)
    .composite([{ input: maskPng, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Composite: border behind, portrait centered on top.
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: borderBuf, blend: 'over', left: 0, top: 0 },
      { input: portrait, blend: 'over', left: border, top: border },
    ])
    .png()
    .toBuffer();
}

function buildPngIco(pngBuffers) {
  const frames = pngBuffers.map((buf) => {
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(w <= 256 ? w : 0, 0);
    entry.writeUInt8(h <= 256 ? h : 0, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    return { buf, entry };
  });
  const imageStart = 6 + 16 * frames.length;
  let offset = imageStart;
  const chunks = [
    Buffer.of(0x00, 0x00, 0x01, 0x00, frames.length & 0xff, (frames.length >> 8) & 0xff),
  ];
  for (const f of frames) {
    f.entry.writeUInt32LE(offset, 12);
    offset += f.buf.length;
    chunks.push(f.entry);
  }
  for (const f of frames) chunks.push(f.buf);
  return Buffer.concat(chunks);
}

async function makeFavicon() {
  // 512 canvas: 16px border (portrait is 480×480 centered).
  const hero512 = await makeOne(portraitSrc, SIZE, BORDER);

  // Downscale for manifest PNGs.
  for (const [name, size] of [
    ['apple-touch-icon.png', 180],
    ['android-chrome-192x192.png', 192],
    ['android-chrome-512x512.png', SIZE],
  ]) {
    const buf = await sharp(hero512)
      .resize(size, size, { fit: 'contain' })
      .ensureAlpha(1)
      .png()
      .toBuffer();
    writeFileSync(resolve(outDir, name), buf);
    console.log(`T2  wrote ${name} (${size}x${size})`);
  }

  // favicon.ico: native 16 + 32 with proportional borders (1px and 2px).
  const f16 = await makeOne(portraitSrc, 16, Math.max(1, Math.round(16 * BORDER / SIZE)));
  const f32 = await makeOne(portraitSrc, 32, Math.max(2, Math.round(32 * BORDER / SIZE)));
  writeFileSync(resolve(outDir, 'favicon.ico'), buildPngIco([f16, f32]));
  console.log('T2  wrote favicon.ico (16 + 32)');

  console.log('T2  favicon generation complete.');
}

makeFavicon().catch((e) => { console.error('T2  FAILED:', e); process.exit(1); });
