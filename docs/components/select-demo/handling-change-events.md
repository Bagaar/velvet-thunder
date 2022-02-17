# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DocsSpaceY>
  <div>Selected: "{{this.selected}}"</div>
  <VelvetSelect
    @onChange={{this.onChange}}
    @placeholder='Select an Option'
    @selected={{this.selected}}
    as |select|
  >
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
</DocsSpaceY>
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
