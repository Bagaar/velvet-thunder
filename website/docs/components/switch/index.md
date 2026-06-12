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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

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

## Signature

<!-- component-signature: velvet-switch -->
