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

| Name            | Description                                            | Type       | Default Value |
| --------------- | ------------------------------------------------------ | ---------- | ------------- |
| `@color`        | The color of the button.                               | `String`   | `'primary'`   |
| `@isDisabled`   | Indicate if the button is disabled.                    | `Boolean`  | `false`       |
| `@isLoading`    | Indicate if the button should display a loading state. | `Boolean`  | `false`       |
| `@isRenderless` | Make the button renderless.                            | `Boolean`  | `false`       |
| `@isRounded`    | Indicate if the button is rounded.                     | `Boolean`  | `false`       |
| `@onClick`      | Handle the button's `click` event.                     | `Function` | `undefined`   |
| `@size`         | The size of the button.                                | `String`   | `'md'`        |
| `@type`         | The type of the button.                                | `String`   | `'button'`    |
| `@variant`      | The appearance of the button.                          | `String`   | `'solid'`     |
