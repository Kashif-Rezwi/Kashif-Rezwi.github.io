#!/usr/bin/env node
/**
 * R3-D / Option B — build-time GitHub contribution fetch.
 *
 * Queries GitHub's GraphQL `contributionsCollection` for the public
 * contribution calendar of the last ~52 weeks and writes a local snapshot to
 * src/data/github-contributions.json. The site renders LOCAL SVG from this
 * snapshot — no client-side API call, no token in the browser.
 *
 * Auth: requires a read-only Personal Access Token in env GITHUB_TOKEN
 * (fine-grained PAT, `read:user` scope is sufficient for public data). In CI it
 * is supplied as a repo secret; locally via a shell env var or .env.
 *
 * Failure-honest: on any error the script keeps the existing snapshot (if any)
 * and exits 0 so a stale-but-valid build still succeeds; if there is NO
 * snapshot at all it writes a `{ ok:false }` placeholder so the component can
 * degrade to a plain GitHub link instead of fake data.
 *
 * Usage:  GITHUB_TOKEN=ghp_xxx node scripts/fetch-github-contributions.mjs
 */

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'src', 'data');
const OUT_FILE = join(OUT_DIR, 'github-contributions.json');

// Minimal .env loader so local `npm run build` picks up the token without a
// manual export. `.env` is gitignored; in CI the secret is injected instead.
(function loadEnv() {
  const envPath = join(__dirname, '..', '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
})();

const USERNAME = process.env.GITHUB_USERNAME || 'Kashif-Rezwi';
// Accept either name; the repo secret is GH_CONTRIBUTIONS_TOKEN.
const TOKEN = process.env.GH_CONTRIBUTIONS_TOKEN || process.env.GITHUB_TOKEN;

const QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
              weekday
            }
          }
        }
      }
    }
  }
`;

async function readExisting() {
  try {
    return JSON.parse(await readFile(OUT_FILE, 'utf8'));
  } catch {
    return null;
  }
}

async function writeSnapshot(data) {
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

async function main() {
  const fetchedAt = new Date().toISOString();

  if (!TOKEN) {
    console.warn('[gh-contrib] No GITHUB_TOKEN in env.');
    const existing = await readExisting();
    if (existing?.ok) {
      console.warn('[gh-contrib] Keeping existing snapshot (fetched', existing.fetchedAt + ').');
      return;
    }
    await writeSnapshot({ ok: false, reason: 'no-token', fetchedAt });
    console.warn('[gh-contrib] Wrote no-token placeholder; component will render fallback link.');
    return;
  }

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'kashif-rezwi-portfolio-build',
      },
      body: JSON.stringify({ query: QUERY, variables: { login: USERNAME } }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error(json.errors.map((e) => e.message).join('; '));

    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) throw new Error('No contributionCalendar in response');

    const snapshot = {
      ok: true,
      username: USERNAME,
      fetchedAt,
      totalContributions: cal.totalContributions,
      weeks: cal.weeks.map((w) => ({
        days: w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: d.contributionLevel, // NONE | FIRST_QUARTILE | ... | FOURTH_QUARTILE
          weekday: d.weekday,
        })),
      })),
    };

    await writeSnapshot(snapshot);
    console.log(
      `[gh-contrib] Wrote snapshot: ${snapshot.totalContributions} contributions, ` +
        `${snapshot.weeks.length} weeks, fetched ${fetchedAt}`,
    );
  } catch (err) {
    console.error('[gh-contrib] Fetch failed:', err.message);
    const existing = await readExisting();
    if (existing?.ok) {
      console.error('[gh-contrib] Keeping previous snapshot (fetched', existing.fetchedAt + ').');
      return; // stale but valid — do not fail the build
    }
    await writeSnapshot({ ok: false, reason: 'fetch-failed', fetchedAt });
    console.error('[gh-contrib] No prior snapshot; wrote failure placeholder.');
  }
}

main();
