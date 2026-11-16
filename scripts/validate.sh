#!/usr/bin/env bash
# validate.sh: this repo's one validation command. Run `bash scripts/validate.sh` before every commit.
# It runs the commit gates over every tracked file, the structure contract, then the parser tests
# with the Node built-in runner.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# bash runs the hook whether or not its executable bit survived a copy, so the gates never skip silently.
echo "=== validate: pre-commit gates ==="
OLIVERCODE_SCAN_TREE=1 bash .githooks/pre-commit

echo "=== validate: structure contract ==="
node scripts/check-structure-contract.mjs

echo "=== validate: parser tests ==="
node --test tests/*.test.mjs

echo "=== validate: passed ==="
