import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Modifier | velvet-auto-animate', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(hbs`
      <div {{velvet-auto-animate}}></div>
    `);

    assert.dom('div').hasStyle({ position: 'relative' });
  });
});
