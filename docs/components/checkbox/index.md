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

| Name               | Description                                | Type       | Default Value |
| ------------------ | ------------------------------------------ | ---------- | ------------- |
| `@color`           | The ring color of the checkbox.            | `String`   | `'primary'`   |
| `@isChecked`       | Indicate if the checkbox is checked.       | `Boolean`  | `false`       |
| `@isDisabled`      | Indicate if the checkbox is disabled.      | `Boolean`  | `false`       |
| `@isIndeterminate` | Indicate if the checkbox is indeterminate. | `Boolean`  | `false`       |
| `@name`            | The name of the checkbox.                  | `String`   | `''`          |
| `@onChange`        | Handle the checkbox's `change` event.      | `Function` | `undefined`   |
| `@size`            | The size of the checkbox.                  | `String`   | `'md'`        |
