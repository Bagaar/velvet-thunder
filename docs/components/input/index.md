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

| Name           | Description                        | Type       | Default Value |
| -------------- | ---------------------------------- | ---------- | ------------- |
| `@color`       | The ring color of the input.       | `String`   | `'primary'`   |
| `@isDisabled`  | Indicate if the input is disabled. | `Boolean`  | `false`       |
| `@isInvalid`   | Indicate if the input is invalid.  | `Boolean`  | `false`       |
| `@isRounded`   | Indicate if the input is rounded.  | `Boolean`  | `false`       |
| `@onChange`    | Handle the input's `change` event. | `Function` | `undefined`   |
| `@onInput`     | Handle the input's `input` event.  | `Function` | `undefined`   |
| `@placeholder` | The placeholder of the input.      | `String`   | `''`          |
| `@size`        | The size of the input.             | `String`   | `'md'`        |
| `@type`        | The type of the input.             | `String`   | `'text'`      |
| `@value`       | The value of the input.            | `String`   | `''`          |
