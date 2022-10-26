import { click, render, TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

interface VelvetIconButtonTestContext extends TestContext {
  onClick: (event: Event) => void;
}

const SELECTOR = '.velvet-icon-button';

module('Integration | Component | velvet-icon-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the yielded content', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).hasNoText();

    await render(hbs`
      <VelvetIconButton>
        Text
      </VelvetIconButton>
    `);

    assert.dom(SELECTOR).hasText('Text');
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-button-md');

    await render(hbs`
      <VelvetIconButton @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-button-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-button-primary');

    await render(hbs`
      <VelvetIconButton @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-button-secondary');
  });

  test('it renders a disabled icon button', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert
      .dom(SELECTOR)
      .doesNotHaveAttribute('disabled')
      .doesNotHaveClass('velvet-icon-button-disabled');

    await render(hbs`
      <VelvetIconButton @isDisabled={{true}} />
    `);

    assert
      .dom(SELECTOR)
      .hasAttribute('disabled')
      .hasClass('velvet-icon-button-disabled');
  });

  test('it renders a loading state', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom('.velvet-spinner').doesNotExist();

    await render(hbs`
      <VelvetIconButton @isLoading={{true}} />
    `);

    assert.dom('.velvet-spinner').exists();
  });

  test('it renders the disclosure icon', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom('.velvet-icon-button-disclosure-icon').doesNotExist();

    await render(hbs`
      <VelvetIconButton @isDisclosure={{true}} />
    `);

    assert.dom('.velvet-icon-button-disclosure-icon').exists();
  });

  test('it renders a round icon button', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-icon-button-round');

    await render(hbs`
      <VelvetIconButton @isRound={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-button-round');
  });

  test('it renders the correct type', async function (assert) {
    await render(hbs`
      <VelvetIconButton />
    `);

    assert.dom(SELECTOR).exists();

    await render(hbs`
      <VelvetIconButton @type="submit" />
    `);

    assert.dom('button[type="submit"]').exists();
  });

  test('it handles `click` events', async function (this: VelvetIconButtonTestContext, assert) {
    this.onClick = () => assert.step('clicked');

    await render(hbs`
      <VelvetIconButton @onClick={{this.onClick}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['clicked']);
  });

  test('renderless', async function (assert) {
    await render(hbs`
      <VelvetIconButton @isRenderless={{true}} as |iconButton|>
        {{iconButton.class}}
      </VelvetIconButton>
    `);

    assert.dom(SELECTOR).doesNotExist();

    assert
      .dom()
      .hasText(
        'velvet-icon-button velvet-icon-button-md velvet-icon-button-primary'
      );
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetIconButton class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
