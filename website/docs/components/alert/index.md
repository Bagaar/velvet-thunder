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

## Custom Icons

```hbs preview-template
<VelvetAlert @level="danger">
  <:icon as |icon|>
    <VelvetIcon::XMark class={{icon.class}} />
  </:icon>
  <:title>
    Danger Alert
  </:title>
  <:content>
    More info about this danger alert goes here. This example text is going to
    run a bit longer, so that you can see how spacing within an alert works with
    this kind of content.
  </:content>
</VelvetAlert>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`alert.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/alert.css).

| Class                  | Applied when            |
| ---------------------- | ----------------------- |
| `velvet-alert`         | Always (root element)   |
| `velvet-alert-danger`  | `@level="danger"`       |
| `velvet-alert-info`    | `@level="info"`         |
| `velvet-alert-success` | `@level="success"`      |
| `velvet-alert-warning` | `@level="warning"`      |
| `velvet-alert-header`  | Always (header wrapper) |
| `velvet-alert-icon`    | Always (icon element)   |
| `velvet-alert-title`   | Always (title wrapper)  |

## Generated Colors

Pass `variants: [true, [...]]` to generate colors for the `@level` values above from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details. Here `{variant}` refers to the `@level` name (`info`, `danger`, `warning`, `success`, …).

| Custom Property                  | Used for                                           |
| -------------------------------- | -------------------------------------------------- |
| `--velvet-{variant}`             | Background color, and the icon button's text color |
| `--velvet-on-{variant}`          | Text color, and the icon button's background color |
| `--velvet-{variant}-icon-hover`  | Icon button's background color on `:hover`         |
| `--velvet-{variant}-icon-active` | Icon button's background color on `:active`        |

## Signature

<!-- component-signature: velvet-alert -->
