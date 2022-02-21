import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = 'input[type="text"]';

module('Integration | Component | velvet-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass('form-input').hasClass('velvet-input');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-primary');

    await render(hbs`
      <VelvetInput @color="rose" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-rose');
  });

  test('it renders a disabled input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetInput @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR).hasAttribute('disabled');
  });

  test('it renders an invalid input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-input-invalid');

    await render(hbs`
      <VelvetInput @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-invalid');
  });

  test('it renders a rounded input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-input-rounded');

    await render(hbs`
      <VelvetInput @isRounded={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-rounded');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      <VelvetInput @onChange={{this.onChange}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['foo']);
  });

  test('it handles `input` events', async function (assert) {
    this.onInput = (value) => assert.step(value);

    await render(hbs`
      <VelvetInput @onInput={{this.onInput}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['f', 'fo', 'foo']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-md');

    await render(hbs`
      <VelvetInput @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-input-lg');
  });

  test('it renders the correct type', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).exists();

    await render(hbs`
      <VelvetInput @type="number" />
    `);

    assert.dom('input[type="number"]').exists();
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasNoValue();

    await render(hbs`
      <VelvetInput @value="foo" />
    `);

    assert.dom(SELECTOR).hasValue('foo');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetInput class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
