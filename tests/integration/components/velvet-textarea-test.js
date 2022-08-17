import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-textarea';

module('Integration | Component | velvet-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasClass('form-textarea').hasClass('velvet-textarea');
  });

  test('it renders a disabled textarea', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetTextarea @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR).hasAttribute('disabled');
  });

  test('it renders an invalid textarea', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-textarea-invalid');

    await render(hbs`
      <VelvetTextarea @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-invalid');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      <VelvetTextarea @onChange={{this.onChange}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['foo']);
  });

  test('it handles `input` events', async function (assert) {
    this.onInput = (value) => assert.step(value);

    await render(hbs`
      <VelvetTextarea @onInput={{this.onInput}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['f', 'fo', 'foo']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-md');

    await render(hbs`
      <VelvetTextarea @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-lg');
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasNoValue();

    await render(hbs`
      <VelvetTextarea @value="foo" />
    `);

    assert.dom(SELECTOR).hasValue('foo');
  });

  test('it renders the correct placeholder', async function (assert) {
    await render(hbs`
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('placeholder');

    await render(hbs`
      <VelvetTextarea @placeholder="foo" />
    `);

    assert.dom(SELECTOR).hasAttribute('placeholder', 'foo');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetTextarea class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
