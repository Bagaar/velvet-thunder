# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DocsSpaceY>
  <div>Value: "{{this.value}}"</div>
  <VelvetInput @onChange={{this.onChange}} @value={{this.value}} />
</DocsSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked value = '';

  @action
  onChange(value) {
    this.value = value;
  }
}
```
