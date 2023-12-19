import { click, render, type TestContext } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";

interface VelvetAlertTestContext extends TestContext {
  onHide: () => void;
}

const SELECTOR = ".velvet-alert";

module("Integration | Component | velvet-alert", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the correct title", async function (assert) {
    await render(hbs`
      <VelvetAlert @level="info">
        <:title>
          Alert Title
        </:title>
      </VelvetAlert>
    `);

    assert.dom(SELECTOR).hasText("Alert Title");
  });

  test("it renders the correct content", async function (assert) {
    await render(hbs`
      <VelvetAlert @level="info">
        <:content>
          Alert Content
        </:content>
      </VelvetAlert>
    `);

    assert.dom(SELECTOR).hasText("Alert Content");
  });

  test("it renders the correct level", async function (assert) {
    await render(hbs`
      <VelvetAlert @level="info" />
    `);

    assert.dom(SELECTOR).hasClass("velvet-alert-info");
  });

  test("it renders the correct icon", async function (assert) {
    await render(hbs`
      <VelvetAlert @level="info" />
    `);

    assert.dom(`${SELECTOR} .velvet-alert-icon`).exists();

    await render(hbs`
      <VelvetAlert @level="info">
        <:icon as |icon|>
          <div class={{icon.class}} data-test-icon />
        </:icon>
      </VelvetAlert>
    `);

    assert.dom(`${SELECTOR} [data-test-icon]`).hasClass("velvet-alert-icon");
  });

  test("it renders the hide button", async function (this: VelvetAlertTestContext, assert) {
    this.onHide = () => {};

    await render(hbs`
      <VelvetAlert @level="info" />
    `);

    assert.dom(`${SELECTOR} .velvet-icon-button-alert`).doesNotExist();

    await render<VelvetAlertTestContext>(hbs`
      <VelvetAlert @level="info" @onHide={{this.onHide}} />
    `);

    assert.dom(`${SELECTOR} .velvet-icon-button-alert`).exists();

    await render<VelvetAlertTestContext>(hbs`
      <VelvetAlert @isHideable={{false}} @level="info" @onHide={{this.onHide}} />
    `);

    assert.dom(`${SELECTOR} .velvet-icon-button-alert`).doesNotExist();

    await render<VelvetAlertTestContext>(hbs`
      <VelvetAlert @isHideable={{true}} @level="info" @onHide={{this.onHide}} />
    `);

    assert.dom(`${SELECTOR} .velvet-icon-button-alert`).exists();
  });

  test("it calls `@onHide`", async function (this: VelvetAlertTestContext, assert) {
    this.onHide = () => assert.step("hide");

    await render<VelvetAlertTestContext>(hbs`
      <VelvetAlert @level="info" @onHide={{this.onHide}} />
    `);

    await click(`${SELECTOR} .velvet-icon-button-alert`);

    assert.verifySteps(["hide"]);
  });
});
