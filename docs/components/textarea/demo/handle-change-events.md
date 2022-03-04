# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Value: '{{this.value}}'</div>
  <VelvetTextarea @onChange={{this.onChange}} @value={{this.value}} />
</DemoSpaceY>
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
