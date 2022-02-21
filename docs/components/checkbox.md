# Checkbox

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetCheckbox @color='emerald' />
  <VelvetCheckbox @color='amber' />
  <VelvetCheckbox @color='rose' />
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetCheckbox @size='sm' />
  <VelvetCheckbox @size='md' />
  <VelvetCheckbox @size='lg' />
</DocsSpaceX>
```

## Checked

```hbs preview-template
<VelvetCheckbox @isChecked={{true}} />
```

## Disabled

```hbs preview-template
<VelvetCheckbox @isDisabled={{true}} />
```

## Indeterminate

```hbs preview-template
<VelvetCheckbox @isIndeterminate={{true}} />
```

## Invalid

```hbs preview-template
<VelvetCheckbox @isInvalid={{true}} />
```

## Arguments

| Name               | Description                                | Default Value |
| ------------------ | ------------------------------------------ | ------------- |
| `@color`           | The ring color of the checkbox.            | `"primary"`   |
| `@isChecked`       | Indicate if the checkbox is checked.       | `undefined`   |
| `@isDisabled`      | Indicate if the checkbox is disabled.      | `undefined`   |
| `@isIndeterminate` | Indicate if the checkbox is indeterminate. | `undefined`   |
| `@isInvalid`       | Indicate if the checkbox is invalid.       | `undefined`   |
| `@onChange`        | Handle the checkbox's `change` event.      | `undefined`   |
| `@size`            | The size of the checkbox.                  | `"md"`        |
