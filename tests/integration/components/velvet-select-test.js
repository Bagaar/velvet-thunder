import { render, select } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

const SELECTOR = 'select';

module('Integration | Component | velvet-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).hasClass('form-select').hasClass('velvet-select');
  });

  test('it renders the correct color', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-primary');

    await render(hbs`
      <VelvetSelect @color="rose" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-rose');
  });

  test('it renders a disabled select', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetSelect @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR).hasAttribute('disabled');
  });

  test('it renders an invalid select', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-select-invalid');

    await render(hbs`
      <VelvetSelect @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-invalid');
  });

  test('it renders a rounded select', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-select-rounded');

    await render(hbs`
      <VelvetSelect @isRounded={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-rounded');
  });

  test('it handles `change` events', async function (assert) {
    this.onChange = (selected) => assert.step(selected);

    await render(hbs`
      <VelvetSelect @onChange={{this.onChange}} as |select|>
        <select.Option @value="first" />
        <select.Option @value="second" />
      </VelvetSelect>
    `);

    const secondOption = this.element.querySelectorAll('option')[1];

    await select(SELECTOR, secondOption.value);

    assert.verifySteps(['second']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetSelect />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-md');

    await render(hbs`
      <VelvetSelect @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-select-lg');
  });

  test('it selects the correct option', async function (assert) {
    await render(hbs`
      <VelvetSelect @selected="second" as |select|>
        <select.Option @value="first" />
        <select.Option @value="second" />
      </VelvetSelect>
    `);

    const secondOption = this.element.querySelectorAll('option')[1];

    assert.dom(SELECTOR).hasValue(secondOption.value);
  });

  test('it renders a placeholder', async function (assert) {
    await render(hbs`
      <VelvetSelect @placeholder="Select an Option" as |select|>
        <select.Option @value="first" />
        <select.Option @value="second" />
      </VelvetSelect>
    `);

    assert.dom('option').hasText('Select an Option').isDisabled();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetSelect class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
