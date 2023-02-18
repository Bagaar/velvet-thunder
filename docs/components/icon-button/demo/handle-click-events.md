# Handle Click Events

Use the `@onClick` argument to handle `click` events.

```hbs template
<VelvetIconButton @onClick={{this.onClick}}>
  <DemoMenuIcon />
</VelvetIconButton>
```

```js component
import Component from '@glimmer/component';

export default class Demo extends Component {
  onClick() {
    alert('Clicked!');
  }
}
```
