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

## Expanded

```hbs preview-template
<DemoSpaceX>
  <VelvetButton @isDisclosure={{true}} @isExpanded={{true}} @variant="primary">
    Button
  </VelvetButton>
  <VelvetButton
    @isDisclosure={{true}}
    @isExpanded={{true}}
    @variant="secondary"
  >
    Button
  </VelvetButton>
  <VelvetButton @isDisclosure={{true}} @isExpanded={{true}} @variant="ghost">
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

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`button-and-icon-button.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/button-and-icon-button.css).

| Class                           | Applied when                                        |
| ------------------------------- | --------------------------------------------------- |
| `velvet-button`                 | Always                                              |
| `velvet-button-xs`              | `@size="xs"`                                        |
| `velvet-button-sm`              | `@size="sm"`                                        |
| `velvet-button-md`              | `@size="md"` (default)                              |
| `velvet-button-lg`              | `@size="lg"`                                        |
| `velvet-button-{variant}`       | Any `@variant` value                                |
| `velvet-button-pill`            | `@isPill={{true}}`                                  |
| `velvet-button-disabled`        | `@isDisabled={{true}}`                              |
| `velvet-button-expanded`        | `@isDisclosure={{true}}` and `@isExpanded={{true}}` |
| `velvet-button-disclosure-icon` | Always (on the disclosure chevron icon)             |

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

<!-- component-signature: velvet-button -->
