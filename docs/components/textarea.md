# Textarea

## Arguments

| Name          | Description                            | Default Value |
| ------------- | -------------------------------------- | ------------- |
| `@color`      | The ring color of the textarea.        | `"primary"`   |
| `@isDisabled` | Indicates if the textarea is disabled. | `false`       |
| `@isInvalid`  | Indicates if the textarea is invalid.  | `false`       |
| `@onChange`   | Handle the textarea's `change` event.  | `undefined`   |
| `@onInput`    | Handle the textarea's `input` event.   | `undefined`   |
| `@size`       | The size of the textarea.              | `"md"`        |
| `@value`      | The value of the textarea.             | `undefined`   |

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetTextarea @color='green' />
  <VelvetTextarea @color='orange' />
  <VelvetTextarea @color='red' />
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetTextarea @size='sm' />
  <VelvetTextarea @size='md' />
  <VelvetTextarea @size='lg' />
</DocsSpaceX>
```

## Disabled

```hbs preview-template
<VelvetTextarea @isDisabled={{true}} />
```

## Invalid

```hbs preview-template
<VelvetTextarea @isInvalid={{true}} />
```
