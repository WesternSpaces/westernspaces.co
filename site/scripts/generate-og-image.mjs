import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;

// Bark background color
const bark = { r: 61, g: 43, b: 31 };

// Create bark-colored base
const base = sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: { ...bark, alpha: 255 },
  },
});

// Load and prepare the hero image as a subtle background texture
const heroPath = path.join(root, 'src/assets/images/hero/foliage.jpg');
const heroBuffer = await sharp(heroPath)
  .resize(WIDTH, HEIGHT, { fit: 'cover' })
  .ensureAlpha()
  .modulate({ brightness: 0.4 })
  .toBuffer();

// Load the logo
const logoPath = path.join(root, 'src/assets/images/logo/ws-logo.png');
const logoBuffer = await sharp(logoPath)
  .resize(80, 70, { fit: 'inside' })
  .toBuffer();

// Create SVG text overlay
const svgText = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700');
    .title { fill: #FAF6F0; font-family: 'Georgia', serif; font-size: 64px; font-weight: 700; }
    .subtitle { fill: #C4956A; font-family: 'Segoe UI', 'Helvetica Neue', sans-serif; font-size: 22px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }
    .tagline { fill: #FAF6F0; font-family: 'Segoe UI', 'Helvetica Neue', sans-serif; font-size: 26px; opacity: 0.85; }
    .divider { fill: #C8A24D; }
  </style>
  <text class="subtitle" x="100" y="240">HOUSING RESEARCH &amp; COMMUNITY PLANNING</text>
  <text class="title" x="100" y="320">Western Spaces</text>
  <rect class="divider" x="100" y="350" width="120" height="3" rx="1.5" />
  <text class="tagline" x="100" y="400">The data behind better housing policy</text>
</svg>`;

const svgBuffer = Buffer.from(svgText);

const outputPath = path.join(root, 'public/og-default.jpg');

await base
  .composite([
    { input: heroBuffer, blend: 'over' },
    { input: svgBuffer, blend: 'over' },
    { input: logoBuffer, top: 50, left: 100, blend: 'over' },
  ])
  .jpeg({ quality: 90 })
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);
