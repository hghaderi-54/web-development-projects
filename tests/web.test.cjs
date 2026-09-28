const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

for (const relative of ['index.html', 'html-fundamentals/index.html', 'interactive-webpage/index.html']) {
  test(`${relative} has metadata and valid local assets`, () => {
    const file = path.join(root, relative);
    const html = fs.readFileSync(file, 'utf8');
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<h1[ >]/);
    assert.match(html, /name="viewport"/);
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = match[1];
      if (/^(https?:|#)/.test(target)) continue;
      assert.ok(fs.existsSync(path.resolve(path.dirname(file), target)), target);
    }
  });
}

test('button interaction updates the live status', () => {
  let onClick;
  const status = { textContent: '' };
  const document = { getElementById(id) {
    return id === 'greeting-button' ? { addEventListener(event, callback) {
      assert.equal(event, 'click'); onClick = callback;
    }} : status;
  }};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'interactive-webpage/main.js'), 'utf8'), { document });
  onClick();
  assert.match(status.textContent, /Welcome/);
});
