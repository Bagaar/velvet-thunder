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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`checkbox-and-radio.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/checkbox-and-radio.css).

| Class                      | Applied when                      |
| -------------------------- | --------------------------------- |
| `velvet-checkbox`          | Always (root `<label>`)           |
| `velvet-checkbox-sm`       | `@size="sm"`                      |
| `velvet-checkbox-md`       | `@size="md"` (default)            |
| `velvet-checkbox-lg`       | `@size="lg"`                      |
| `velvet-checkbox-disabled` | `@isDisabled={{true}}`            |
| `velvet-checkbox-input`    | Always (on the `<input>` element) |

## Generated Colors

Pass `colors: true` to generate the checked/focus accent color from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property           | Used for                                                      |
| ------------------------- | ------------------------------------------------------------- |
| `--velvet-primary`        | Checked/indeterminate background and border, and focus border |
| `--velvet-primary-active` | Focus-visible outline color                                   |

## Signature

<!-- component-signature: velvet-checkbox -->
