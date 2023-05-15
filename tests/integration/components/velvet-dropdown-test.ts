import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-dropdown';
const SELECTOR_CONTENT = '.velvet-dropdown-content';

module('Integration | Component | velvet-dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetDropdown />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it works using the yielded `Button` component', async function (assert) {
    await render(hbs`
      <VelvetDropdown as |dropdown|>
        <dropdown.Button />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    assert.dom(SELECTOR_CONTENT).doesNotExist();

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).exists();
  });

  test('it works using the yielded `IconButton` component', async function (assert) {
    await render(hbs`
      <VelvetDropdown as |dropdown|>
        <dropdown.IconButton />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    assert.dom(SELECTOR_CONTENT).doesNotExist();

    await click('.velvet-icon-button');

    assert.dom(SELECTOR_CONTENT).exists();
  });

  test('it works using the yielded `trigger` and `content` modifiers', async function (assert) {
    await render(hbs`
      <VelvetDropdown as |dropdown|>
        <button data-test-trigger type="button" {{dropdown.trigger}} />
        {{#if dropdown.isShown}}
          <div data-test-content {{dropdown.content}} />
        {{/if}}
      </VelvetDropdown>
    `);

    assert.dom('[data-test-content]').doesNotExist();

    await click('[data-test-trigger]');

    assert.dom('[data-test-content]').exists();
  });

  test('it uses the correct offset', async function (assert) {
    await render(hbs`
      <VelvetDropdown class="relative" as |dropdown|>
        <dropdown.Button />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ top: '44px' });

    await render(hbs`
      <VelvetDropdown @offset={{12}} class="relative" as |dropdown|>
        <dropdown.Button />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ top: '48px' });
  });

  test('it uses the correct placement', async function (assert) {
    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <VelvetDropdown class="relative" as |dropdown|>
        <dropdown.Button style="margin-left: 200px; width: 120px;" />
        <dropdown.Content style="width: 240px;" />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ left: '200px' });

    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <VelvetDropdown @placement="bottom-end" class="relative" as |dropdown|>
        <dropdown.Button style="margin-left: 200px; width: 120px;" />
        <dropdown.Content style="width: 240px;" />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ left: '80px' });
  });

  test('it uses the correct strategy', async function (assert) {
    await render(hbs`
      <VelvetDropdown as |dropdown|>
        <dropdown.Button />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ position: 'absolute' });

    await render(hbs`
      <VelvetDropdown @strategy="fixed" as |dropdown|>
        <dropdown.Button />
        <dropdown.Content />
      </VelvetDropdown>
    `);

    await click('.velvet-button');

    assert.dom(SELECTOR_CONTENT).hasStyle({ position: 'fixed' });
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetDropdown class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
