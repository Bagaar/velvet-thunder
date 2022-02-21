# Select

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetSelect @color='emerald' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
  <VelvetSelect @color='amber' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
  <VelvetSelect @color='rose' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetSelect @size='sm' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
  <VelvetSelect @size='md' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
  <VelvetSelect @size='lg' as |select|>
    <select.Option @value='option-1'>Option 1</select.Option>
    <select.Option @value='option-2'>Option 2</select.Option>
    <select.Option @value='option-3'>Option 3</select.Option>
  </VelvetSelect>
</DocsSpaceX>
```

## Selected

```hbs preview-template
<VelvetSelect @selected='option-2' as |select|>
  <select.Option @value='option-1'>Option 1</select.Option>
  <select.Option @value='option-2'>Option 2</select.Option>
  <select.Option @value='option-3'>Option 3</select.Option>
</VelvetSelect>
```

## Rounded

```hbs preview-template
<VelvetSelect @isRounded={{true}} as |select|>
  <select.Option @value='option-1'>Option 1</select.Option>
  <select.Option @value='option-2'>Option 2</select.Option>
  <select.Option @value='option-3'>Option 3</select.Option>
</VelvetSelect>
```

## Disabled

```hbs preview-template
<VelvetSelect @isDisabled={{true}} as |select|>
  <select.Option @value='option-1'>Option 1</select.Option>
  <select.Option @value='option-2'>Option 2</select.Option>
  <select.Option @value='option-3'>Option 3</select.Option>
</VelvetSelect>
```

## Invalid

```hbs preview-template
<VelvetSelect @isInvalid={{true}} as |select|>
  <select.Option @value='option-1'>Option 1</select.Option>
  <select.Option @value='option-2'>Option 2</select.Option>
  <select.Option @value='option-3'>Option 3</select.Option>
</VelvetSelect>
```

## Arguments

| Name           | Description                         | Default Value |
| -------------- | ----------------------------------- | ------------- |
| `@color`       | The ring color of the select.       | `"primary"`   |
| `@isDisabled`  | Indicate if the select is disabled. | `undefined`   |
| `@isInvalid`   | Indicate if the select is invalid.  | `undefined`   |
| `@isRounded`   | Indicate if the select is rounded.  | `undefined`   |
| `@onChange`    | Handle the select's `change` event. | `undefined`   |
| `@placeholder` | The placeholder of the select.      | `undefined`   |
| `@selected`    | The selected option of the select.  | `undefined`   |
| `@size`        | The size of the select.             | `"md"`        |
