import { render, typeIn, TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

interface VelvetTextareaTestContext extends TestContext {
  onChange: (value: string, event: Event) => void;
  onInput: (value: string, event: Event) => void;
}

const SELECTOR = '.velvet-textarea';

module('Integration | Component | velvet-textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base classes', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasClass('form-textarea').hasClass('velvet-textarea');
  });

  test('it renders a disabled textarea', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert
      .dom(SELECTOR)
      .doesNotHaveAttribute('disabled')
      .doesNotHaveClass('velvet-textarea-disabled');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @isDisabled={{true}} />
    `);

    assert
      .dom(SELECTOR)
      .hasAttribute('disabled')
      .hasClass('velvet-textarea-disabled');
  });

  test('it renders an invalid textarea', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-textarea-invalid');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-invalid');
  });

  test('it handles `change` events', async function (this: VelvetTextareaTestContext, assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @onChange={{this.onChange}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['foo']);
  });

  test('it handles `input` events', async function (this: VelvetTextareaTestContext, assert) {
    this.onInput = (value) => assert.step(value);

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @onInput={{this.onInput}} />
    `);

    await typeIn(SELECTOR, 'foo', { delay: 0 });

    assert.verifySteps(['f', 'fo', 'foo']);
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-md');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-primary');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-textarea-secondary');
  });

  test('it renders the correct value', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).hasNoValue();

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @value="foo" />
    `);

    assert.dom(SELECTOR).hasValue('foo');
  });

  test('it renders the correct placeholder', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute('placeholder');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea @placeholder="foo" />
    `);

    assert.dom(SELECTOR).hasAttribute('placeholder', 'foo');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTextarea class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
