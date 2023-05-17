import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

const COMPONENTS = [
  'avatar',
  'button',
  'checkbox',
  'checkbox-group',
  'dropdown',
  'icon-button',
  'input',
  'progress',
  'radio',
  'radio-group',
  'select',
  'spinner',
  'tag',
  'textarea',
  'tooltip',
];

module('Acceptance | docs', function (hooks) {
  setupApplicationTest(hooks);

  COMPONENTS.forEach((component) => {
    const url = `/docs/components/${component}`;

    test(`visiting ${url}`, async function (assert) {
      await visit(url);
      await percySnapshot(component);

      assert.ok(true);
    });
  });
});
