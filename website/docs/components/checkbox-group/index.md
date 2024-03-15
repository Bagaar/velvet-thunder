---
manualDemoInsertion: true
---

# Checkbox Group

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckboxGroup
    @size="sm"
    @value={{array "first"}}
    class="space-y-2"
    as |group|
  >
    <group.Checkbox @name="first">First</group.Checkbox>
    <group.Checkbox @name="second">Second</group.Checkbox>
    <group.Checkbox @name="third">Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @size="md"
    @value={{array "first"}}
    class="space-y-3"
    as |group|
  >
    <group.Checkbox @name="first">First</group.Checkbox>
    <group.Checkbox @name="second">Second</group.Checkbox>
    <group.Checkbox @name="third">Third</group.Checkbox>
  </VelvetCheckboxGroup>
  <VelvetCheckboxGroup
    @size="lg"
    @value={{array "first"}}
    class="space-y-4"
    as |group|
  >
    <group.Checkbox @name="first">First</group.Checkbox>
    <group.Checkbox @name="second">Second</group.Checkbox>
    <group.Checkbox @name="third">Third</group.Checkbox>
  </VelvetCheckboxGroup>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetCheckboxGroup
  @isDisabled={{true}}
  @value={{array "first"}}
  class="space-y-3"
  as |group|
>
  <group.Checkbox @name="first">First</group.Checkbox>
  <group.Checkbox @name="second">Second</group.Checkbox>
  <group.Checkbox @name="third">Third</group.Checkbox>
</VelvetCheckboxGroup>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-checkbox-group -->
