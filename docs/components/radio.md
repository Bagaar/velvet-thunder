# Radio

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetRadio @color='emerald' />
  <VelvetRadio @color='amber' />
  <VelvetRadio @color='rose' />
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetRadio @size='sm' />
  <VelvetRadio @size='md' />
  <VelvetRadio @size='lg' />
</DocsSpaceX>
```

## Checked

```hbs preview-template
<VelvetRadio @isChecked={{true}} />
```

## Disabled

```hbs preview-template
<VelvetRadio @isDisabled={{true}} />
```

## Indeterminate

```hbs preview-template
<VelvetRadio @isIndeterminate={{true}} />
```

## Invalid

```hbs preview-template
<VelvetRadio @isInvalid={{true}} />
```

## Arguments

| Name               | Description                             | Default Value |
| ------------------ | --------------------------------------- | ------------- |
| `@color`           | The ring color of the radio.            | `"primary"`   |
| `@isChecked`       | Indicate if the radio is checked.       | `undefined`   |
| `@isDisabled`      | Indicate if the radio is disabled.      | `undefined`   |
| `@isIndeterminate` | Indicate if the radio is indeterminate. | `undefined`   |
| `@isInvalid`       | Indicate if the radio is invalid.       | `undefined`   |
| `@name`            | The name of the radio.                  | `undefined`   |
| `@onChange`        | Handle the radio's `change` event.      | `undefined`   |
| `@size`            | The size of the radio.                  | `"md"`        |
