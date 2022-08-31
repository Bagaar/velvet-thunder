import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | -velvet/noop', function (hooks) {
  setupRenderingTest(hooks);

  test('it returns a noop function', async function (assert) {
    await render(hbs`
      <button
        type="button"
        {{on "click" (-velvet/noop)}}
      ></button>
    `);

    assert.ok(true);
  });
});
