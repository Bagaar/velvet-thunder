import { click, render, type TestContext } from '@ember/test-helpers';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { linkFor, setupLink, type TestLink } from 'ember-link/test-support';
import { module, test } from 'qunit';

interface VelvetLinkTestContext extends TestContext {
  link: TestLink;
}

const SELECTOR = '.velvet-link';

module('Integration | Component | velvet-link', function (hooks) {
  setupRenderingTest(hooks);
  setupLink(hooks);

  test('it renders the correct base class', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" />
    `);

    assert.dom(SELECTOR).exists();
  });

  test('it renders the yielded content', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" />
    `);

    assert.dom(SELECTOR).hasNoText();

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/">
        Text
      </VelvetLink>
    `);

    assert.dom(SELECTOR).hasText('Text');
  });

  test('it renders the correct size', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-link-md');

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-link-lg');
  });

  test('it renders the correct variant', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-link-primary');

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-link-secondary');
  });

  test('it renders a pill-shaped link', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" />
    `);

    assert.dom(SELECTOR).doesNotHaveClass('velvet-link-pill');

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @isPill={{true}} @to="/" />
    `);

    assert.dom(SELECTOR).hasClass('velvet-link-pill');
  });

  test('it renders the correct `href` attribute', async function (this: VelvetLinkTestContext, assert) {
    this.link = linkFor('index');

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to={{this.link}} />
    `);

    assert.dom(SELECTOR).hasAttribute('href', this.link.url);
  });

  test('it transitions to the provided link', async function (this: VelvetLinkTestContext, assert) {
    this.link = linkFor('index');
    this.link.onTransitionTo = () => assert.step('transitioned');

    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to={{this.link}} />
    `);

    await click(SELECTOR);

    assert.verifySteps(['transitioned']);
  });

  test('`...attributes` works', async function (assert) {
    await render<VelvetLinkTestContext>(hbs`
      <VelvetLink @to="/" class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass('mr-2');
  });
});
