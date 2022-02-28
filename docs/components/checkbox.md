# Checkbox

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @color='emerald' @isChecked={{true}}>Emerald</VelvetCheckbox>
  <VelvetCheckbox @color='amber' @isChecked={{true}}>Amber</VelvetCheckbox>
  <VelvetCheckbox @color='rose' @isChecked={{true}}>Rose</VelvetCheckbox>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isChecked={{true}} @size='sm'>Small</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size='md'>Medium</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size='lg'>Large</VelvetCheckbox>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isDisabled={{true}}>Disabled</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @isDisabled={{true}}>
    Disabled
  </VelvetCheckbox>
</DemoSpaceX>
```

## Indeterminate

```hbs preview-template
<VelvetCheckbox @isIndeterminate={{true}}>Indeterminate</VelvetCheckbox>
```

## Arguments

| Name               | Description                                | Default Value |
| ------------------ | ------------------------------------------ | ------------- |
| `@color`           | The ring color of the checkbox.            | `"primary"`   |
| `@isChecked`       | Indicate if the checkbox is checked.       | `undefined`   |
| `@isDisabled`      | Indicate if the checkbox is disabled.      | `undefined`   |
| `@isIndeterminate` | Indicate if the checkbox is indeterminate. | `undefined`   |
| `@onChange`        | Handle the checkbox's `change` event.      | `undefined`   |
| `@size`            | The size of the checkbox.                  | `"md"`        |
