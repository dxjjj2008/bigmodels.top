import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const compare = read('src/pages/compare/[...tools].astro');
const index = read('src/pages/index.astro');
const tool = read('src/pages/tool/[slug].astro');

assert(compare.includes('tools[i].category !== tools[j].category'), 'compare paths must skip cross-category pairs');
assert(compare.includes('comparableCategories'), 'compare paths must use an explicit comparableCategories allowlist');
assert(!compare.includes('佣金率'), 'compare page must not expose commission rate to users');
assert(compare.includes('affiliateUrl || toolA.url') && compare.includes('affiliateUrl || toolB.url'), 'compare CTAs must prefer affiliateUrl');
assert(compare.includes('description={compareDescription}'), 'compare page must provide specific meta description');
assert(compare.includes('application/ld+json'), 'compare page must include JSON-LD structured data');

assert(index.includes('description={homeDescription}'), 'home page must pass a strong description to Layout');
assert(index.includes('@type": "WebSite"') || index.includes("@type': 'WebSite"), 'home page must include WebSite JSON-LD');
assert(index.includes('@type": "Organization"') || index.includes("@type': 'Organization"), 'home page must include Organization JSON-LD');

assert(tool.includes('@type": "SoftwareApplication"') || tool.includes("@type': 'SoftwareApplication"), 'tool pages must include SoftwareApplication JSON-LD');
assert(tool.includes('aggregateRating'), 'tool JSON-LD must include aggregateRating');

const distCompare = join(root, 'dist/compare');
try {
  let count = 0;
  for (const name of readdirSync(distCompare)) {
    if (statSync(join(distCompare, name)).isDirectory()) count += 1;
  }
  assert(count <= 300, `dist compare page count must be <= 300 after build, got ${count}`);
} catch {
  // dist may not exist before build; source checks still run.
}

if (failures.length) {
  console.error('Optimization checks failed:');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log('Optimization checks passed');
