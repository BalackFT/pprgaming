// GTA 6 launch-week hub helpers.
// A story belongs in the GTA 6 section if it carries a GTA tag or names the game in its headline.
const TAGS = new Set(['gta-6', 'gta 6', 'gta vi', 'grand theft auto vi', 'grand theft auto 6']);
const TITLE = /\b(gta\s?(6|vi)|grand theft auto\s?(6|vi))\b/i;
// Daily Roundups only mention GTA in passing, so they stay out of the hub.
export const isGta6 = (p) => !(p.slug ?? '').startsWith('daily-roundup') && p.data.tags.some((t) => TAGS.has(t.toLowerCase())) || TITLE.test(p.data.title);

// US unlock: 12:00 AM ET Thursday Nov 19, 2026 (EST, UTC-5) = 05:00 UTC.
export const GTA6_UNLOCK_US_ISO = '2026-11-19T05:00:00Z';

// Rockstar: GTA VI unlocks at midnight local time on Nov 19 on PS5 and Xbox Series X|S, country by country.
// ET column is converted from that (EST/UTC-5 for the US). US is one unlock for the whole country (midnight ET).
export const UNLOCK_TIMES = [
  { region: 'New Zealand',        local: '12:00 AM NZDT, Nov 19', et: '6:00 AM ET, Wed Nov 18' },
  { region: 'Australia (Melbourne)', local: '12:00 AM AEDT, Nov 19', et: '8:00 AM ET, Wed Nov 18' },
  { region: 'Japan, South Korea', local: '12:00 AM JST/KST, Nov 19', et: '10:00 AM ET, Wed Nov 18' },
  { region: 'India',              local: '12:00 AM IST, Nov 19', et: '1:30 PM ET, Wed Nov 18' },
  { region: 'Central Europe',     local: '12:00 AM CET, Nov 19', et: '6:00 PM ET, Wed Nov 18' },
  { region: 'UK, Ireland',        local: '12:00 AM GMT, Nov 19', et: '7:00 PM ET, Wed Nov 18' },
  { region: 'Brazil',             local: '12:00 AM BRT, Nov 19', et: '10:00 PM ET, Wed Nov 18' },
  { region: 'US and Canada (New York)', local: '12:00 AM EST, Nov 19', et: '12:00 AM ET, Thu Nov 19', us: true },
  { region: 'US West Coast',      local: '9:00 PM PST, Nov 18', et: '12:00 AM ET, Thu Nov 19', us: true },
  { region: 'Mexico',             local: '12:00 AM CST, Nov 19', et: '1:00 AM ET, Thu Nov 19' },
];
