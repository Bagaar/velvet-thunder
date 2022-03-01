import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const GROUP_SELECTOR = '.velvet-radio-group';
const RADIO_SELECTOR = 'input[type="radio"]';

module('Integration | Component | velvet-radio-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup />
    `);

    assert.dom(GROUP_SELECTOR).exists();
  });

  test('it renders the correct color for each radio', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-primary').exists({ count: 2 });

    await render(hbs`
      <VelvetRadioGroup @color="rose" as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-rose').exists({ count: 2 });
  });

  test('it renders disabled radios', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-disabled').doesNotExist();
    assert.dom(`${RADIO_SELECTOR}:disabled`).doesNotExist();

    await render(hbs`
      <VelvetRadioGroup @isDisabled={{true}} as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-disabled').exists({ count: 2 });
    assert.dom(`${RADIO_SELECTOR}:disabled`).exists({ count: 2 });
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      <VelvetRadioGroup @onChange={{this.onChange}} as |group|>
        <group.Radio @value="first" />
        <group.Radio @value="second" />
      </VelvetRadioGroup>
    `);

    const radio = this.element.querySelectorAll(RADIO_SELECTOR);

    await click(radio[0]);
    await click(radio[1]);

    assert.verifySteps(['first', 'second']);
  });

  test('it renders the correct size for each radio', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-md').exists({ count: 2 });

    await render(hbs`
      <VelvetRadioGroup @size="lg" as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom('.velvet-radio-lg').exists({ count: 2 });
  });

  test('it renders the correct name for each radio', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup @name="foo" as |group|>
        <group.Radio />
        <group.Radio />
      </VelvetRadioGroup>
    `);

    assert.dom(`${RADIO_SELECTOR}[name="foo"]`).exists({ count: 2 });
  });

  test('it checks the correct radio', async function (assert) {
    let radio;

    await render(hbs`
      <VelvetRadioGroup as |group|>
        <group.Radio @value="first" />
        <group.Radio @value="second" />
      </VelvetRadioGroup>
    `);

    radio = this.element.querySelectorAll(RADIO_SELECTOR);

    assert.dom(radio[0]).isNotChecked();
    assert.dom(radio[1]).isNotChecked();

    await render(hbs`
      <VelvetRadioGroup @value="second" as |group|>
        <group.Radio @value="first" />
        <group.Radio @value="second" />
      </VelvetRadioGroup>
    `);

    radio = this.element.querySelectorAll(RADIO_SELECTOR);

    assert.dom(radio[0]).isNotChecked();
    assert.dom(radio[1]).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetRadioGroup class="space-x-2" />
    `);

    assert.dom(GROUP_SELECTOR).hasClass('space-x-2');
  });
});
