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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`input-and-textarea.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/input-and-textarea.css).

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

## Generated Colors

Pass `colors: true` to generate the `primary` variant's border/outline colors from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property          | Used for                                        |
| ------------------------ | ----------------------------------------------- |
| `--velvet-neutral`       | Resting border color                            |
| `--velvet-neutral-hover` | Border color on `:hover`                        |
| `--velvet-primary`       | Border/outline color on `:focus`                |
| `--velvet-danger`        | Border/outline color when `@isInvalid={{true}}` |

## Signature

<!-- component-signature: velvet-textarea -->
