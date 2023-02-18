# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Value: '{{this.value}}'</div>
  <VelvetRadioGroup
    @onChange={{this.onChange}}
    @value={{this.value}}
    class='space-y-3'
    as |group|
  >
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
</DemoSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Demo extends Component {
  @tracked value = 'first';

  @action
  onChange(value) {
    this.value = value;
  }
}
```
