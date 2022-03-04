# Textarea

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetTextarea @color='emerald' />
  <VelvetTextarea @color='amber' />
  <VelvetTextarea @color='rose' />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetTextarea @size='sm' />
  <VelvetTextarea @size='md' />
  <VelvetTextarea @size='lg' />
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<VelvetTextarea @isDisabled={{true}} />
```

## Invalid

```hbs preview-template
<VelvetTextarea @isInvalid={{true}} />
```

## Placeholder

```hbs preview-template
<VelvetTextarea @placeholder='Type something here...' />
```

## Arguments

| Name           | Description                           | Type       | Default Value |
| -------------- | ------------------------------------- | ---------- | ------------- |
| `@color`       | The ring color of the textarea.       | `String`   | `'primary'`   |
| `@isDisabled`  | Indicate if the textarea is disabled. | `Boolean`  | `false`       |
| `@isInvalid`   | Indicate if the textarea is invalid.  | `Boolean`  | `false`       |
| `@onChange`    | Handle the textarea's `change` event. | `Function` | `undefined`   |
| `@onInput`     | Handle the textarea's `input` event.  | `Function` | `undefined`   |
| `@placeholder` | The placeholder of the textarea.      | `String`   | `''`          |
| `@size`        | The size of the textarea.             | `String`   | `'md'`        |
| `@value`       | The value of the textarea.            | `String`   | `''`          |
