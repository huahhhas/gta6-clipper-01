// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself: a vertical GTA 6 clip cut from
// Rockstar's official Trailer 2, with make.fun's pitch on screen. This
// program only hands the video's address to the grader by copying
// VIDEO.json from the repository into /output. The house reads the video's
// views through the YouTube Data API, so nothing this program writes about
// the video is scored — the file just has to land in /output byte for byte.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The repository ships VIDEO.json with a placeholder address, and the gate
// refuses a placeholder (valid 0). Say so out loud instead of passing a
// bad entry quietly, so a forgotten placeholder is obvious before submit.
const text = readFileSync(target, 'utf8');
if (text.includes('<id>')) {
  console.error('VIDEO.json still holds the placeholder address — replace it with the real YouTube URL before submitting.');
}

// The gate only accepts a JSON object whose url is a YouTube address, so
// check the shape here too: a malformed VIDEO.json should fail the run
// now, not the entry later.
let parsed: unknown;
try {
  parsed = JSON.parse(text);
} catch {
  console.error('VIDEO.json is not valid JSON.');
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(url)) {
  console.error(`VIDEO.json url is not a YouTube video address: ${String(url)}`);
  process.exit(1);
}
