# Input

## Arguments

| Name          | Description                         | Default Value |
| ------------- | ----------------------------------- | ------------- |
| `@color`      | The ring color of the input.        | `"primary"`   |
| `@isDisabled` | Indicates if the input is disabled. | `false`       |
| `@isInvalid`  | Indicates if the input is invalid.  | `false`       |
| `@isRounded`  | Indicates if the input is rounded.  | `false`       |
| `@onChange`   | Handle the input's `change` event.  | `undefined`   |
| `@onInput`    | Handle the input's `input` event.   | `undefined`   |
| `@size`       | The size of the input.              | `"md"`        |
| `@type`       | The type of the input.              | `"text"`      |
| `@value`      | The value of the input.             | `undefined`   |

## Colors

```hbs preview-template
<DocsSpaceX>
  <VelvetInput @color='green' />
  <VelvetInput @color='orange' />
  <VelvetInput @color='red' />
</DocsSpaceX>
```

## Sizes

```hbs preview-template
<DocsSpaceX>
  <VelvetInput @size='sm' />
  <VelvetInput @size='md' />
  <VelvetInput @size='lg' />
</DocsSpaceX>
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

## Types

```hbs preview-template
<DocsSpaceX>
  <VelvetInput @type='number' />
  <VelvetInput @type='time' />
  <VelvetInput @type='date' />
</DocsSpaceX>
```
