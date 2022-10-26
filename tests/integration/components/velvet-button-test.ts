import { click, render, TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

interface VelvetButtonTestContext extends TestContext {
  onClick: (event: Event) => void;
}

const SELECTOR = '.velvet-button';

module('Integration | Component | velvet-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the yielded content', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).hasNoText();

    await render(hbs`
      <VelvetButton>
        Text
      </VelvetButton>
    `);

    assert.dom(SELECTOR).hasText('Text');
  });

  test('it renders the correct size', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).hasClass('velvet-button-md');

    await render(hbs`
      <VelvetButton @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-button-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).hasClass('velvet-button-primary');

    await render(hbs`
      <VelvetButton @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-button-secondary');
  });

  test('it renders a disabled button', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert
      .dom(SELECTOR)
      .doesNotHaveAttribute('disabled')
      .doesNotHaveClass('velvet-button-disabled');

    await render(hbs`
      <VelvetButton @isDisabled={{true}} />
    `);

    assert
      .dom(SELECTOR)
      .hasAttribute('disabled')
      .hasClass('velvet-button-disabled');
  });

  test('it renders a loading state', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom('.velvet-spinner').doesNotExist();

    await render(hbs`
      <VelvetButton @isLoading={{true}} />
    `);

    assert.dom('.velvet-spinner').exists();
  });

  test('it renders the disclosure icon', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom('.velvet-button-disclosure-icon').doesNotExist();

    await render(hbs`
      <VelvetButton @isDisclosure={{true}} />
    `);

    assert.dom('.velvet-button-disclosure-icon').exists();
  });

  test('it renders a pill-shaped button', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-button-pill');

    await render(hbs`
      <VelvetButton @isPill={{true}} />
    `);

    assert.dom(SELECTOR).hasClass('velvet-button-pill');
  });

  test('it renders the correct type', async function (assert) {
    await render(hbs`
      <VelvetButton />
    `);

    assert.dom(SELECTOR).exists();

    await render(hbs`
      <VelvetButton @type="submit" />
    `);

    assert.dom('button[type="submit"]').exists();
  });

  test('it handles `click` events', async function (this: VelvetButtonTestContext, assert) {
    this.onClick = () => assert.step('clicked');

    await render<VelvetButtonTestContext>(hbs`
      <VelvetButton @onClick={{this.onClick}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['clicked']);
  });

  test('renderless', async function (assert) {
    await render(hbs`
      <VelvetButton @isRenderless={{true}} as |button|>
        {{button.class}}
      </VelvetButton>
    `);

    assert.dom(SELECTOR).doesNotExist();

    assert
      .dom()
      .hasText('velvet-button velvet-button-md velvet-button-primary');
  });

  test('`...attributes` works', async function (assert) {
    await render(hbs`
      <VelvetButton class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
