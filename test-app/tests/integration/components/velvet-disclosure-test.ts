import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-disclosure';

module('Integration | Component | velvet-disclosure', function (hooks) {
  setupRenderingTest(hooks);

  test('it toggles the disclosed content using a `VelvetButton`', async function (assert) {
    await render(hbs`
      <VelvetDisclosure>
        <:trigger as |disclosure|>
          <disclosure.Button />
        </:trigger>
        <:content>
          Content
        </:content>
      </VelvetDisclosure>
    `);

    assert.dom(SELECTOR).hasNoText();

    await click('button');

    assert.dom(SELECTOR).hasText('Content');

    await click('button');

    assert.dom(SELECTOR).hasNoText();
  });

  test('it toggles the disclosed content using a `VelvetIconButton`', async function (assert) {
    await render(hbs`
      <VelvetDisclosure>
        <:trigger as |disclosure|>
          <disclosure.IconButton />
        </:trigger>
        <:content>
          Content
        </:content>
      </VelvetDisclosure>
    `);

    assert.dom(SELECTOR).hasNoText();

    await click('button');

    assert.dom(SELECTOR).hasText('Content');

    await click('button');

    assert.dom(SELECTOR).hasNoText();
  });

  test('it toggles the disclosed content using a custom trigger', async function (assert) {
    await render(hbs`
      <VelvetDisclosure>
        <:trigger as |disclosure|>
          <button type="button" {{on "click" disclosure.toggle}} />
        </:trigger>
        <:content>
          Content
        </:content>
      </VelvetDisclosure>
    `);

    assert.dom(SELECTOR).hasNoText();

    await click('button');

    assert.dom(SELECTOR).hasText('Content');

    await click('button');

    assert.dom(SELECTOR).hasNoText();
  });

  test('it disables using animations', async function (assert) {
    await render(hbs`
      <VelvetDisclosure>
        <:trigger></:trigger>
        <:content></:content>
      </VelvetDisclosure>
    `);

    // The `relative` position is a side-effect of using AutoAnimate:
    assert.dom(SELECTOR).hasStyle({ position: 'relative' });

    await render(hbs`
      <VelvetDisclosure @shouldAnimate={{false}}>
        <:trigger></:trigger>
        <:content></:content>
      </VelvetDisclosure>
    `);

    assert.dom(SELECTOR).hasStyle({ position: 'static' });
  });
});
