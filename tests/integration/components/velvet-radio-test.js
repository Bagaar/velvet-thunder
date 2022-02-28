import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = {
  INPUT: 'input[type="radio"]',
  LABEL: 'label',
};

module('Integration | Component | velvet-radio', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio');
    assert.dom(SELECTOR.INPUT).hasClass('form-radio');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio-primary');

    await render(hbs`
      <VelvetRadio @color="rose" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio-rose');
  });

  test('it renders a disabled radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR.LABEL).doesNotHaveClass('velvet-radio-disabled');
    assert.dom(SELECTOR.INPUT).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetRadio @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio-disabled');
    assert.dom(SELECTOR.INPUT).hasAttribute('disabled');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (isChecked) => assert.step(String(isChecked));

    await render(hbs`
      <VelvetRadio @onChange={{this.onChange}} />
    `);

    await click(SELECTOR.INPUT);

    assert.verifySteps(['true']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio-md');

    await render(hbs`
      <VelvetRadio @size="lg" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-radio-lg');
  });

  test('it renders a checked radio', async function (assert) {
    await render(hbs`
      <VelvetRadio />
    `);

    assert.dom(SELECTOR.INPUT).isNotChecked();

    await render(hbs`
      <VelvetRadio @isChecked={{true}} />
    `);

    assert.dom(SELECTOR.INPUT).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetRadio id="foo" />
    `);

    assert.dom(SELECTOR.INPUT).hasAttribute('id', 'foo');
  });
});
