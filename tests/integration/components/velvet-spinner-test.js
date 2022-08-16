import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-spinner';

module('Integration | Component | velvet-spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetSpinner />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetSpinner />
    `);

    assert.dom(SELECTOR).hasClass('velvet-spinner-md');

    await render(hbs`
      <VelvetSpinner @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-spinner-lg');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetSpinner class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
