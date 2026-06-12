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

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                         | Applied when           |
| ----------------------------- | ---------------------- |
| `velvet-radio-group`          | Always                 |
| `velvet-radio-group-sm`       | `@size="sm"`           |
| `velvet-radio-group-md`       | `@size="md"` (default) |
| `velvet-radio-group-lg`       | `@size="lg"`           |
| `velvet-radio-group-disabled` | `@isDisabled={{true}}` |

## Signature

<!-- component-signature: velvet-radio-group -->
