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

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                  | Applied when                   |
| ---------------------- | ------------------------------ |
| `velvet-tag`           | Always                         |
| `velvet-tag-sm`        | `@size="sm"`                   |
| `velvet-tag-md`        | `@size="md"` (default)         |
| `velvet-tag-lg`        | `@size="lg"`                   |
| `velvet-tag-primary`   | `@variant="primary"` (default) |
| `velvet-tag-{variant}` | Any custom `@variant` value    |
| `velvet-tag-pill`      | `@isPill={{true}}`             |

## Signature

<!-- component-signature: velvet-tag -->
