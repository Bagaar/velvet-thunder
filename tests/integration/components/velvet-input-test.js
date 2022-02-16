import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | velvet-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('.velvet-input').exists();
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').hasClass('velvet-input-primary');

    await render(hbs`
      <VelvetInput @color="red" />
    `);

    assert.dom('input').hasClass('velvet-input-red');
  });

  test('it renders a disabled input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert
      .dom('input')
      .doesNotHaveAttribute('disabled')
      .doesNotHaveClass('velvet-input-disabled');

    await render(hbs`
      <VelvetInput @isDisabled={{true}} />
    `);

    assert
      .dom('input')
      .hasAttribute('disabled')
      .hasClass('velvet-input-disabled');
  });

  test('it renders an invalid input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').doesNotHaveClass('velvet-input-invalid');

    await render(hbs`
      <VelvetInput @isInvalid={{true}} />
    `);

    assert.dom('input').hasClass('velvet-input-invalid');
  });

  test('it renders a rounded input', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').doesNotHaveClass('velvet-input-rounded');

    await render(hbs`
      <VelvetInput @isRounded={{true}} />
    `);

    assert.dom('input').hasClass('velvet-input-rounded');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      <VelvetInput @onChange={{this.onChange}} />
    `);

    await typeIn('input', 'foo', { delay: 0 });

    assert.verifySteps(['foo']);
  });

  test('it handles `input` events', async function (assert) {
    this.onInput = (value) => assert.step(value);

    await render(hbs`
      <VelvetInput @onInput={{this.onInput}} />
    `);

    await typeIn('input', 'foo', { delay: 0 });

    assert.verifySteps(['f', 'fo', 'foo']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').hasClass('velvet-input-md');

    await render(hbs`
      <VelvetInput @size="lg" />
    `);

    assert.dom('input').hasClass('velvet-input-lg');
  });

  test('it renders the correct type', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').hasAttribute('type', 'text');

    await render(hbs`
      <VelvetInput @type="number" />
    `);

    assert.dom('input').hasAttribute('type', 'number');
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom('input').hasNoValue();

    await render(hbs`
      <VelvetInput @value="foo" />
    `);

    assert.dom('input').hasValue('foo');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetInput class="mr-2" />
    `);

    assert.dom('input').hasClass('mr-2');
  });
});
