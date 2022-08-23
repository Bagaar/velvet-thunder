# Select

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

## Pill

```hbs preview-template
<VelvetSelect @isPill={{true}} as |select|>
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

| Name           | Description                            | Type       | Default Value |
| -------------- | -------------------------------------- | ---------- | ------------- |
| `@isDisabled`  | Indicate if the select is disabled.    | `Boolean`  | `false`       |
| `@isInvalid`   | Indicate if the select is invalid.     | `Boolean`  | `false`       |
| `@isPill`      | Indicate if the select is pill shaped. | `Boolean`  | `false`       |
| `@onChange`    | Handle the select's `change` event.    | `Function` | `undefined`   |
| `@placeholder` | The placeholder of the select.         | `String`   | `''`          |
| `@selected`    | The selected option of the select.     | `Any`      | `undefined`   |
| `@size`        | The size of the select.                | `String`   | `'md'`        |

### Option Arguments

| Name     | Description              | Type  | Default Value |
| -------- | ------------------------ | ----- | ------------- |
| `@value` | The value of the option. | `Any` | `undefined`   |
