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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`checkbox-and-radio.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/checkbox-and-radio.css).

| Class                   | Applied when                      |
| ----------------------- | --------------------------------- |
| `velvet-radio`          | Always (root `<label>`)           |
| `velvet-radio-sm`       | `@size="sm"`                      |
| `velvet-radio-md`       | `@size="md"` (default)            |
| `velvet-radio-lg`       | `@size="lg"`                      |
| `velvet-radio-disabled` | `@isDisabled={{true}}`            |
| `velvet-radio-input`    | Always (on the `<input>` element) |

## Generated Colors

Pass `colors: true` to generate the checked/focus accent color from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property           | Used for                                                               |
| ------------------------- | ---------------------------------------------------------------------- |
| `--velvet-primary`        | Checked background and border, and focus border                        |
| `--velvet-primary-hover`  | Checked background/border on `:hover`                                  |
| `--velvet-primary-active` | Checked background/border on `:focus`, and focus-visible outline color |

## Signature

<!-- component-signature: velvet-radio -->
