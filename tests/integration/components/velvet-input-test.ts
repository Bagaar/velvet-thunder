import { render, typeIn, TestContext } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";

interface VelvetInputTestContext extends TestContext {
  onChange: (value: string, event: Event) => void;
  onInput: (value: string, event: Event) => void;
}

const SELECTOR = ".velvet-input";

module("Integration | Component | velvet-input", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the correct base classes", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass("form-input").hasClass("velvet-input");
  });

  test("it renders a disabled input", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert
      .dom(SELECTOR)
      .doesNotHaveAttribute("disabled")
      .doesNotHaveClass("velvet-input-disabled");

    await render(hbs`
      <VelvetInput @isDisabled={{true}} />
    `);

    assert
      .dom(SELECTOR)
      .hasAttribute("disabled")
      .hasClass("velvet-input-disabled");
  });

  test("it renders an invalid input", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveClass("velvet-input-invalid");

    await render(hbs`
      <VelvetInput @isInvalid={{true}} />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-invalid");
  });

  test("it renders a pill-shaped input", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveClass("velvet-input-pill");

    await render(hbs`
      <VelvetInput @isPill={{true}} />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-pill");
  });

  test("it handles `change` events", async function (this: VelvetInputTestContext, assert) {
    this.onChange = (value) => assert.step(value);

    await render<VelvetInputTestContext>(hbs`
      <VelvetInput @onChange={{this.onChange}} />
    `);

    await typeIn(SELECTOR, "foo", { delay: 0 });

    assert.verifySteps(["foo"]);
  });

  test("it handles `input` events", async function (this: VelvetInputTestContext, assert) {
    this.onInput = (value) => assert.step(value);

    await render<VelvetInputTestContext>(hbs`
      <VelvetInput @onInput={{this.onInput}} />
    `);

    await typeIn(SELECTOR, "foo", { delay: 0 });

    assert.verifySteps(["f", "fo", "foo"]);
  });

  test("it renders the correct size", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-md");

    await render(hbs`
      <VelvetInput @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-lg");
  });

  test("it renders the correct variant", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-primary");

    await render(hbs`
      <VelvetInput @variant="secondary" />
    `);

    assert.dom(SELECTOR).hasClass("velvet-input-secondary");
  });

  test("it renders the correct type", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).exists();

    await render(hbs`
      <VelvetInput @type="number" />
    `);

    assert.dom('input[type="number"]').exists();
  });

  test("it renders the correct value", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).hasNoValue();

    await render(hbs`
      <VelvetInput @value="foo" />
    `);

    assert.dom(SELECTOR).hasValue("foo");
  });

  test("it renders the correct placeholder", async function (assert) {
    await render(hbs`
      <VelvetInput />
    `);

    assert.dom(SELECTOR).doesNotHaveAttribute("placeholder");

    await render(hbs`
      <VelvetInput @placeholder="foo" />
    `);

    assert.dom(SELECTOR).hasAttribute("placeholder", "foo");
  });

  test("`...attributes` works", async function (assert) {
    await render(hbs`
      <VelvetInput class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass("mr-2");
  });
});
