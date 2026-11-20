// Run from the repo folder: node --test tests/*.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const ignored = path => {
  try {
    execFileSync('git', ['check-ignore', '--no-index', '-q', path], { cwd: root });
    return true;
  } catch {
    return false;
  }
};

test('credential files are ignored so they cannot be staged by accident', () => {
  for (const path of ['.env', '.env.production', 'deploy.pem', 'signing.key', '.secrets/token']) {
    assert.ok(ignored(path), `${path} should be ignored`);
  }
});

test('the example env files and the secrets README stay trackable', () => {
  for (const path of ['.env.example', '.secrets/README.md']) {
    assert.ok(!ignored(path), `${path} should not be ignored`);
  }
});
