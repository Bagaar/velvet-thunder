---
manualDemoInsertion: true
---

# Radio Group

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetRadioGroup @size="sm" @value="first" class="space-y-2" as |group|>
    <group.Radio @value="first">First</group.Radio>
    <group.Radio @value="second">Second</group.Radio>
    <group.Radio @value="third">Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size="md" @value="first" class="space-y-3" as |group|>
    <group.Radio @value="first">First</group.Radio>
    <group.Radio @value="second">Second</group.Radio>
    <group.Radio @value="third">Third</group.Radio>
  </VelvetRadioGroup>
  <VelvetRadioGroup @size="lg" @value="first" class="space-y-4" as |group|>
    <group.Radio @value="first">First</group.Radio>
    <group.Radio @value="second">Second</group.Radio>
    <group.Radio @value="third">Third</group.Radio>
  </VelvetRadioGroup>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetRadioGroup
  @isDisabled={{true}}
  @value="first"
  class="space-y-3"
  as |group|
>
  <group.Radio @value="first">First</group.Radio>
  <group.Radio @value="second">Second</group.Radio>
  <group.Radio @value="third">Third</group.Radio>
</VelvetRadioGroup>
```

## Examples

[[demos-all]]

## Arguments

<!-- args-table: velvet-radio-group -->
