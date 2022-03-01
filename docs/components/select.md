# Select

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetSelect @color='emerald' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @color='amber' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @color='rose' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetSelect @size='sm' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @size='md' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @size='lg' as |select|>
    <select.Option @value='first'>First</select.Option>
    <select.Option @value='second'>Second</select.Option>
    <select.Option @value='third'>Third</select.Option>
  </VelvetSelect>
</DemoSpaceX>
```

## Selected

```hbs preview-template
<VelvetSelect @selected='second' as |select|>
  <select.Option @value='first'>First</select.Option>
  <select.Option @value='second'>Second</select.Option>
  <select.Option @value='third'>Third</select.Option>
</VelvetSelect>
```

## Rounded

```hbs preview-template
<VelvetSelect @isRounded={{true}} as |select|>
  <select.Option @value='first'>First</select.Option>
  <select.Option @value='second'>Second</select.Option>
  <select.Option @value='third'>Third</select.Option>
</VelvetSelect>
```

## Disabled

```hbs preview-template
<VelvetSelect @isDisabled={{true}} as |select|>
  <select.Option @value='first'>First</select.Option>
  <select.Option @value='second'>Second</select.Option>
  <select.Option @value='third'>Third</select.Option>
</VelvetSelect>
```

## Invalid

```hbs preview-template
<VelvetSelect @isInvalid={{true}} as |select|>
  <select.Option @value='first'>First</select.Option>
  <select.Option @value='second'>Second</select.Option>
  <select.Option @value='third'>Third</select.Option>
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
