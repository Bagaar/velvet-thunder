---
manualDemoInsertion: true
---

# Radio

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetRadio @isChecked={{true}} @size="sm">Small</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @size="md">Medium</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @size="lg">Large</VelvetRadio>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetRadio @isDisabled={{true}}>Disabled</VelvetRadio>
  <VelvetRadio @isChecked={{true}} @isDisabled={{true}}>Disabled</VelvetRadio>
</DemoSpaceX>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                   | Applied when                      |
| ----------------------- | --------------------------------- |
| `velvet-radio`          | Always (root `<label>`)           |
| `velvet-radio-sm`       | `@size="sm"`                      |
| `velvet-radio-md`       | `@size="md"` (default)            |
| `velvet-radio-lg`       | `@size="lg"`                      |
| `velvet-radio-disabled` | `@isDisabled={{true}}`            |
| `velvet-radio-input`    | Always (on the `<input>` element) |

## Signature

<!-- component-signature: velvet-radio -->
