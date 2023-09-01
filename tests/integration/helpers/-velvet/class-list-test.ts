import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";

module("Integration | Helper | -velvet/class-list", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders a class list", async function (assert) {
    await render(hbs`
      {{-velvet/class-list "foo" null "bar"}}
    `);

    assert.dom().hasText("foo bar");
  });
});
