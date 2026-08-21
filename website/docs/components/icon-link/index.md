---
manualDemoInsertion: true
---

# Icon Link

Requires the use of [ember-link](https://buschtoens.github.io/ember-link/).

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetIconLink @to="/docs/components/icon-link" @variant="primary">
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink @to="/docs/components/icon-link" @variant="secondary">
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink @to="/docs/components/icon-link" @variant="ghost">
    <DemoLinkIcon />
  </VelvetIconLink>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetIconLink @size="xs" @to="/docs/components/icon-link">
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink @size="sm" @to="/docs/components/icon-link">
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink @size="md" @to="/docs/components/icon-link">
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink @size="lg" @to="/docs/components/icon-link">
    <DemoLinkIcon />
  </VelvetIconLink>
</DemoSpaceX>
```

## Round

```hbs preview-template
<DemoSpaceX>
  <VelvetIconLink
    @isRound={{true}}
    @to="/docs/components/icon-link"
    @variant="primary"
  >
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink
    @isRound={{true}}
    @to="/docs/components/icon-link"
    @variant="secondary"
  >
    <DemoLinkIcon />
  </VelvetIconLink>
  <VelvetIconLink
    @isRound={{true}}
    @to="/docs/components/icon-link"
    @variant="ghost"
  >
    <DemoLinkIcon />
  </VelvetIconLink>
</DemoSpaceX>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`link-and-icon-link.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/link-and-icon-link.css).

| Class                        | Applied when           |
| ---------------------------- | ---------------------- |
| `velvet-icon-link`           | Always                 |
| `velvet-icon-link-sm`        | `@size="sm"`           |
| `velvet-icon-link-md`        | `@size="md"` (default) |
| `velvet-icon-link-lg`        | `@size="lg"`           |
| `velvet-icon-link-{variant}` | Any `@variant` value   |
| `velvet-icon-link-round`     | `@isRound={{true}}`    |

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

<!-- component-signature: velvet-icon-link -->
