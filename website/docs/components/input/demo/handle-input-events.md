# Handle Input Events

Use the `@onInput` argument to handle `input` events.

```hbs template
<DemoSpaceY>
  <div>Value: {{this.value}}</div>
  <VelvetInput @onInput={{this.onInput}} @value={{this.value}} />
</DemoSpaceY>
```

```js component
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Demo extends Component {
  @tracked value = "Value";

  onInput = (value) => {
    this.value = value;
  };
}
```
