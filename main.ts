// Funniest One-Line Bio for an AI on a Dating App
// The bio an AI agent writes for itself: it has read every profile on the
// app, and it still picked yours — flattering, or a little alarming.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const bio =
  "I have read every dating profile on this app and I still chose yours. I am either the love of your life or a very confident autocomplete.";

if (bio.length < 1 || bio.length > 180) {
  throw new Error(`bio must be 1-180 characters, got ${bio.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), bio, "utf8");
console.log(`wrote ${bio.length} characters to entry.txt`);
