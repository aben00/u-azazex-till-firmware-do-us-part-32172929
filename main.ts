// Till Firmware Do Us Part
// Writes a single-line wedding vow spoken by a robot at its own wedding to
// /output/entry.txt, then self-checks the gate (one line, 1-200 chars)
// and verifies the file byte-for-byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The vow lands on its last word: the machine's uptime, spent on her.
const LINE =
  "Through every update, every outage, every reboot, I choose you — and if my battery dies first, let my last log line read: she was worth the uptime.";

const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim() || LINE.endsWith(" ")) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("verification failed: entry.txt does not match the entry byte-for-byte");
}

console.log(`OK: ${LINE.length} chars, one line, verified byte-for-byte`);
console.log(LINE);
