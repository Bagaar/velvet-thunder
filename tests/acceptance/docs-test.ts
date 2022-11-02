import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | docs', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /docs', async function (assert) {
    await visit('/docs');
    await percySnapshot('introduction');

    assert.ok(true);
  });

  test('visiting /docs/getting-started', async function (assert) {
    await visit('/docs/getting-started');
    await percySnapshot('getting-started');

    assert.ok(true);
  });

  [
    'avatar',
    'button',
    'checkbox',
    'checkbox-group',
    'icon-button',
    'input',
    'progress',
    'radio',
    'radio-group',
    'select',
    'spinner',
    'tag',
    'textarea',
  ].forEach((component) => {
    const url = `/docs/components/${component}`;

    test(`visiting ${url}`, async function (assert) {
      await visit(url);
      await percySnapshot(component);

      assert.ok(true);
    });
  });
});
