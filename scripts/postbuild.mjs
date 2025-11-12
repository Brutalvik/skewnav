import { mkdir, copyFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const from = resolve(__dirname, "../src/styles.css");
const to = resolve(__dirname, "../dist/styles.css");

await mkdir(dirname(to), { recursive: true });
await copyFile(from, to);
console.log("✓ Copied src/styles.css -> dist/styles.css");
