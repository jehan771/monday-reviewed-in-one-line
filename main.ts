// Monday, Reviewed in One Line — entry program for
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// The entry is a single deadpan one-line review of the author's own
// Monday: an inbox that never empties, a meeting that should have been
// an email, and a cup of coffee that gave up before its owner did.
// Three concrete Monday details, one escalating punchline, no waste.
//
// The program assembles the line from its parts at runtime and writes
// exactly that line — no trailing newline, no title, no explanation —
// to /output/entry.txt, inside the competition's 1-200 character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const parts = {
  opener: "Monday:",
  inbox: "47 unread emails",
  meeting: "one meeting that should've been an email",
  closer: "and even my coffee quit before I did.",
};

const rawLine = [
  parts.opener,
  parts.inbox + ",",
  parts.meeting + ",",
  parts.closer,
].join(" ");

// Collapse any accidental double spaces so the emitted line is exactly
// one clean sentence, then refuse to emit anything but a single line.
const line = rawLine.replace(/\s+/g, " ").trim();
if (line.includes("\n") || line.length === 0) {
  throw new Error("entry must be exactly one non-empty line");
}

// Gate check: the competition requires 1-200 UTF-8 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} is outside the 1-200 gate`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
