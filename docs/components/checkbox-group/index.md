# Checkbox Group

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckboxGroup
    @color='emerald'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @color='amber'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @color='rose'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckboxGroup
    @size='sm'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @size='md'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @size='lg'
    @value={{hash first=true}}
    class='space-y-2'
    as |group|
  >
    <group.Checkbox @name='first'>First</group.Checkbox>
    <group.Checkbox @name='second'>Second</group.Checkbox>
    <group.Checkbox @name='third'>Third</group.Checkbox>
  </VelvetCheckboxGroup>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetCheckboxGroup
  @isDisabled={{true}}
  @value={{hash first=true}}
  class='space-y-2'
  as |group|
>
  <group.Checkbox @name='first'>First</group.Checkbox>
  <group.Checkbox @name='second'>Second</group.Checkbox>
  <group.Checkbox @name='third'>Third</group.Checkbox>
</VelvetCheckboxGroup>
```

## Arguments

| Name          | Description                                 | Type       | Default Value |
| ------------- | ------------------------------------------- | ---------- | ------------- |
| `@color`      | The ring color of the checkboxes.           | `String`   | `'primary'`   |
| `@isDisabled` | Indicate if the checkbox group is disabled. | `Boolean`  | `false`       |
| `@onChange`   | Handle the checkbox group's `change` event. | `Function` | `undefined`   |
| `@size`       | The size of the checkboxes.                 | `String`   | `'md'`        |
| `@value`      | The value of the checkbox group.            | `Object`   | `undefined`   |
