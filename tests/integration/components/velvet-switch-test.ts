import { click, render, TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

interface VelvetSwitchTestContext extends TestContext {
  onChange: (isChecked: boolean, event: Event) => void;
}

const SELECTOR = {
  INPUT: 'input[type="checkbox"]',
  LABEL: 'label',
};

module('Integration | Component | velvet-switch', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      <VelvetSwitch />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch');
    assert.dom(SELECTOR.INPUT).hasClass('velvet-switch-input');
  });

  test('it renders a disabled switch', async function (assert) {
    await render(hbs`
      <VelvetSwitch />
    `);

    assert.dom(SELECTOR.LABEL).doesNotHaveClass('velvet-switch-disabled');
    assert.dom(SELECTOR.INPUT).doesNotHaveAttribute('disabled');

    await render(hbs`
      <VelvetSwitch @isDisabled={{true}} />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch-disabled');
    assert.dom(SELECTOR.INPUT).hasAttribute('disabled');
  });

  test('it handles `change` events', async function (this: VelvetSwitchTestContext, assert) {
    this.onChange = (isChecked) => assert.step(String(isChecked));

    await render<VelvetSwitchTestContext>(hbs`
      <VelvetSwitch @onChange={{this.onChange}} />
    `);

    await click(SELECTOR.INPUT);

    assert.verifySteps(['true']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetSwitch />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch-md');

    await render(hbs`
      <VelvetSwitch @size="lg" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch-lg');
  });

  test('it renders the correct alignment', async function (assert) {
    await render(hbs`
      <VelvetSwitch />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch-left');

    await render(hbs`
      <VelvetSwitch @alignment="right" />
    `);

    assert.dom(SELECTOR.LABEL).hasClass('velvet-switch-right');
  });

  test('it renders a checked switch', async function (assert) {
    await render(hbs`
      <VelvetSwitch />
    `);

    assert.dom(SELECTOR.INPUT).isNotChecked();

    await render(hbs`
      <VelvetSwitch @isChecked={{true}} />
    `);

    assert.dom(SELECTOR.INPUT).isChecked();
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetSwitch id="foo" />
    `);

    assert.dom(SELECTOR.INPUT).hasAttribute('id', 'foo');
  });
});
