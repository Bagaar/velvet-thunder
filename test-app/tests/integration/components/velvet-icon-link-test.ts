import { click, render, type TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { linkFor, setupLink, type TestLink } from 'ember-link/test-support';
import { module, test } from 'qunit';

interface VelvetIconLinkTestContext extends TestContext {
  link: TestLink;
}

const SELECTOR = '.velvet-icon-link';

module('Integration | Component | velvet-icon-link', function (hooks) {
  setupRenderingTest(hooks);
  setupLink(hooks);

  test('it renders the correct base class', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the yielded content', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" />
    `);

    assert.dom(SELECTOR).hasNoText();

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/">
        Text
      </VelvetIconLink>
    `);

    assert.dom(SELECTOR).hasText('Text');
  });

  test('it renders the correct size', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-link-md');

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-link-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-link-primary');

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-link-secondary');
  });

  test('it renders a round icon link', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-icon-link-round');

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @isRound={{true}} @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-icon-link-round');
  });

  test('it renders the correct `href` attribute', async function (this: VelvetIconLinkTestContext, assert) {
    this.link = linkFor('index');

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to={{this.link}} />
    `);

    assert.dom(SELECTOR).hasAttribute('href', this.link.url);
  });

  test('it transitions to the provided link', async function (this: VelvetIconLinkTestContext, assert) {
    this.link = linkFor('index');
    this.link.onTransitionTo = () => assert.step('transitioned');

    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to={{this.link}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['transitioned']);
  });

  test('`...attributes` works', async function (assert) {
    await render<VelvetIconLinkTestContext>(hbs`
      <VelvetIconLink @to="/" class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
