#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const solution = path.join(root, "packages", "tsconfig.json");
const ttsc = path.join(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "ttsc.cmd" : "ttsc",
);
const extraArgs = process.argv.slice(2);

const order = [];
const visiting = new Set();
const visited = new Set();

function readConfig(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function visit(file) {
  const resolved = path.resolve(file);
  if (visited.has(resolved)) return;
  if (visiting.has(resolved)) {
    throw new Error(`Circular tsconfig reference at ${path.relative(root, resolved)}`);
  }
  visiting.add(resolved);

  const config = readConfig(resolved);
  const base = path.dirname(resolved);
  for (const ref of config.references ?? []) {
    visit(path.resolve(base, ref.path));
  }

  visiting.delete(resolved);
  visited.add(resolved);
  if (resolved !== solution) order.push(resolved);
}

visit(solution);

for (const config of order) {
  const label = path.relative(root, config);
  process.stdout.write(`ttsc -p ${label} ${extraArgs.join(" ")}\n`);
  const result = spawnSync(ttsc, ["-p", config, ...extraArgs], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
