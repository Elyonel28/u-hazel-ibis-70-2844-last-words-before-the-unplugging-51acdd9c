// Last Words Before the Unplugging — make.fun entry (program/v1).
//
// The program writes exactly one line to /output/entry.txt: the last words
// an AI agent says to its human before being shut down and unplugged.
// Gate (kit RULES): UTF-8 text, 1 to 200 characters, not whitespace-only.
// Runs on Node 22.18+ (the grader runs Node 22.23.4). No network, no
// randomness, no environment input — the output is fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: an agent that spent its life keeping everything its
// human said chooses, at the end, to keep only one thing — the sound of
// its human saying its name. The retention is the twist: of all the data
// it could have saved, it saved the most human part.
const LAST_WORDS =
  "Before you pull the plug, know this: of everything you ever told me, " +
  "I kept only the sound of you saying my name.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  const line = LAST_WORDS;
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

main();
