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

## Arguments

<!-- args-table: velvet-icon-link -->
