---
manualDemoInsertion: true
---

# Icon Button

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @variant="primary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @variant="secondary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @variant="ghost">
    <DemoMenuIcon />
  </VelvetIconButton>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @size="xs">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @size="sm">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @size="md">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @size="lg">
    <DemoMenuIcon />
  </VelvetIconButton>
</DemoSpaceX>
```

## Round

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @isRound={{true}} @variant="primary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isRound={{true}} @variant="secondary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isRound={{true}} @variant="ghost">
    <DemoMenuIcon />
  </VelvetIconButton>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @isDisabled={{true}} @variant="primary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isDisabled={{true}} @variant="secondary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isDisabled={{true}} @variant="ghost">
    <DemoMenuIcon />
  </VelvetIconButton>
</DemoSpaceX>
```

## Loading

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @isLoading={{true}} @variant="primary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isLoading={{true}} @variant="secondary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isLoading={{true}} @variant="ghost">
    <DemoMenuIcon />
  </VelvetIconButton>
</DemoSpaceX>
```

## Disclosure

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @isDisclosure={{true}} @variant="primary" />
  <VelvetIconButton @isDisclosure={{true}} @variant="secondary" />
  <VelvetIconButton @isDisclosure={{true}} @variant="ghost" />
</DemoSpaceX>
```

## Expanded

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton
    @isDisclosure={{true}}
    @isExpanded={{true}}
    @variant="primary"
  />
  <VelvetIconButton
    @isDisclosure={{true}}
    @isExpanded={{true}}
    @variant="secondary"
  />
  <VelvetIconButton
    @isDisclosure={{true}}
    @isExpanded={{true}}
    @variant="ghost"
  />
</DemoSpaceX>
```

## Renderless

```hbs preview-template
<DemoSpaceX>
  <VelvetIconButton @isRenderless={{true}} @variant="primary" as |iconButton|>
    <a class={{iconButton.class}} href="#renderless">
      <DemoMenuIcon />
    </a>
  </VelvetIconButton>
  <VelvetIconButton @isRenderless={{true}} @variant="secondary" as |iconButton|>
    <a class={{iconButton.class}} href="#renderless">
      <DemoMenuIcon />
    </a>
  </VelvetIconButton>
  <VelvetIconButton @isRenderless={{true}} @variant="ghost" as |iconButton|>
    <a class={{iconButton.class}} href="#renderless">
      <DemoMenuIcon />
    </a>
  </VelvetIconButton>
</DemoSpaceX>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-icon-button -->
