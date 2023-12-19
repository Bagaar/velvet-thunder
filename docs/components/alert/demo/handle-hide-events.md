# Handle Hide Events

Use the `@onHide` argument to handle `hide` events.

```hbs template
<DemoSpaceY {{-velvet/auto-animate}}>
  {{#if this.isShown}}
    <VelvetSwitch
      @isChecked={{this.isHideable}}
      @onChange={{this.setIsHideable}}
    >
      Hideable
    </VelvetSwitch>
    <VelvetAlert
      @isHideable={{this.isHideable}}
      @level="info"
      @onHide={{this.onHide}}
    >
      <:title>
        Info Alert
      </:title>
      <:content>
        More info about this info alert goes here. This example text is going to
        run a bit longer, so that you can see how spacing within an alert works
        with this kind of content.
      </:content>
    </VelvetAlert>
  {{else}}
    <VelvetButton @onClick={{this.showAlert}} @variant="primary" class="w-fit">
      Show Alert
    </VelvetButton>
  {{/if}}
</DemoSpaceY>
```

```js component
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Demo extends Component {
  @tracked isHideable = true;
  @tracked isShown = true;

  onHide = () => {
    this.isShown = false;
  };

  setIsHideable = (isHideable) => {
    this.isHideable = isHideable;
  };

  showAlert = () => {
    this.isShown = true;
  };
}
```
