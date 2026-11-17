// Usage: node scripts/og-cards.mjs
// Writes the 1200x630 share cards X/Facebook can render (they ignore SVG):
//   public/og.png        site-wide default card
//   public/og-gta6.jpg   GTA 6 launch-week hub card (official Rockstar key art already used on the GTA stories; credit stays on-page)
import sharp from 'sharp';
const W = 1200, H = 630;
const F = 'Inter, DejaVu Sans, sans-serif';

// 1. Default PPRGaming card
const base = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#08070c"/><stop offset="1" stop-color="#14101c"/></linearGradient>
<radialGradient id="o" cx="0.8" cy="0.1" r="0.7"><stop offset="0" stop-color="#ff5c2b" stop-opacity="0.35"/><stop offset="1" stop-color="#ff5c2b" stop-opacity="0"/></radialGradient>
<radialGradient id="c" cx="0.05" cy="0.95" r="0.6"><stop offset="0" stop-color="#2de2e6" stop-opacity="0.22"/><stop offset="1" stop-color="#2de2e6" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#o)"/><rect width="${W}" height="${H}" fill="url(#c)"/>
<rect x="80" y="170" width="120" height="8" fill="#ff5c2b"/>
<text x="80" y="300" font-family="${F}" font-size="120" font-weight="800" fill="#ff8a3d">PPR<tspan fill="#ffffff">Gaming</tspan></text>
<text x="84" y="370" font-family="${F}" font-size="40" fill="#ebe6e0">Perpetual Realm Gaming</text>
<text x="84" y="430" font-family="${F}" font-size="32" fill="#9a9590">Star Citizen news and gaming news from the industry</text>
<text x="84" y="560" font-family="${F}" font-size="30" fill="#2de2e6">pprgaming.com</text>
</svg>`;
await sharp(Buffer.from(base)).png().toFile('public/og.png');

// 2. GTA 6 hub card: key art + hub-styled bottom band
const art = await sharp('public/images/posts/gta-6-launch-trailer-released.webp').resize(W, H, { fit: 'cover' }).toBuffer();
const band = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c0d18" stop-opacity="0"/><stop offset="0.45" stop-color="#0c0d18" stop-opacity="0.88"/><stop offset="1" stop-color="#0c0d18" stop-opacity="0.97"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff6fb5"/><stop offset="0.5" stop-color="#2de2e6"/><stop offset="1" stop-color="#ff8a3d"/></linearGradient></defs>
<rect x="0" y="${H-250}" width="${W}" height="250" fill="url(#b)"/>
<rect x="0" y="${H-6}" width="${W}" height="6" fill="url(#t)"/>
<text x="60" y="${H-150}" font-family="${F}" font-size="30" font-weight="700" letter-spacing="6" fill="#2de2e6">LAUNCH WEEK · THU NOV 19 · PS5 + XBOX SERIES X|S</text>
<text x="60" y="${H-70}" font-family="${F}" font-size="82" font-weight="800" fill="#ffffff">GTA 6 <tspan fill="#ff6fb5">Launch Week</tspan></text>
<text x="${W-60}" y="${H-28}" text-anchor="end" font-family="${F}" font-size="30" font-weight="800" fill="#ff8a3d">PPR<tspan fill="#ffffff">Gaming</tspan></text>
<text x="60" y="${H-28}" font-family="${F}" font-size="26" fill="#9a9590">Unlock times in ET · pre-load · editions</text>
</svg>`;
await sharp(art).composite([{ input: Buffer.from(band) }]).jpeg({ quality: 88 }).toFile('public/og-gta6.jpg');
console.log('public/og.png, public/og-gta6.jpg');
