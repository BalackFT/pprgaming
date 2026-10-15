# PPRGaming (pprgaming.com)
Astro static site. New post = new Markdown file in `src/content/posts/` (copy an existing one for frontmatter). Config/monetization IDs: `src/site.js`. See DEPLOY.md and MONETIZATION.md.

## Adding an image to a post

1. Use an official image only: RSI Comm-Link/press images for Star Citizen (credit `Image: Cloud Imperium Games`), or the publisher's press kit / store key art for other games (credit the publisher). Never use news-site or fan art. If nothing official fits, use an original generated illustration.
2. Convert it to WebP, max 1600px wide, and save it as `public/images/posts/<post-slug>.webp`:
   ```bash
   node -e 'require("sharp")("in.jpg").resize({width:1600,withoutEnlargement:true}).webp({quality:80}).toFile("public/images/posts/my-post.webp")'
   ```
3. Add to the post frontmatter:
   ```yaml
   image: "/images/posts/my-post.webp"
   imageAlt: "Short description of the image"
   imageCredit: "Image: Cloud Imperium Games"
   ```
All three fields are optional. Posts without an image get a gradient placeholder automatically. The image is used for the article hero, the card thumbnails, and og:image/twitter:image.

## Screenshot of the Day

Shots live in `src/content/shots/` as YAML files (one per shot). The newest `date` shows in the Star Citizen Hub on the homepage; all shots appear newest-first at `/screenshots/`.

**Community shot from X (embedded, never re-hosted):** create `src/content/shots/YYYY-MM-DD-handle.yaml`:
```yaml
date: 2026-10-14
title: "Acid and Base MK V"
game: Star Citizen
source: x
url: https://x.com/LensNationX/status/2110161074398118212
handle: LensNationX
```

**Your own shot:** put the image in `public/images/shots/` (JPG/WebP, ~1920px wide, under ~500 KB), then:
```yaml
date: 2026-10-16
title: "Sunrise over Hurston"
game: Star Citizen
source: own
image: /images/shots/2026-10-16-hurston.jpg
alt: "A Constellation hovering above Lorville at sunrise"
credit: "@PPRGamers"
```
Commit and push to `main`; GitHub Actions redeploys automatically.
