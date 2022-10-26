import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-spinner';

module('Integration | Component | velvet-spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetSpinner />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetSpinner />
    `);

    assert.dom(SELECTOR).hasClass('velvet-spinner-md');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetSpinner @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-spinner-lg');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetSpinner class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
