# Input

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetInput @size='sm' />
  <VelvetInput @size='md' />
  <VelvetInput @size='lg' />
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

| Name           | Description                           | Type       | Default Value |
| -------------- | ------------------------------------- | ---------- | ------------- |
| `@isDisabled`  | Indicate if the input is disabled.    | `Boolean`  | `false`       |
| `@isInvalid`   | Indicate if the input is invalid.     | `Boolean`  | `false`       |
| `@isPill`      | Indicate if the input is pill shaped. | `Boolean`  | `false`       |
| `@onChange`    | Handle the input's `change` event.    | `Function` | `undefined`   |
| `@onInput`     | Handle the input's `input` event.     | `Function` | `undefined`   |
| `@placeholder` | The placeholder of the input.         | `String`   | `''`          |
| `@size`        | The size of the input.                | `String`   | `'md'`        |
| `@type`        | The type of the input.                | `String`   | `'text'`      |
| `@value`       | The value of the input.               | `String`   | `''`          |
| `@variant`     | The appearance of the input.          | `String`   | `'primary'`   |
