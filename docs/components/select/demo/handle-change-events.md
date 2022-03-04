# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Selected: '{{this.selected}}'</div>
  <VelvetSelect
    @onChange={{this.onChange}}
    @placeholder='Select an Option'
    @selected={{this.selected}}
    as |select|
  >
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
</DemoSpaceY>
```

```js component
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked selected = '';

  @action
  onChange(selected) {
    this.selected = selected;
  }
}
```
