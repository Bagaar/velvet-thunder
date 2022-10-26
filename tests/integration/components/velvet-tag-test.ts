import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

const SELECTOR = '.velvet-tag';

module('Integration | Component | velvet-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the yielded content', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag />
    `);

    assert.dom(SELECTOR).hasNoText();

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag>
        Text
      </VelvetTag>
    `);

    assert.dom(SELECTOR).hasText('Text');
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag />
    `);

    assert.dom(SELECTOR).hasClass('velvet-tag-md');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-tag-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag />
    `);

    assert.dom(SELECTOR).hasClass('velvet-tag-primary');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-tag-secondary');
  });

  test('it renders a pill-shaped tag', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-tag-pill');

    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag @isPill={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-tag-pill');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      {{! @glint-nocheck }}
      <VelvetTag class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
