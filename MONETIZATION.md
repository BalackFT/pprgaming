# PPRGaming Monetization Plan

Realistic expectation: a new news site earns little in months 1–6. Revenue follows traffic. A practical path is **referrals + support from day 1, then affiliates, then ads at ~3–6 months, then sponsorships once traffic is steady.**

## Phase 0 — Day 1 (no traffic needed)
| Stream | What James must do | Where it lives on the site |
|---|---|---|
| **RSI referral code** | Copy your code from RSI Account → Referral Program. New players who sign up with it get bonus starting UEC; you earn referral rewards (in-game items/ships) for recruits who make a purchase. It's in-game rewards, **not cash**. | `src/site.js` → `rsiReferral`; shown in the SC Hub, SC articles and /support |
| **Ko-fi / Patreon** | Create an account (Ko-fi is free with no platform fee on one-off tips; Patreon takes a percentage). Perks: Discord role, early patch digests, credits. | `src/site.js` → `supportUrl`; /support page |
| **Newsletter** | Sign up for Beehiiv, Buttondown or Kit (free tiers). Paste the form action URL into `src/components/Newsletter.astro`. | Homepage + every article |

## Phase 1 — Affiliates (as soon as content exists)
- **Amazon Associates**: apply with the live site and ~10+ original posts. You must make **3 qualifying sales within 180 days** or the account closes (reapply later). Use for headsets, HOTAS/joysticks (big with SC players), monitors, SSDs. Disclosure is already in the footer and privacy policy. Set `amazonTag` in `src/site.js`.
- **Game key stores**: Fanatical, Humble Bundle (Humble Partner), Green Man Gaming, and Eneba/Kinguin (grey-market; less reputable, so think twice). Most run through Impact or CJ networks. Use for "deals" and release posts.
- **Hardware / peripherals**: Corsair, Logitech, Thrustmaster, VKB/Virpil via their own programs or networks. A HOTAS guide for Star Citizen is a high-intent content idea.
- Mark affiliate links `rel="sponsored nofollow"`.

## Phase 2 — Display ads (Google AdSense)
**Requirements / eligibility**: you must be 18+; you need a site you own (pprgaming.com ✅) with substantial, **original** content (aim for 20–30+ quality posts, not rewrites); a privacy policy (✅ included, with the Google cookie wording), about and contact pages (✅); clear navigation; and a site that's live and indexed. In the EU/UK, a Google-certified CMP consent banner is required (AdSense offers one free).
**Steps**: 1) Deploy and add the site to Google Search Console. 2) Apply at adsense.google.com. 3) Put your `ca-pub-…` ID into `src/site.js` (`adsenseClient`) and uncomment/fix `public/ads.txt`. 4) Create ad units and use their slot IDs in the `<Ad unit="…">` components (home-top, home-bottom, article-top, article-bottom, sidebar, category). Approval usually takes days to a few weeks.
**Realistic income**: gaming RPMs are low (roughly $2–$8 per 1,000 pageviews). 10k monthly views is about $20–$80 a month.
**Later upgrade**: at ~10k sessions/month, look at Ezoic or Journey by Mediavine; Raptive needs much more traffic. These pay well above AdSense.

## Phase 3 — Sponsorships & partnerships
- Once you have ~5k+ newsletter subscribers or steady traffic: sponsored newsletter slots, peripheral reviews, indie game spotlights (always labeled "Sponsored").
- Star Citizen org/tool sponsors (community tools, org recruitment, 3rd-party sites). Check RSI's fan-site guidelines and trademark rules. Don't imply CIG endorsement.
- Apply to the **CIG/RSI Content Creator program** if you also do video. It can bring early access/assets.
- Build a simple media kit (traffic, audience, rates) at /support or a PDF.

## Growth levers (they drive all the above)
1. Daily SC digest posts (patch notes, hotfixes, events) — high search intent and loyal readers.
2. Evergreen guides (best starter ships, HOTAS setup, how to earn aUEC). These are the best for affiliates + AdSense.
3. Auto-post every article to X @PPRGaming; repost to r/starcitizen only where the rules allow.
4. Google Search Console + Bing Webmaster; sitemap is at /sitemap-index.xml.

## James's sign-up checklist
- [ ] RSI referral code → `src/site.js`
- [ ] Ko-fi and/or Patreon page → `supportUrl`
- [ ] Newsletter provider (Beehiiv/Buttondown/Kit) → Newsletter.astro
- [ ] contact@pprgaming.com mailbox (Cloudflare Email Routing is free)
- [ ] Google Search Console + Google Analytics (or privacy-friendly Cloudflare Web Analytics)
- [ ] Amazon Associates (after ~10 posts are live)
- [ ] Impact / CJ account → Fanatical, Humble, Green Man Gaming
- [ ] Google AdSense (after ~20–30 original posts, ideally 1–3 months live) + ads.txt
- [ ] Tax info (W-9) for AdSense/Amazon/Impact payouts
- [ ] Have privacy/terms templates reviewed

## How the day-to-day runs
Posts are Markdown files in `src/content/posts/` (frontmatter: title, description, date, category, starCitizen, sources). Daily publishing is: add a .md file, commit, push. The host rebuilds automatically.
