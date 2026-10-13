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

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`button-and-icon-button.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/button-and-icon-button.css).

| Class                                | Applied when                                        |
| ------------------------------------ | --------------------------------------------------- |
| `velvet-icon-button`                 | Always                                              |
| `velvet-icon-button-xs`              | `@size="xs"`                                        |
| `velvet-icon-button-sm`              | `@size="sm"`                                        |
| `velvet-icon-button-md`              | `@size="md"` (default)                              |
| `velvet-icon-button-lg`              | `@size="lg"`                                        |
| `velvet-icon-button-{variant}`       | Any `@variant` value                                |
| `velvet-icon-button-round`           | `@isRound={{true}}`                                 |
| `velvet-icon-button-disabled`        | `@isDisabled={{true}}`                              |
| `velvet-icon-button-expanded`        | `@isDisclosure={{true}}` and `@isExpanded={{true}}` |
| `velvet-icon-button-disclosure-icon` | Always (on the disclosure chevron icon)             |

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

<!-- component-signature: velvet-icon-button -->
