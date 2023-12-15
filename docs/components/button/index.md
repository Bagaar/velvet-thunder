---
manualDemoInsertion: true
---

# Button

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @variant="primary">Button</VelvetButton>
  <VelvetButton @variant="secondary">Button</VelvetButton>
  <VelvetButton @variant="ghost">Button</VelvetButton>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @size="xs">Button</VelvetButton>
  <VelvetButton @size="sm">Button</VelvetButton>
  <VelvetButton @size="md">Button</VelvetButton>
  <VelvetButton @size="lg">Button</VelvetButton>
</DemoSpaceX>
```

## Pill

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isPill={{true}} @variant="primary">Button</VelvetButton>
  <VelvetButton @isPill={{true}} @variant="secondary">Button</VelvetButton>
  <VelvetButton @isPill={{true}} @variant="ghost">Button</VelvetButton>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisabled={{true}} @variant="primary">Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant="secondary">Button</VelvetButton>
  <VelvetButton @isDisabled={{true}} @variant="ghost">Button</VelvetButton>
</DemoSpaceX>
```

## Loading

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isLoading={{true}} @variant="primary">Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant="secondary">Button</VelvetButton>
  <VelvetButton @isLoading={{true}} @variant="ghost">Button</VelvetButton>
</DemoSpaceX>
```

## Disclosure

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisclosure={{true}} @variant="primary">
    Button
  </VelvetButton>
  <VelvetButton @isDisclosure={{true}} @variant="secondary">
    Button
  </VelvetButton>
  <VelvetButton @isDisclosure={{true}} @variant="ghost">
    Button
  </VelvetButton>
</DemoSpaceX>
```

## Renderless

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isRenderless={{true}} @variant="primary" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant="secondary" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
  <VelvetButton @isRenderless={{true}} @variant="ghost" as |button|>
    <a class={{button.class}} href="#renderless">Link</a>
  </VelvetButton>
</DemoSpaceX>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-button -->
