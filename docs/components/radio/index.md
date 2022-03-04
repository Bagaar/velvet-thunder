# Radio

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetRadio @color='emerald' @isChecked={{true}}>Emerald</VelvetRadio>
  <VelvetRadio @color='amber' @isChecked={{true}}>Amber</VelvetRadio>
  <VelvetRadio @color='rose' @isChecked={{true}}>Rose</VelvetRadio>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetRadio @isChecked={{true}} @size='sm'>Small</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @size='md'>Medium</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @size='lg'>Large</VelvetRadio>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetRadio @isDisabled={{true}}>Disabled</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @isDisabled={{true}}>Disabled</VelvetRadio>
</DemoSpaceX>
```

## Arguments

| Name          | Description                        | Type       | Default Value |
| ------------- | ---------------------------------- | ---------- | ------------- |
| `@color`      | The ring color of the radio.       | `String`   | `'primary'`   |
| `@isChecked`  | Indicate if the radio is checked.  | `Boolean`  | `false`       |
| `@isDisabled` | Indicate if the radio is disabled. | `Boolean`  | `false`       |
| `@name`       | The name of the radio.             | `String`   | `''`          |
| `@onChange`   | Handle the radio's `change` event. | `Function` | `undefined`   |
| `@size`       | The size of the radio.             | `String`   | `'md'`        |
| `@value`      | The value of the radio.            | `Any`      | `undefined`   |
