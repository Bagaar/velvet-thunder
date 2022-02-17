# Handle Input Events

Use the `@onInput` argument to handle `input` events.

```hbs template
<DocsSpaceY>
  <div>Value: "{{this.value}}"</div>
  <VelvetTextarea @onInput={{this.onInput}} @value={{this.value}} />
</DocsSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked value = '';

  @action
  onInput(value) {
    this.value = value;
  }
}
```
