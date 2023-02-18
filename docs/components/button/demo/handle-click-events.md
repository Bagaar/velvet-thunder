# Handle Click Events

Use the `@onClick` argument to handle `click` events.

```hbs template
<VelvetButton @onClick={{this.onClick}}>
  Click Me!
</VelvetButton>
```

```js component
import Component from '@glimmer/component';

export default class Demo extends Component {
  onClick() {
    alert('Clicked!');
  }
}
```
