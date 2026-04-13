import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const clientRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(clientRoot, "dist");
const docsDir = join(clientRoot, "docs");

if (!existsSync(distDir)) {
	console.error("deploy: dist/ not found. Run build first.");
	process.exit(1);
}

rmSync(docsDir, { recursive: true, force: true });
cpSync(distDir, docsDir, { recursive: true });
console.log("deploy: copied dist/ -> docs/");
