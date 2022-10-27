import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-progress';

module('Integration | Component | velvet-progress', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).hasClass('velvet-progress-primary');

    await render(hbs`
      <VelvetProgress @color="rose" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-progress-rose');
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).hasClass('velvet-progress-md');

    await render(hbs`
      <VelvetProgress @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-progress-lg');
  });

  test('it renders the correct max value', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).hasAria('valuemax', '100');

    await render(hbs`
      <VelvetProgress @max={{50}} />
    `);

    assert.dom(SELECTOR).hasAria('valuemax', '50');
  });

  test('it renders the correct min value', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).hasAria('valuemin', '0');

    await render(hbs`
      <VelvetProgress @min={{50}} />
    `);

    assert.dom(SELECTOR).hasAria('valuemin', '50');
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).hasAria('valuenow', '0');

    await render(hbs`
      <VelvetProgress @value={{50}} />
    `);

    assert.dom(SELECTOR).hasAria('valuenow', '50');
  });

  test('it renders the correct text', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom(SELECTOR).doesNotHaveAria('valuetext');

    await render(hbs`
      <VelvetProgress @text="Uploading files..." />
    `);

    assert.dom(SELECTOR).hasAria('valuetext', 'Uploading files...');
  });

  test('it renders the correct progress', async function (assert) {
    await render(hbs`
      <VelvetProgress />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 0%;');

    await render(hbs`
      <VelvetProgress @value={{50}} />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 50%;');

    await render(hbs`
      <VelvetProgress @max={{50}} @min={{-50}} @value={{0}} />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 50%;');

    await render(hbs`
      <VelvetProgress @max={{150}} @min={{50}} @value={{100}} />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 50%;');

    await render(hbs`
      <VelvetProgress @value={{-50}} />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 0%;');

    await render(hbs`
      <VelvetProgress @value={{150}} />
    `);

    assert.dom('.velvet-progress-line').hasAttribute('style', 'width: 100%;');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetProgress class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
