import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | velvet-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom('.velvet-textarea').exists();
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom('textarea').hasClass('velvet-textarea-primary');

    await render(hbs`
      <VelvetTextarea @color="red" />
    `);

    assert.dom('textarea').hasClass('velvet-textarea-red');
  });

  test('it renders a disabled textarea', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert
      .dom('textarea')
      .doesNotHaveAttribute('disabled')
      .doesNotHaveClass('velvet-textarea-disabled');

    await render(hbs`
      <VelvetTextarea @isDisabled={{true}} />
    `);

    assert
      .dom('textarea')
      .hasAttribute('disabled')
      .hasClass('velvet-textarea-disabled');
  });

  test('it renders an invalid textarea', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom('textarea').doesNotHaveClass('velvet-textarea-invalid');

    await render(hbs`
      <VelvetTextarea @isInvalid={{true}} />
    `);

    assert.dom('textarea').hasClass('velvet-textarea-invalid');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      <VelvetTextarea @onChange={{this.onChange}} />
    `);

    await typeIn('textarea', 'foo');

    assert.verifySteps(['foo']);
  });

  test('it handles `input` events', async function (assert) {
    this.onInput = (value) => assert.step(value);

    await render(hbs`
      <VelvetTextarea @onInput={{this.onInput}} />
    `);

    await typeIn('textarea', 'foo');

    assert.verifySteps(['f', 'fo', 'foo']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom('textarea').hasClass('velvet-textarea-md');

    await render(hbs`
      <VelvetTextarea @size="lg" />
    `);

    assert.dom('textarea').hasClass('velvet-textarea-lg');
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom('textarea').hasNoValue();

    await render(hbs`
      <VelvetTextarea @value="foo" />
    `);

    assert.dom('textarea').hasValue('foo');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetTextarea class="mr-2" />
    `);

    assert.dom('textarea').hasClass('mr-2');
  });
});
