import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = 'input[type="checkbox"]';

module('Integration | Component | velvet-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).hasClass('form-checkbox').hasClass('velvet-checkbox');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).hasClass('velvet-checkbox-primary');

    await render(hbs`
      <VelvetCheckbox @color="rose" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-checkbox-rose');
  });

  test('it renders a disabled checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetCheckbox @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR).hasAttribute('disabled');
  });

  test('it renders an invalid checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-checkbox-invalid');

    await render(hbs`
      <VelvetCheckbox @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-checkbox-invalid');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (isChecked) => assert.step(String(isChecked));

    await render(hbs`
      <VelvetCheckbox @onChange={{this.onChange}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['true']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).hasClass('velvet-checkbox-md');

    await render(hbs`
      <VelvetCheckbox @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-checkbox-lg');
  });

  test('it renders an indeterminate checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).isNotChecked().hasProperty('indeterminate', false);

    await render(hbs`
      <VelvetCheckbox @isIndeterminate={{true}} />
    `);

    assert.dom(SELECTOR).isNotChecked().hasProperty('indeterminate', true);
  });

  test('it renders a checked checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR).isNotChecked();

    await render(hbs`
      <VelvetCheckbox @isChecked={{true}} />
    `);

    assert.dom(SELECTOR).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetCheckbox class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
