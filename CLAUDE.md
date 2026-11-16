# HoopView agent rules

Global rules in `~/.claude/CLAUDE.md` apply. Repo specifics:

- The app is one file, `hoopview.html`, with inline CSS and JavaScript, no build step and no external library. A change keeps it that way
- The live backlog is the GitHub Project that `docs/backlog-config.json` names. File and groom it with the `backlog` skill
- `bash scripts/validate.sh` is the one validation command: OliverCode's commit gates over every tracked file, the structure contract and the parser tests. The fleet pre-commit hook runs it through `.githooks/pre-commit.local`, and `olivercode sync-hooks` keeps the hooks current
- Stories closed as not planned stay closed unless the owner reopens them: EXP, JEF, VP3, HUS and XXX parsers, zip browsing, fabric rendering, quality checks, format conversion, USB copy and the mm and inch toggle
- Audit status: fresh-reader pass on 2026-11-16 (the epic named in the audit ledger); earlier passes finished on 2026-11-12 after the removal of favorites (epic #67). The log for every repo is `.claude-optimization/state/current_state.md` in OliverCode
