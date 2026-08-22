---
manualDemoInsertion: true
---

# Link

Requires the use of [ember-link](https://buschtoens.github.io/ember-link/).

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetLink @to="/docs/components/link" @variant="primary">
    Link
  </VelvetLink>
  <VelvetLink @to="/docs/components/link" @variant="secondary">
    Link
  </VelvetLink>
  <VelvetLink @to="/docs/components/link" @variant="ghost">
    Link
  </VelvetLink>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetLink @size="xs" @to="/docs/components/link">
    Link
  </VelvetLink>
  <VelvetLink @size="sm" @to="/docs/components/link">
    Link
  </VelvetLink>
  <VelvetLink @size="md" @to="/docs/components/link">
    Link
  </VelvetLink>
  <VelvetLink @size="lg" @to="/docs/components/link">
    Link
  </VelvetLink>
</DemoSpaceX>
```

## Pill

```hbs preview-template
<DemoSpaceX>
  <VelvetLink @isPill={{true}} @to="/docs/components/link" @variant="primary">
    Link
  </VelvetLink>
  <VelvetLink @isPill={{true}} @to="/docs/components/link" @variant="secondary">
    Link
  </VelvetLink>
  <VelvetLink @isPill={{true}} @to="/docs/components/link" @variant="ghost">
    Link
  </VelvetLink>
</DemoSpaceX>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`link-and-icon-link.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/link-and-icon-link.css).

| Class                   | Applied when           |
| ----------------------- | ---------------------- |
| `velvet-link`           | Always                 |
| `velvet-link-sm`        | `@size="sm"`           |
| `velvet-link-md`        | `@size="md"` (default) |
| `velvet-link-lg`        | `@size="lg"`           |
| `velvet-link-{variant}` | Any `@variant` value   |
| `velvet-link-pill`      | `@isPill={{true}}`     |

## Generated Colors

Pass `variants: [true]` (or `variants: [true, [...]]` to pick specific names) to generate the `@variant` classes above from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property               | Used for                        |
| ----------------------------- | ------------------------------- |
| `--velvet-{variant}`          | Background color                |
| `--velvet-on-{variant}`       | Text color                      |
| `--velvet-{variant}-border`   | Border color                    |
| `--velvet-{variant}-hover`    | Background color on `:hover`    |
| `--velvet-{variant}-active`   | Background color on `:active`   |
| `--velvet-{variant}-disabled` | Background color on `:disabled` |

## Signature

<!-- component-signature: velvet-link -->
