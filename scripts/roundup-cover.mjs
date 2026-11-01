// Usage: node scripts/roundup-cover.mjs YYYY-MM-DD
// Writes public/images/posts/daily-roundup-YYYY-MM-DD-cover.webp (1200x630, no game art)
import sharp from 'sharp';
const d = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(d || '')) { console.error('Usage: node scripts/roundup-cover.mjs YYYY-MM-DD'); process.exit(1); }
const [y, m, day] = d.split('-').map(Number);
const label = new Date(Date.UTC(y, m - 1, day)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#070b14"/><stop offset="1" stop-color="#0f1a2e"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<rect x="80" y="150" width="120" height="8" fill="#2de2e6"/>
<text x="80" y="250" font-family="Inter, DejaVu Sans, sans-serif" font-size="96" font-weight="800" fill="#2de2e6">PPR<tspan fill="#fff">Gaming</tspan></text>
<text x="80" y="350" font-family="Inter, DejaVu Sans, sans-serif" font-size="80" font-weight="700" fill="#fff">Daily Roundup</text>
<text x="82" y="430" font-family="Inter, DejaVu Sans, sans-serif" font-size="44" fill="#8796b3">${label}</text>
<text x="82" y="560" font-family="Inter, DejaVu Sans, sans-serif" font-size="28" fill="#8796b3">pprgaming.com</text>
</svg>`;
const out = `public/images/posts/daily-roundup-${d}-cover.webp`;
await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(out);
console.log(out);
