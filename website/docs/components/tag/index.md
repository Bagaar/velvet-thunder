# Tag

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @variant="primary">Tag</VelvetTag>
  <VelvetTag @variant="secondary">Tag</VelvetTag>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @size="sm">Tag</VelvetTag>
  <VelvetTag @size="md">Tag</VelvetTag>
  <VelvetTag @size="lg">Tag</VelvetTag>
</DemoSpaceX>
```

## Pill

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @isPill={{true}} @variant="primary">Tag</VelvetTag>
  <VelvetTag @isPill={{true}} @variant="secondary">Tag</VelvetTag>
</DemoSpaceX>
```

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details. This site's own default skin for them is defined in [`tag.css`](https://github.com/Bagaar/velvet-thunder/blob/main/website/tailwind/components/tag.css).

| Class                  | Applied when                   |
| ---------------------- | ------------------------------ |
| `velvet-tag`           | Always                         |
| `velvet-tag-sm`        | `@size="sm"`                   |
| `velvet-tag-md`        | `@size="md"` (default)         |
| `velvet-tag-lg`        | `@size="lg"`                   |
| `velvet-tag-primary`   | `@variant="primary"` (default) |
| `velvet-tag-{variant}` | Any custom `@variant` value    |
| `velvet-tag-pill`      | `@isPill={{true}}`             |

## Generated Colors

Pass `variants: [true, [...]]` to generate the `@variant` classes above from CSS custom properties instead of writing your own CSS — see [Generating Colors from CSS Variables](../../styling.md#generating-colors-from-css-variables) for details.

| Custom Property         | Used for         |
| ----------------------- | ---------------- |
| `--velvet-{variant}`    | Background color |
| `--velvet-on-{variant}` | Text color       |

## Signature

<!-- component-signature: velvet-tag -->
