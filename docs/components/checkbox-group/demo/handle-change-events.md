# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Value: "{{this.valueAsString}}"</div>
  <VelvetCheckboxGroup
    @onChange={{this.onChange}}
    @value={{this.value}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
</DemoSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked value = null;

  get valueAsString() {
    return JSON.stringify(this.value);
  }

  @action
  onChange(value) {
    this.value = value;
  }
}
```
