# Handle Change Events

Use the `@onChange` argument to handle `change` events.

```hbs template
<DemoSpaceY>
  <div>Checked: {{this.isChecked}}</div>
  <VelvetRadio @isChecked={{this.isChecked}} @onChange={{this.onChange}}>
    Option
  </VelvetRadio>
</DemoSpaceY>
```

```js component
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Demo extends Component {
  @tracked isChecked = false;

  onChange = (isChecked) => {
    this.isChecked = isChecked;
  };
}
```
