# Button

## Arguments

| Name            | Description                                             | Default Value |
| --------------- | ------------------------------------------------------- | ------------- |
| `@color`        | The color of the button.                                | `"indigo"`    |
| `@isDisabled`   | Indicates if the button is disabled.                    | `false`       |
| `@isLoading`    | Indicates if the button should display a loading state. | `false`       |
| `@isRenderless` | Make the button renderless.                             | `false`       |
| `@isRounded`    | Indicates if the button is rounded.                     | `false`       |
| `@onClick`      | Handle the button's click event.                        | `undefined`   |
| `@size`         | The size of the button.                                 | `"md"`        |
| `@type`         | The type of the button.                                 | `"button"`    |
| `@variant`      | The basic appearance of the button.                     | `"solid"`     |

## Variants

```hbs preview-template
<DocsSpacer>
  <VelvetButton @variant="solid">Button</VelvetButton>
  <VelvetButton @variant="outline">Button</VelvetButton>
  <VelvetButton @variant="ghost">Button</VelvetButton>
</DocsSpacer>
```

## Colors

```hbs preview-template
<DocsSpacer>
  <VelvetButton @color="green">Button</VelvetButton>
  <VelvetButton @color="orange">Button</VelvetButton>
  <VelvetButton @color="red">Button</VelvetButton>
</DocsSpacer>
```

## Sizes

```hbs preview-template
<DocsSpacer>
  <VelvetButton @size="sm">Button</VelvetButton>
  <VelvetButton @size="md">Button</VelvetButton>
  <VelvetButton @size="lg">Button</VelvetButton>
</DocsSpacer>
```

## Rounded

```hbs preview-template
<DocsSpacer>
  <VelvetButton @isRounded={{true}} @variant="solid">Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant="outline">Button</VelvetButton>
  <VelvetButton @isRounded={{true}} @variant="ghost">Button</VelvetButton>
</DocsSpacer>
```

## Disabled

```hbs preview-template
<DocsSpacer>
  <VelvetButton @isDisabled={{true}} @variant="solid">Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant="outline">Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant="ghost">Button</VelvetButton>
</DocsSpacer>
```

## Loading

```hbs preview-template
<DocsSpacer>
  <VelvetButton @isLoading={{true}} @variant="solid">Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant="outline">Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant="ghost">Button</VelvetButton>
</DocsSpacer>
```

## Renderless

```hbs preview-template
<DocsSpacer>
  <VelvetButton @isRenderless={{true}} @variant="solid" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant="outline" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant="ghost" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
</DocsSpacer>
```
