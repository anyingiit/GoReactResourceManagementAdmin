#!/usr/bin/env node
// This repository had no test of any kind before this workflow: package.json
// only declares dev/build/lint/preview scripts, no test runner is installed,
// and no file anywhere asserts anything. A step that only echoed the
// starter's placeholder would go green whether or not `yarn build` produced
// a working bundle, so this checks what that build is actually supposed to
// leave behind: an index.html that references a real, non-empty JavaScript
// bundle under dist/assets, which is what Vite writes on a successful build
// (vite.config.ts enables sourcemap: true but sets no custom outDir or
// base, so the defaults -- dist/ and absolute /assets/... paths -- apply).

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import assert from 'node:assert/strict'

const distDir = 'dist'
const indexHtml = join(distDir, 'index.html')

assert.ok(
  existsSync(indexHtml),
  `expected ${indexHtml} to exist after \`yarn build\` -- the app was not built`,
)

const html = readFileSync(indexHtml, 'utf8')
assert.ok(html.trim().length > 0, `${indexHtml} exists but is empty`)
assert.ok(
  html.includes('type="module"'),
  `${indexHtml} does not load a module script -- expected the Vite-built entry point`,
)
assert.ok(
  /src="\/assets\/[^"]+\.js"/.test(html),
  `${indexHtml} does not reference a built bundle under /assets/`,
)

const assetsDir = join(distDir, 'assets')
assert.ok(
  existsSync(assetsDir),
  `expected ${assetsDir} to exist after \`yarn build\``,
)

const jsBundles = readdirSync(assetsDir).filter((name) => name.endsWith('.js'))
assert.ok(jsBundles.length > 0, `${assetsDir} contains no .js bundle`)

for (const bundle of jsBundles) {
  const size = statSync(join(assetsDir, bundle)).size
  assert.ok(size > 0, `${bundle} is empty`)
}

console.log(
  `smoke test passed: ${indexHtml} references a built module bundle, and ` +
    `${assetsDir} contains ${jsBundles.length} non-empty .js file(s)`,
)
