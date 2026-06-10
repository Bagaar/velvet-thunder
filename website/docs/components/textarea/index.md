---
manualDemoInsertion: true
---

# Textarea

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetTextarea @size="sm" />
  <VelvetTextarea @size="md" />
  <VelvetTextarea @size="lg" />
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetTextarea @isDisabled={{true}} />
```

## Invalid

```hbs preview-template
<VelvetTextarea @isInvalid={{true}} />
```

## Placeholder

```hbs preview-template
<VelvetTextarea @placeholder="Type something here..." />
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                       | Applied when                   |
| --------------------------- | ------------------------------ |
| `velvet-textarea`           | Always                         |
| `velvet-textarea-sm`        | `@size="sm"`                   |
| `velvet-textarea-md`        | `@size="md"` (default)         |
| `velvet-textarea-lg`        | `@size="lg"`                   |
| `velvet-textarea-primary`   | `@variant="primary"` (default) |
| `velvet-textarea-{variant}` | Any custom `@variant` value    |
| `velvet-textarea-invalid`   | `@isInvalid={{true}}`          |
| `velvet-textarea-disabled`  | `@isDisabled={{true}}`         |

## Signature

<!-- component-signature: velvet-textarea -->
