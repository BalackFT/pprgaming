# Deploying pprgaming.com

Stack: Astro 4 static site → `npm run build` outputs `dist/`. Any static host works.

## Recommended: Cloudflare Pages (free)
Free unlimited bandwidth, fast CDN, free SSL, and Email Routing for contact@pprgaming.com and Web Analytics in the same dashboard.
1. Push this folder to a GitHub repo (e.g. `pprgaming-site`). `.gitignore` excludes node_modules/dist.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: Framework **Astro**, build command `npm run build`, output `dist`, env `NODE_VERSION=20`.
4. Deploy → you get `pprgaming-site.pages.dev`.
5. **Domain**: add pprgaming.com to Cloudflare (Add site → Free plan), then at your current registrar change the **nameservers** to the two Cloudflare gives you (propagation takes minutes to 24h). Then Pages project → Custom domains → add `pprgaming.com` and `www.pprgaming.com`. DNS and SSL are configured automatically. Add a redirect rule www → apex.
   - If you'd rather keep DNS at the registrar: add `CNAME www → pprgaming-site.pages.dev`, and for the apex use ALIAS/ANAME/CNAME-flattening if supported (apex is easiest with Cloudflare nameservers).
6. Every `git push` to main triggers a rebuild, so daily posts go live automatically.

## Alternative: Netlify
New site from Git → build `npm run build`, publish `dist`. Domain: Domain management → add pprgaming.com; either use Netlify DNS (change nameservers) or set `A @ 75.2.60.5` and `CNAME www → <site>.netlify.app`. Free tier has bandwidth limits (enough to start).

## Alternative: GitHub Pages
Use the official Astro GitHub Action (`withastro/action`). Settings → Pages → Source: GitHub Actions. DNS: `A @` → 185.199.108.153, .109.153, .110.153, .111.153; `CNAME www → <user>.github.io`; set custom domain in Settings and tick Enforce HTTPS.

## After going live
- Google Search Console: verify domain (DNS TXT), submit `https://pprgaming.com/sitemap-index.xml`.
- Set the AdSense ID and `public/ads.txt` once approved (see MONETIZATION.md).

## Local dev
`npm install` · `npm run dev` (http://localhost:4321) · `npm run build && npm run preview`
