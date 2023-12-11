# Disabling Animations

Use the `@shouldAnimate` argument to enable/disable animations.

```hbs template
<DemoSpaceY>
  <VelvetSwitch @isChecked={{this.shouldAnimate}} @onChange={{this.onChange}}>
    Should Animate
  </VelvetSwitch>

  <VelvetDisclosure @shouldAnimate={{this.shouldAnimate}}>
    <:trigger as |disclosure|>
      <disclosure.Button>
        Toggle Content
      </disclosure.Button>
    </:trigger>
    <:content>
      <div class="bg-violet-500/25 h-52 mt-4 rounded-md"></div>
    </:content>
  </VelvetDisclosure>
</DemoSpaceY>
```

```js component
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Demo extends Component {
  @tracked shouldAnimate = true;

  onChange = (shouldAnimate) => {
    this.shouldAnimate = shouldAnimate;
  };
}
```
