import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | -velvet/class', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a class', async function (assert) {
    await render(hbs`
      {{-velvet/class "foo" "bar"}}
    `);

    assert.dom(this.element).hasText('foo-bar');
  });
});
