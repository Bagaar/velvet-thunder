# Button

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @variant='solid'>Button</VelvetButton>
  <VelvetButton @variant='outline'>Button</VelvetButton>
  <VelvetButton @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @color='emerald'>Button</VelvetButton>
  <VelvetButton @color='amber'>Button</VelvetButton>
  <VelvetButton @color='rose'>Button</VelvetButton>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @size='sm'>Button</VelvetButton>
  <VelvetButton @size='md'>Button</VelvetButton>
  <VelvetButton @size='lg'>Button</VelvetButton>
</DemoSpaceX>
```

## Rounded

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isRounded={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisabled={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Loading

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isLoading={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Renderless

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isRenderless={{true}} @variant='solid' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant='outline' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant='ghost' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
</DemoSpaceX>
```

## Arguments

| Name            | Description                                            | Default Value |
| --------------- | ------------------------------------------------------ | ------------- |
| `@color`        | The color of the button.                               | `"primary"`   |
| `@isDisabled`   | Indicate if the button is disabled.                    | `undefined`   |
| `@isLoading`    | Indicate if the button should display a loading state. | `undefined`   |
| `@isRenderless` | Make the button renderless.                            | `undefined`   |
| `@isRounded`    | Indicate if the button is rounded.                     | `undefined`   |
| `@onClick`      | Handle the button's `click` event.                     | `undefined`   |
| `@size`         | The size of the button.                                | `"md"`        |
| `@type`         | The type of the button.                                | `"button"`    |
| `@variant`      | The appearance of the button.                          | `"solid"`     |
