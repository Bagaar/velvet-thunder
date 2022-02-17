# Button

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
| `@variant`      | The basic appearance of the button.                    | `"solid"`     |

## Variants

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @variant='solid'>Button</VelvetButton>
  <VelvetButton @variant='outline'>Button</VelvetButton>
  <VelvetButton @variant='ghost'>Button</VelvetButton>
</DocsSpaceX>
```

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @color='green'>Button</VelvetButton>
  <VelvetButton @color='orange'>Button</VelvetButton>
  <VelvetButton @color='red'>Button</VelvetButton>
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @size='sm'>Button</VelvetButton>
  <VelvetButton @size='md'>Button</VelvetButton>
  <VelvetButton @size='lg'>Button</VelvetButton>
</DocsSpaceX>
```

## Rounded

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @isRounded={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant='ghost'>Button</VelvetButton>
</DocsSpaceX>
```

## Disabled

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @isDisabled={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant='ghost'>Button</VelvetButton>
</DocsSpaceX>
```

## Loading

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @isLoading={{true}} @variant='solid'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='outline'>Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant='ghost'>Button</VelvetButton>
</DocsSpaceX>
```

## Renderless

```hbs preview-template
<DocsSpaceX>
  <VelvetButton @isRenderless={{true}} @variant='solid' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant='outline' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant='ghost' as |button|>
    <a class={{button.class}} href='#renderless'>Link</a>
  </VelvetButton>
</DocsSpaceX>
```
