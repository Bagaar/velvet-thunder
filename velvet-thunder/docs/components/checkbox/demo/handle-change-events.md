# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Checked: '{{this.isChecked}}'</div>
  <VelvetCheckbox @isChecked={{this.isChecked}} @onChange={{this.onChange}}>
    Option
  </VelvetCheckbox>
</DemoSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked isChecked = false;

  @action
  onChange(isChecked) {
    this.isChecked = isChecked;
  }
}
```
