#!/usr/bin/env node
// Numeric PNG comparison for design-parity's cross-check.
// Usage: node pixel-diff.mjs <expected.png> <actual.png> [--out diff.png] [--max-mismatch 2.0] [--threshold 0.12]
// Exit codes: 0 = mismatch <= max-mismatch, 1 = above it, 2 = usage error or dimension mismatch.
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

function fail(msg, code) {
  console.error(msg);
  process.exit(code);
}

const args = process.argv.slice(2);
const paths = [];
const opts = { out: null, maxMismatch: 2.0, threshold: 0.12 };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--out') opts.out = args[++i];
  else if (a === '--max-mismatch') opts.maxMismatch = parseFloat(args[++i]);
  else if (a === '--threshold') opts.threshold = parseFloat(args[++i]);
  else if (a.startsWith('--')) fail(`Unknown option: ${a}`, 2);
  else paths.push(a);
}
if (paths.length !== 2 || Number.isNaN(opts.maxMismatch) || Number.isNaN(opts.threshold)) {
  fail(
    'Usage: node pixel-diff.mjs <expected.png> <actual.png> [--out diff.png] [--max-mismatch 2.0] [--threshold 0.12]',
    2,
  );
}

const [expectedPath, actualPath] = paths;
let expected, actual;
try {
  expected = PNG.sync.read(fs.readFileSync(expectedPath));
  actual = PNG.sync.read(fs.readFileSync(actualPath));
} catch (e) {
  fail(`Could not read PNG: ${e.message}`, 2);
}

if (expected.width !== actual.width || expected.height !== actual.height) {
  fail(
    `Dimension mismatch: expected ${expected.width}x${expected.height}, actual ${actual.width}x${actual.height}. ` +
      'Re-capture at the exact frame size (viewport-exact, DPR 1) — this script does not resize.',
    2,
  );
}

const { width, height } = expected;
const diff = new PNG({ width, height });
const mismatched = pixelmatch(expected.data, actual.data, diff.data, width, height, {
  threshold: opts.threshold,
  includeAA: false,
});

const outPath = path.resolve(opts.out ?? `${actualPath}.diff.png`);
fs.writeFileSync(outPath, PNG.sync.write(diff));

const total = width * height;
const pct = (mismatched / total) * 100;
console.log(`mismatch=${pct.toFixed(2)}% pixels=${mismatched}/${total} diff=${outPath}`);
process.exit(pct <= opts.maxMismatch ? 0 : 1);
