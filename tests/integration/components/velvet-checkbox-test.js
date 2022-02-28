import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = {
  INPUT: 'input[type="checkbox"]',
  LABEL: 'label',
};

module('Integration | Component | velvet-checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox');
    assert.dom(SELECTOR.INPUT).hasClass('form-checkbox');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox-primary');

    await render(hbs`
      <VelvetCheckbox @color="rose" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox-rose');
  });

  test('it renders a disabled checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR.LABEL).doesNotHaveClass('velvet-checkbox-disabled');
    assert.dom(SELECTOR.INPUT).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetCheckbox @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox-disabled');
    assert.dom(SELECTOR.INPUT).hasAttribute('disabled');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (isChecked) => assert.step(String(isChecked));

    await render(hbs`
      <VelvetCheckbox @onChange={{this.onChange}} />
    `);

    await click(SELECTOR.INPUT);

    assert.verifySteps(['true']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox-md');

    await render(hbs`
      <VelvetCheckbox @size="lg" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-checkbox-lg');
  });

  test('it renders an indeterminate checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert
      .dom(SELECTOR.INPUT)
      .isNotChecked()
      .hasProperty('indeterminate', false);

    await render(hbs`
      <VelvetCheckbox @isIndeterminate={{true}} />
    `);

    assert
      .dom(SELECTOR.INPUT)
      .isNotChecked()
      .hasProperty('indeterminate', true);
  });

  test('it renders a checked checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckbox />
    `);

    assert.dom(SELECTOR.INPUT).isNotChecked();

    await render(hbs`
      <VelvetCheckbox @isChecked={{true}} />
    `);

    assert.dom(SELECTOR.INPUT).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetCheckbox id="foo" />
    `);

    assert.dom(SELECTOR.INPUT).hasAttribute('id', 'foo');
  });
});
