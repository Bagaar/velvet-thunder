# Input

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @color='emerald' />
  <VelvetInput @color='amber' />
  <VelvetInput @color='rose' />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @size='sm' />
  <VelvetInput @size='md' />
  <VelvetInput @size='lg' />
</DemoSpaceX>
```

## Rounded

```hbs preview-template
<VelvetInput @isRounded={{true}} />
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
<VelvetInput @placeholder='Type something here...' />
```

## Types

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @type='number' />
  <VelvetInput @type='time' />
  <VelvetInput @type='date' />
</DemoSpaceX>
```

## Arguments

| Name           | Description                        | Default Value |
| -------------- | ---------------------------------- | ------------- |
| `@color`       | The ring color of the input.       | `"primary"`   |
| `@isDisabled`  | Indicate if the input is disabled. | `undefined`   |
| `@isInvalid`   | Indicate if the input is invalid.  | `undefined`   |
| `@isRounded`   | Indicate if the input is rounded.  | `undefined`   |
| `@onChange`    | Handle the input's `change` event. | `undefined`   |
| `@onInput`     | Handle the input's `input` event.  | `undefined`   |
| `@placeholder` | The placeholder of the input.      | `undefined`   |
| `@size`        | The size of the input.             | `"md"`        |
| `@type`        | The type of the input.             | `"text"`      |
| `@value`       | The value of the input.            | `undefined`   |
