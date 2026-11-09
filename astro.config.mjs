import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// <lastmod> for every sitemap URL, from real content dates (never the build time).
const SITE_URL = 'https://pprgaming.com';
const POSTS_DIR = 'src/content/posts';
const SHOTS_DIR = 'src/content/shots';

const frontmatter = (file) => (fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
const field = (fm, key) => { const m = fm.match(new RegExp(`^${key}:\\s*["']?([^"'\\n#]+?)["']?\\s*$`, 'm')); return m ? m[1].trim() : null; };
const toDate = (v) => { if (!v) return null; const d = new Date(v); return isNaN(d) ? null : d; };

// Story slug -> { date, category }
const posts = new Map();
for (const f of fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f))) {
  const fm = frontmatter(path.join(POSTS_DIR, f));
  if (/^draft:\s*true/m.test(fm)) continue;
  const date = toDate(field(fm, 'updatedDate')) || toDate(field(fm, 'pubDate')) || toDate(field(fm, 'date'));
  if (date) posts.set(f.replace(/\.mdx?$/, ''), { date, category: field(fm, 'category') });
}
const newest = (dates) => dates.filter(Boolean).reduce((a, b) => (!a || b > a ? b : a), null);
const allPosts = [...posts.values()];
const newestPost = newest(allPosts.map((p) => p.date));
const newestShot = newest(fs.readdirSync(SHOTS_DIR).filter((f) => /\.ya?ml$/.test(f))
  .map((f) => toDate(field(fs.readFileSync(path.join(SHOTS_DIR, f), 'utf8'), 'date'))));

// Static pages: last git commit date of the page file (skipped on shallow clones, where it would be wrong).
let gitOk = false;
try { gitOk = execSync('git rev-parse --is-shallow-repository', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() === 'false'; } catch {}
const gitDate = (...files) => {
  if (!gitOk) return null;
  try { return toDate(execSync(`git log -1 --format=%cI -- ${files.join(' ')}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()); } catch { return null; }
};
const STATIC = { about: ['src/pages/about.astro'], contact: ['src/pages/contact.astro'], privacy: ['src/pages/privacy.astro'],
  terms: ['src/pages/terms.astro'], support: ['src/pages/support.astro'], editorial: ['src/pages/editorial.astro'],
  gear: ['src/pages/gear.astro', 'src/gear.js'] };

function lastmodFor(url) {
  const p = new URL(url).pathname;
  let m;
  if ((m = p.match(/^\/news\/([^/]+)\/$/))) return posts.get(m[1])?.date ?? null;
  if (p === '/') return newest([newestPost, newestShot]);
  if (p === '/news/') return newestPost;
  if ((m = p.match(/^\/category\/([^/]+)\/$/))) return newest(allPosts.filter((x) => x.category === m[1]).map((x) => x.date));
  if (p === '/screenshots/') return newestShot;
  if ((m = p.match(/^\/([^/]+)\/$/)) && STATIC[m[1]]) return gitDate(...STATIC[m[1]]);
  return null;
}

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({
    serialize(item) {
      const d = lastmodFor(item.url);
      if (d) item.lastmod = d.toISOString(); else delete item.lastmod;
      return item;
    },
  })],
});
