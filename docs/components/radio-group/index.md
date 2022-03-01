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

| Name          | Description                              | Default Value   |
| ------------- | ---------------------------------------- | --------------- |
| `@color`      | The ring color of the radios.            | `"primary"`     |
| `@isDisabled` | Indicate if the radio group is disabled. | `undefined`     |
| `@name`       | The name of the radio group.             | `guidFor(this)` |
| `@onChange`   | Handle the radio group's `change` event. | `undefined`     |
| `@size`       | The size of the radios.                  | `"md"`          |
| `@value`      | The value of the radio group.            | `undefined`     |
