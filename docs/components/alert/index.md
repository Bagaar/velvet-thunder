---
manualDemoInsertion: true
---

# Alert

## Levels

```hbs preview-template
<DemoSpaceY>
  <VelvetAlert @level="danger">
    <:title>
      Danger Alert
    </:title>
    <:content>
      More info about this danger alert goes here. This example text is going to
      run a bit longer, so that you can see how spacing within an alert works
      with this kind of content.
    </:content>
  </VelvetAlert>

  <VelvetAlert @level="info">
    <:title>
      Info Alert
    </:title>
    <:content>
      More info about this info alert goes here. This example text is going to
      run a bit longer, so that you can see how spacing within an alert works
      with this kind of content.
    </:content>
  </VelvetAlert>

  <VelvetAlert @level="success">
    <:title>
      Success Alert
    </:title>
    <:content>
      More info about this success alert goes here. This example text is going
      to run a bit longer, so that you can see how spacing within an alert works
      with this kind of content.
    </:content>
  </VelvetAlert>

  <VelvetAlert @level="warning">
    <:title>
      Warning Alert
    </:title>
    <:content>
      More info about this warning alert goes here. This example text is going
      to run a bit longer, so that you can see how spacing within an alert works
      with this kind of content.
    </:content>
  </VelvetAlert>
</DemoSpaceY>
```

## Custom Icon

```hbs preview-template
<VelvetAlert @level="info">
  <:icon as |icon|>
    <DemoLinkIcon class={{icon.class}} />
  </:icon>
  <:title>
    Info Alert
  </:title>
  <:content>
    More info about this info alert goes here. This example text is going to run
    a bit longer, so that you can see how spacing within an alert works with
    this kind of content.
  </:content>
</VelvetAlert>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-alert -->
