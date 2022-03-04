# Radio Group

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetRadioGroup
    @color='emerald'
    @value='first'
    class='space-y-2'
    as |group|
  >
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @color='amber' @value='first' class='space-y-2' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @color='rose' @value='first' class='space-y-2' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetRadioGroup @size='sm' @value='first' class='space-y-2' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size='md' @value='first' class='space-y-2' as |group|>
    <group.Radio @value='first'>First</group.Radio>
    <group.Radio @value='second'>Second</group.Radio>
    <group.Radio @value='third'>Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size='lg' @value='first' class='space-y-2' as |group|>
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
  class='space-y-2'
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
| `@color`      | The ring color of the radios.            | `String`   | `'primary'`   |
| `@isDisabled` | Indicate if the radio group is disabled. | `Boolean`  | `false`       |
| `@name`       | The name of the radio group.             | `String`   | `uid`         |
| `@onChange`   | Handle the radio group's `change` event. | `Function` | `undefined`   |
| `@size`       | The size of the radios.                  | `String`   | `'md'`        |
| `@value`      | The value of the radio group.            | `Any`      | `undefined`   |
