---
manualDemoInsertion: true
---

# Input

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @size="sm" />
  <VelvetInput @size="md" />
  <VelvetInput @size="lg" />
</DemoSpaceX>
```

## Pill

```hbs preview-template
<VelvetInput @isPill={{true}} />
```

## Disabled

```hbs preview-template
<VelvetInput @isDisabled={{true}} />
```

## Invalid

```hbs preview-template
<VelvetInput @isInvalid={{true}} />
```

## Placeholder

```hbs preview-template
<VelvetInput @placeholder="Type something here..." />
```

## Types

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @type="number" />
  <VelvetInput @type="time" />
  <VelvetInput @type="date" />
  <VelvetInput @type="range" />
</DemoSpaceX>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`input-and-textarea.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/input-and-textarea.css).

| Class                    | Applied when           |
| ------------------------ | ---------------------- |
| `velvet-input`           | Always                 |
| `velvet-input-sm`        | `@size="sm"`           |
| `velvet-input-md`        | `@size="md"` (default) |
| `velvet-input-lg`        | `@size="lg"`           |
| `velvet-input-{variant}` | Any `@variant` value   |
| `velvet-input-invalid`   | `@isInvalid={{true}}`  |
| `velvet-input-pill`      | `@isPill={{true}}`     |
| `velvet-input-disabled`  | `@isDisabled={{true}}` |

## Generated Colors

Pass `colors: true` to generate the `primary` variant's border/outline colors from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property          | Used for                                        |
| ------------------------ | ----------------------------------------------- |
| `--velvet-neutral`       | Resting border color                            |
| `--velvet-neutral-hover` | Border color on `:hover`                        |
| `--velvet-primary`       | Border/outline color on `:focus`                |
| `--velvet-danger`        | Border/outline color when `@isInvalid={{true}}` |

## Signature

<!-- component-signature: velvet-input -->
