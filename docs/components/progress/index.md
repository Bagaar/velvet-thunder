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

## Arguments

| Name       | Description                                  | Type     | Default Value |
| ---------- | -------------------------------------------- | -------- | ------------- |
| `@max`     | The maximum value of the progress.           | `Number` | `100`         |
| `@min`     | The minimum value of the progress.           | `Number` | `0`           |
| `@size`    | The size of the progress.                    | `String` | `'md'`        |
| `@text`    | The text describing the process in progress. | `String` | `''`          |
| `@value`   | The value of the progress.                   | `Number` | `0`           |
| `@variant` | The appearance of the progress.              | `String` | `'primary'`   |
