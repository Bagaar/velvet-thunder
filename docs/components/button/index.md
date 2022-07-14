# Button

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @variant='primary'>Button</VelvetButton>
  <VelvetButton @variant='secondary'>Button</VelvetButton>
  <VelvetButton @variant='ghost'>Button</VelvetButton>
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

## Pill

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isPill={{true}} @variant='primary'>Button</VelvetButton>
  <VelvetButton @isPill={{true}} @variant='secondary'>Button</VelvetButton>
  <VelvetButton @isPill={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisabled={{true}} @variant='primary'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='secondary'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Loading

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isLoading={{true}} @variant='primary'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='secondary'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='ghost'>Button</VelvetButton>
</DemoSpaceX>
```

## Disclosure

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisclosure={{true}} @variant='primary'>
    Button
  </VelvetButton>
  <VelvetButton @isDisclosure={{true}} @variant='secondary'>
    Button
  </VelvetButton>
  <VelvetButton @isDisclosure={{true}} @variant='ghost'>
    Button
  </VelvetButton>
</DemoSpaceX>
```

## Renderless

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isRenderless={{true}} @variant='primary' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant='secondary' as |button|>
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
| `@isDisclosure` | Indicate if the button discloses content.              | `Boolean`  | `false`       |
| `@isDisabled`   | Indicate if the button is disabled.                    | `Boolean`  | `false`       |
| `@isLoading`    | Indicate if the button should display a loading state. | `Boolean`  | `false`       |
| `@isPill`       | Indicate if the button is pill shaped.                 | `Boolean`  | `false`       |
| `@isRenderless` | Make the button renderless.                            | `Boolean`  | `false`       |
| `@onClick`      | Handle the button's `click` event.                     | `Function` | `undefined`   |
| `@size`         | The size of the button.                                | `String`   | `'md'`        |
| `@type`         | The type of the button.                                | `String`   | `'button'`    |
| `@variant`      | The appearance of the button.                          | `String`   | `'primary'`   |
