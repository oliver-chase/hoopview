# Repo structure contract

Status: Active

## Canonical contract sources

1. `OliverCode/docs/RULES.md` ("Project structure")
2. `OliverCode/docs/CONTRACT.md`

## Profile

This repo uses the GitHub Project backlog profile. Its backlog is the GitHub Project named
in `docs/backlog-config.json`, read and written by the `backlog` skill.

## Required structure

1. Root docs:
- `README.md`
- `CLAUDE.md`
- `docs/repo-structure-contract.md`
2. Backlog:
- `docs/backlog-config.json` — the `backlog` skill's config for this repo's Project

## Backlog and evidence paths

1. Active backlog source: the GitHub Project named in `docs/backlog-config.json`
2. Story catalog source: the GitHub Project's issue list
3. Acceptance test matrix source: `N/A (each issue carries AC/test evidence directly)`

## Branches

This repo works on `main`.

## Enforcement

1. `bash scripts/validate.sh` runs OliverCode's commit gates over every tracked file, `scripts/check-structure-contract.mjs` and the parser tests with the Node built-in runner
2. `.githooks/pre-commit` is the fleet hook that `olivercode sync-hooks` installs. It runs the gates over the staged files, then `.githooks/pre-commit.local`, which runs `scripts/validate.sh`
3. `.githooks/commit-msg` requires a story number, and `.githooks/pre-push` refuses a history rewrite and scans pushed commits for secrets
4. `docs/SIZE-BASELINE.json` holds the size ratchet's baseline, and `docs/PII-GATE.json` and `docs/IDENTIFIER-GATE.json` list the files those gates skip, each with a reason

## Contract exceptions

None.
- learning: a local viewer tool with no usage data. Expires 2027-02-01
