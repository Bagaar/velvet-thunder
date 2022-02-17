import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = 'input[type="radio"]';

module('Integration | Component | velvet-radio', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).hasClass('form-radio').hasClass('velvet-radio');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).hasClass('velvet-radio-primary');

    await render(hbs`
      <VelvetRadio @color="red" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-radio-red');
  });

  test('it renders a disabled radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetRadio @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR).hasAttribute('disabled');
  });

  test('it renders an invalid radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-radio-invalid');

    await render(hbs`
      <VelvetRadio @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-radio-invalid');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (isChecked) => assert.step(String(isChecked));

    await render(hbs`
      <VelvetRadio @onChange={{this.onChange}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['true']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).hasClass('velvet-radio-md');

    await render(hbs`
      <VelvetRadio @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-radio-lg');
  });

  test('it renders an indeterminate radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).isNotChecked().hasProperty('indeterminate', false);

    await render(hbs`
      <VelvetRadio @isIndeterminate={{true}} />
    `);

    assert.dom(SELECTOR).isNotChecked().hasProperty('indeterminate', true);
  });

  test('it renders a checked radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR).isNotChecked();

    await render(hbs`
      <VelvetRadio @isChecked={{true}} />
    `);

    assert.dom(SELECTOR).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetRadio class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
