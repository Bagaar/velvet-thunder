# Spinner

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetSpinner @size="xs" />
  <VelvetSpinner @size="sm" />
  <VelvetSpinner @size="md" />
  <VelvetSpinner @size="lg" />
  <VelvetSpinner @size="xl" />
</DemoSpaceX>
```

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                  | Applied when                      |
| ---------------------- | --------------------------------- |
| `velvet-spinner`       | Always (root `<svg>`)             |
| `velvet-spinner-sm`    | `@size="sm"`                      |
| `velvet-spinner-md`    | `@size="md"` (default)            |
| `velvet-spinner-lg`    | `@size="lg"`                      |
| `velvet-spinner-track` | Always (on the background circle) |
| `velvet-spinner-line`  | Always (on the animated arc)      |

## Signature

<!-- component-signature: velvet-spinner -->
