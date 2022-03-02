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

| Name           | Description                           | Default Value |
| -------------- | ------------------------------------- | ------------- |
| `@color`       | The ring color of the textarea.       | `"primary"`   |
| `@isDisabled`  | Indicate if the textarea is disabled. | `undefined`   |
| `@isInvalid`   | Indicate if the textarea is invalid.  | `undefined`   |
| `@onChange`    | Handle the textarea's `change` event. | `undefined`   |
| `@onInput`     | Handle the textarea's `input` event.  | `undefined`   |
| `@placeholder` | The placeholder of the textarea.      | `undefined`   |
| `@size`        | The size of the textarea.             | `"md"`        |
| `@value`       | The value of the textarea.            | `undefined`   |
