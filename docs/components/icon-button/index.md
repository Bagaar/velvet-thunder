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
  <VelvetIconButton @isDisclosure={{true}} @variant="primary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isDisclosure={{true}} @variant="secondary">
    <DemoMenuIcon />
  </VelvetIconButton>
  <VelvetIconButton @isDisclosure={{true}} @variant="ghost">
    <DemoMenuIcon />
  </VelvetIconButton>
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

## Arguments

| Name            | Description                                                 | Type       | Default Value |
| --------------- | ----------------------------------------------------------- | ---------- | ------------- |
| `@isDisabled`   | Indicate if the icon button is disabled.                    | `Boolean`  | `false`       |
| `@isDisclosure` | Indicate if the icon button discloses content.              | `Boolean`  | `false`       |
| `@isLoading`    | Indicate if the icon button should display a loading state. | `Boolean`  | `false`       |
| `@isRenderless` | Make the icon button renderless.                            | `Boolean`  | `false`       |
| `@isRound`      | Indicate if the icon button is round.                       | `Boolean`  | `false`       |
| `@onClick`      | Handle the icon button's `click` event.                     | `Function` | `undefined`   |
| `@size`         | The size of the icon button.                                | `String`   | `'md'`        |
| `@type`         | The type of the icon button.                                | `String`   | `'button'`    |
| `@variant`      | The appearance of the icon button.                          | `String`   | `'primary'`   |
