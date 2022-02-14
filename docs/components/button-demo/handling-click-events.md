# Handling Click Events

Use the `@onClick` argument to handle click events.

```hbs template
<VelvetButton @onClick={{this.onClick}}>Click Me!</VelvetButton>
```

```js component
import Component from '@glimmer/component';

export default class DemoComponent extends Component {
  onClick() {
    alert('Clicked!');
  }
}
```
