import { render, triggerEvent } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-tooltip';
const SELECTOR_CONTENT = '.velvet-tooltip-content';

module('Integration | Component | velvet-tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetTooltip />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it works using the yielded `trigger` and `content` modifiers', async function (assert) {
    await render(hbs`
      <VelvetTooltip as |tooltip|>
        <VelvetButton {{tooltip.trigger}} />
        {{#if tooltip.isShown}}
          <div data-test-content {{tooltip.content}} />
        {{/if}}
      </VelvetTooltip>
    `);

    assert.dom('[data-test-content]').doesNotExist();

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom('[data-test-content]').exists();

    await triggerEvent('.velvet-button', 'mouseleave');

    assert.dom('[data-test-content]').doesNotExist();
  });

  test('it uses the correct offset', async function (assert) {
    await render(hbs`
      <VelvetTooltip class="relative" as |tooltip|>
        <VelvetButton {{tooltip.trigger}} />
        <tooltip.Content />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ top: '40px' });

    await render(hbs`
      <VelvetTooltip @offset={{12}} class="relative" as |tooltip|>
        <VelvetButton {{tooltip.trigger}} />
        <tooltip.Content />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ top: '48px' });
  });

  test('it uses the correct placement', async function (assert) {
    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <VelvetTooltip class="relative" as |tooltip|>
        <VelvetButton style="margin-left: 200px; width: 120px;" {{tooltip.trigger}} />
        <tooltip.Content style="width: 240px;" />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ left: '140px' });

    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <VelvetTooltip @placement="top-end" class="relative" as |tooltip|>
        <VelvetButton style="margin-left: 200px; width: 120px;" {{tooltip.trigger}} />
        <tooltip.Content style="width: 240px;" />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ left: '80px' });
  });

  test('it uses the correct strategy', async function (assert) {
    await render(hbs`
      <VelvetTooltip as |tooltip|>
        <VelvetButton {{tooltip.trigger}} />
        <tooltip.Content />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ position: 'absolute' });

    await render(hbs`
      <VelvetTooltip @strategy="fixed" as |tooltip|>
        <VelvetButton {{tooltip.trigger}} />
        <tooltip.Content />
      </VelvetTooltip>
    `);

    await triggerEvent('.velvet-button', 'mouseenter');

    assert.dom(SELECTOR_CONTENT).hasStyle({ position: 'fixed' });
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetTooltip class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
