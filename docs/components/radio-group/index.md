# Radio Group

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetRadioGroup @size='sm' @value='first' class='space-y-2' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size='md' @value='first' class='space-y-3' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size='lg' @value='first' class='space-y-4' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetRadioGroup
  @isDisabled={{true}}
  @value='first'
  class='space-y-3'
  as |group|
>
  <group.Radio @value='first'>First</group.Radio>
  <group.Radio @value='second'>Second</group.Radio>
  <group.Radio @value='third'>Third</group.Radio>
</VelvetRadioGroup>
```

## Arguments

| Name          | Description                              | Type       | Default Value |
| ------------- | ---------------------------------------- | ---------- | ------------- |
| `@isDisabled` | Indicate if the radio group is disabled. | `Boolean`  | `false`       |
| `@name`       | The name of the radio group.             | `String`   | `uid`         |
| `@onChange`   | Handle the radio group's `change` event. | `Function` | `undefined`   |
| `@size`       | The size of the radios.                  | `String`   | `'md'`        |
| `@value`      | The value of the radio group.            | `Unknown`  | `undefined`   |
