---
manualDemoInsertion: true
---

# Input

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @size="sm" />
  <VelvetInput @size="md" />
  <VelvetInput @size="lg" />
</DemoSpaceX>
```

## Pill

```hbs preview-template
<VelvetInput @isPill={{true}} />
```

## Disabled

```hbs preview-template
<VelvetInput @isDisabled={{true}} />
```

## Invalid

```hbs preview-template
<VelvetInput @isInvalid={{true}} />
```

## Placeholder

```hbs preview-template
<VelvetInput @placeholder="Type something here..." />
```

## Types

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @type="number" />
  <VelvetInput @type="time" />
  <VelvetInput @type="date" />
  <VelvetInput @type="range" />
</DemoSpaceX>
```

## Examples

[[demos-all]]

## CSS Classes

The following classes are applied by the component and can be targeted to fully customize its appearance — see the [styling guide](../../styling.md) for details.

| Class                    | Applied when           |
| ------------------------ | ---------------------- |
| `velvet-input`           | Always                 |
| `velvet-input-sm`        | `@size="sm"`           |
| `velvet-input-md`        | `@size="md"` (default) |
| `velvet-input-lg`        | `@size="lg"`           |
| `velvet-input-{variant}` | Any `@variant` value   |
| `velvet-input-invalid`   | `@isInvalid={{true}}`  |
| `velvet-input-pill`      | `@isPill={{true}}`     |
| `velvet-input-disabled`  | `@isDisabled={{true}}` |

## Signature

<!-- component-signature: velvet-input -->
