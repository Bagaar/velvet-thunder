import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | velvet-spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <VelvetSpinner />
    `);

    assert.dom('.velvet-spinner').exists();
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetSpinner @color="primary" />
    `);

    assert.dom('.velvet-spinner').hasClass('velvet-spinner-primary');
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetSpinner />
    `);

    assert.dom('.velvet-spinner').hasClass('velvet-spinner-md');

    await render(hbs`
      <VelvetSpinner @size="lg" />
    `);

    assert.dom('.velvet-spinner').hasClass('velvet-spinner-lg');
  });

  test('...attributes works', async function (assert) {
    await render(hbs`
      <VelvetSpinner class="mr-2" />
    `);

    assert.dom('.velvet-spinner').hasClass('mr-2');
  });
});
