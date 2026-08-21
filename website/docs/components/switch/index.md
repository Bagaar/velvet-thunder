---
manualDemoInsertion: true
---

# Switch

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetSwitch @isChecked={{true}} @size="sm">Small</VelvetSwitch>
  <VelvetSwitch @isChecked={{true}} @size="md">Medium</VelvetSwitch>
  <VelvetSwitch @isChecked={{true}} @size="lg">Large</VelvetSwitch>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetSwitch @isDisabled={{true}}>Disabled</VelvetSwitch>
  <VelvetSwitch @isChecked={{true}} @isDisabled={{true}}>Disabled</VelvetSwitch>
</DemoSpaceX>
```

## Alignment

```hbs preview-template
<DemoSpaceY>
  <VelvetSwitch @alignment="left">Left</VelvetSwitch>
  <VelvetSwitch @alignment="right">Right</VelvetSwitch>
</DemoSpaceY>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`switch.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/switch.css).

| Class                    | Applied when                     |
| ------------------------ | -------------------------------- |
| `velvet-switch`          | Always (root `<label>`)          |
| `velvet-switch-sm`       | `@size="sm"`                     |
| `velvet-switch-md`       | `@size="md"` (default)           |
| `velvet-switch-lg`       | `@size="lg"`                     |
| `velvet-switch-left`     | `@alignment="left"` (default)    |
| `velvet-switch-right`    | `@alignment="right"`             |
| `velvet-switch-disabled` | `@isDisabled={{true}}`           |
| `velvet-switch-input`    | Always (on the hidden `<input>`) |
| `velvet-switch-track`    | Always (on the track element)    |
| `velvet-switch-handle`   | Always (on the handle element)   |

## Generated Colors

Pass `colors: true` to generate the track/handle colors from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property           | Used for                                    |
| ------------------------- | ------------------------------------------- |
| `--velvet-neutral`        | Track background when unchecked             |
| `--velvet-neutral-hover`  | Track background on `:hover` when unchecked |
| `--velvet-primary`        | Track background when checked               |
| `--velvet-primary-hover`  | Track background on `:hover` when checked   |
| `--velvet-primary-active` | Focus-visible outline color                 |

## Signature

<!-- component-signature: velvet-switch -->
