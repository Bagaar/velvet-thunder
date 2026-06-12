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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                        | Applied when           |
| ---------------------------- | ---------------------- |
| `velvet-icon-link`           | Always                 |
| `velvet-icon-link-sm`        | `@size="sm"`           |
| `velvet-icon-link-md`        | `@size="md"` (default) |
| `velvet-icon-link-lg`        | `@size="lg"`           |
| `velvet-icon-link-{variant}` | Any `@variant` value   |
| `velvet-icon-link-round`     | `@isRound={{true}}`    |

## Signature

<!-- component-signature: velvet-icon-link -->
