---
manualDemoInsertion: true
---

# Checkbox

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isChecked={{true}} @size="sm">Small</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size="md">Medium</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size="lg">Large</VelvetCheckbox>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isDisabled={{true}}>Disabled</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @isDisabled={{true}}>
    Disabled
  </VelvetCheckbox>
</DemoSpaceX>
```

## Indeterminate

```hbs preview-template
<VelvetCheckbox @isIndeterminate={{true}}>Indeterminate</VelvetCheckbox>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                      | Applied when                      |
| -------------------------- | --------------------------------- |
| `velvet-checkbox`          | Always (root `<label>`)           |
| `velvet-checkbox-sm`       | `@size="sm"`                      |
| `velvet-checkbox-md`       | `@size="md"` (default)            |
| `velvet-checkbox-lg`       | `@size="lg"`                      |
| `velvet-checkbox-disabled` | `@isDisabled={{true}}`            |
| `velvet-checkbox-input`    | Always (on the `<input>` element) |

## Signature

<!-- component-signature: velvet-checkbox -->
