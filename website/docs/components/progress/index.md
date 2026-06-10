# Progress

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetProgress @variant="emerald" @value={{25}} />
  <VelvetProgress @variant="amber" @value={{50}} />
  <VelvetProgress @variant="rose" @value={{75}} />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetProgress @size="sm" @value={{25}} />
  <VelvetProgress @size="md" @value={{50}} />
  <VelvetProgress @size="lg" @value={{75}} />
</DemoSpaceX>
```

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                       | Applied when                       |
| --------------------------- | ---------------------------------- |
| `velvet-progress`           | Always (root element)              |
| `velvet-progress-sm`        | `@size="sm"`                       |
| `velvet-progress-md`        | `@size="md"` (default)             |
| `velvet-progress-lg`        | `@size="lg"`                       |
| `velvet-progress-{variant}` | Any `@variant` value               |
| `velvet-progress-line`      | Always (on the inner progress bar) |

## Signature

<!-- component-signature: velvet-progress -->
