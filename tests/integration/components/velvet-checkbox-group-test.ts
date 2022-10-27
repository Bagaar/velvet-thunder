import { click, render, TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

type VelvetCheckboxGroupValue = string[] | { [name: string]: boolean };

interface VelvetCheckboxGroupTestContext extends TestContext {
  onChange: (value: VelvetCheckboxGroupValue, event: Event) => void;
  value: VelvetCheckboxGroupValue;
}

const GROUP_SELECTOR = '.velvet-checkbox-group';
const CHECKBOX_SELECTOR = 'input[type="checkbox"]';

module('Integration | Component | velvet-checkbox-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetCheckboxGroup />
    `);

    assert.dom(GROUP_SELECTOR).exists();
  });

  test('it renders disabled checkboxes', async function (assert) {
    await render(hbs`
      <VelvetCheckboxGroup as |group|>
        <group.Checkbox />
        <group.Checkbox />
      </VelvetCheckboxGroup>
    `);

    assert.dom('.velvet-checkbox-group-disabled').doesNotExist();
    assert.dom('.velvet-checkbox-disabled').doesNotExist();
    assert.dom(`${CHECKBOX_SELECTOR}:disabled`).doesNotExist();

    await render(hbs`
      <VelvetCheckboxGroup @isDisabled={{true}} as |group|>
        <group.Checkbox />
        <group.Checkbox />
      </VelvetCheckboxGroup>
    `);

    assert.dom('.velvet-checkbox-group-disabled').exists();
    assert.dom('.velvet-checkbox-disabled').exists({ count: 2 });
    assert.dom(`${CHECKBOX_SELECTOR}:disabled`).exists({ count: 2 });
  });

  test('it handles `change` events', async function (this: VelvetCheckboxGroupTestContext, assert) {
    this.value = ['third'];

    this.onChange = (value) => this.set('value', value);

    await render<VelvetCheckboxGroupTestContext>(hbs`
      <VelvetCheckboxGroup
        @onChange={{this.onChange}}
        @value={{this.value}}
        as |group|
      >
        <group.Checkbox @name="first" />
        <group.Checkbox @name="second" />
        <group.Checkbox @name="third" />
      </VelvetCheckboxGroup>
    `);

    await click(`${CHECKBOX_SELECTOR}[name="first"]`);
    await click(`${CHECKBOX_SELECTOR}[name="second"]`);
    await click(`${CHECKBOX_SELECTOR}[name="third"]`);

    assert.deepEqual(this.value, ['first', 'second']);
  });

  test('it renders the correct size for each checkbox', async function (assert) {
    await render(hbs`
      <VelvetCheckboxGroup as |group|>
        <group.Checkbox />
        <group.Checkbox />
      </VelvetCheckboxGroup>
    `);

    assert.dom('.velvet-checkbox-group-md').exists();
    assert.dom('.velvet-checkbox-md').exists({ count: 2 });

    await render(hbs`
      <VelvetCheckboxGroup @size="lg" as |group|>
        <group.Checkbox />
        <group.Checkbox />
      </VelvetCheckboxGroup>
    `);

    assert.dom('.velvet-checkbox-group-lg').exists();
    assert.dom('.velvet-checkbox-lg').exists({ count: 2 });
  });

  test('it checks the correct checkboxes', async function (assert) {
    let checkbox;

    await render(hbs`
      <VelvetCheckboxGroup as |group|>
        <group.Checkbox @name="first" />
        <group.Checkbox @name="second" />
      </VelvetCheckboxGroup>
    `);

    checkbox = this.element.querySelectorAll(CHECKBOX_SELECTOR);

    assert.dom(checkbox[0]).isNotChecked();
    assert.dom(checkbox[1]).isNotChecked();

    await render(hbs`
      <VelvetCheckboxGroup @value={{array "first" "second"}} as |group|>
        <group.Checkbox @name="first" />
        <group.Checkbox @name="second" />
      </VelvetCheckboxGroup>
    `);

    checkbox = this.element.querySelectorAll(CHECKBOX_SELECTOR);

    assert.dom(checkbox[0]).isChecked();
    assert.dom(checkbox[1]).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetCheckboxGroup class="space-x-2" />
    `);

    assert.dom(GROUP_SELECTOR).hasClass('space-x-2');
  });

  module('@valueIsObject={{true}}', function () {
    test('it handles `change` events', async function (this: VelvetCheckboxGroupTestContext, assert) {
      this.value = { third: true };

      this.onChange = (value) => this.set('value', value);

      await render<VelvetCheckboxGroupTestContext>(hbs`
        <VelvetCheckboxGroup
          @onChange={{this.onChange}}
          @value={{this.value}}
          @valueIsObject={{true}}
          as |group|
        >
          <group.Checkbox @name="first" />
          <group.Checkbox @name="second" />
          <group.Checkbox @name="third" />
        </VelvetCheckboxGroup>
      `);

      await click(`${CHECKBOX_SELECTOR}[name="first"]`);
      await click(`${CHECKBOX_SELECTOR}[name="second"]`);
      await click(`${CHECKBOX_SELECTOR}[name="third"]`);

      assert.deepEqual(this.value, {
        first: true,
        second: true,
        third: false,
      });
    });

    test('it checks the correct checkboxes', async function (assert) {
      let checkbox;

      await render(hbs`
        <VelvetCheckboxGroup @valueIsObject={{true}} as |group|>
          <group.Checkbox @name="first" />
          <group.Checkbox @name="second" />
        </VelvetCheckboxGroup>
      `);

      checkbox = this.element.querySelectorAll(CHECKBOX_SELECTOR);

      assert.dom(checkbox[0]).isNotChecked();
      assert.dom(checkbox[1]).isNotChecked();

      await render(hbs`
        <VelvetCheckboxGroup
          @value={{hash first=true second=true}}
          @valueIsObject={{true}}
          as |group|
        >
          <group.Checkbox @name="first" />
          <group.Checkbox @name="second" />
        </VelvetCheckboxGroup>
      `);

      checkbox = this.element.querySelectorAll(CHECKBOX_SELECTOR);

      assert.dom(checkbox[0]).isChecked();
      assert.dom(checkbox[1]).isChecked();
    });
  });
});
