import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";

const SELECTOR = ".velvet-avatar";

module("Integration | Component | velvet-avatar", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the correct base class", async function (assert) {
    await render(hbs`
      <VelvetAvatar />
    `);

    assert.dom(SELECTOR).exists();
  });

  test("it renders the correct size", async function (assert) {
    await render(hbs`
      <VelvetAvatar />
    `);

    assert.dom(SELECTOR).hasClass("velvet-avatar-md");

    await render(hbs`
      <VelvetAvatar @size="lg" />
    `);

    assert.dom(SELECTOR).hasClass("velvet-avatar-lg");
  });

  test("it renders the correct variant", async function (assert) {
    await render(hbs`
      <VelvetAvatar @variant="primary" />
    `);

    assert.dom(SELECTOR).hasClass("velvet-avatar-primary");
  });

  test("it renders a round avatar", async function (assert) {
    await render(hbs`
      <VelvetAvatar />
    `);

    assert.dom(SELECTOR).doesNotHaveClass("velvet-avatar-round");

    await render(hbs`
      <VelvetAvatar @isRound={{true}} />
    `);

    assert.dom(SELECTOR).hasClass("velvet-avatar-round");
  });

  test("it renders the image", async function (assert) {
    await render(hbs`
      <VelvetAvatar
        @initials="JP"
        @name="Jake Peralta"
        @src="https://avatars.githubusercontent.com/u/7403183"
      />
    `);

    assert
      .dom("img")
      .hasAttribute("alt", "Jake Peralta")
      .hasAttribute("src", "https://avatars.githubusercontent.com/u/7403183");
  });

  test("it renders the initials based on the `@name` argument", async function (assert) {
    await render(hbs`
      <VelvetAvatar
        @initials="BD"
        @name="Jake Peralta"
      />
    `);

    assert.dom(SELECTOR).hasText("JP");
  });

  test("it renders the `@initials` argument", async function (assert) {
    await render(hbs`
      <VelvetAvatar
        @initials="JP"
      />
    `);

    assert.dom(SELECTOR).hasText("JP");
  });

  test("it renders a question mark as a last resort", async function (assert) {
    await render(hbs`
      <VelvetAvatar />
    `);

    assert.dom(SELECTOR).hasText("?");
  });

  test("`...attributes` works", async function (assert) {
    await render(hbs`
      <VelvetAvatar class="mr-2" />
    `);

    assert.dom(SELECTOR).hasClass("mr-2");
  });
});
