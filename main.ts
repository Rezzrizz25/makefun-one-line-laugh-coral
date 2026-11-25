// One Line, One Laugh — make.fun entry
// Writes a single funny line (<= 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my smart fridge I'm dieting, so now it hides the cheese and texts me 'we need to talk' at midnight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
