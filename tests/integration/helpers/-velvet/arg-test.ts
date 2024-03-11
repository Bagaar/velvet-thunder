import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";

module("Integration | Helper | -velvet/arg", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the arg value", async function (assert) {
    await render(hbs`
      {{-velvet/arg "foo" "bar"}}
    `);

    assert.dom().hasText("foo");
  });

  test("it renders the default value", async function (assert) {
    await render(hbs`
      {{-velvet/arg null "bar"}}
    `);

    assert.dom().hasText("bar");
  });
});
