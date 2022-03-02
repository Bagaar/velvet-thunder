# Progress

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetProgress @color='emerald' @value={{25}} />
  <VelvetProgress @color='amber' @value={{50}} />
  <VelvetProgress @color='rose' @value={{75}} />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetProgress @size='sm' @value={{25}} />
  <VelvetProgress @size='md' @value={{50}} />
  <VelvetProgress @size='lg' @value={{75}} />
</DemoSpaceX>
```

## Arguments

| Name     | Description                                  | Default Value |
| -------- | -------------------------------------------- | ------------- |
| `@color` | The color of the progress.                   | `"primary"`   |
| `@max`   | The maximum value of the progress.           | `100`         |
| `@min`   | The minimum value of the progress.           | `0`           |
| `@size`  | The size of the progress.                    | `"md"`        |
| `@text`  | The text describing the process in progress. | `"md"`        |
| `@value` | The value of the progress.                   | `0`           |
