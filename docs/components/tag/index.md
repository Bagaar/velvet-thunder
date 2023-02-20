# Tag

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @variant="primary">Tag</VelvetTag>
  <VelvetTag @variant="secondary">Tag</VelvetTag>
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @size="sm">Tag</VelvetTag>
  <VelvetTag @size="md">Tag</VelvetTag>
  <VelvetTag @size="lg">Tag</VelvetTag>
</DemoSpaceX>
```

## Pill

```hbs preview-template
<DemoSpaceX>
  <VelvetTag @isPill={{true}} @variant="primary">Tag</VelvetTag>
  <VelvetTag @isPill={{true}} @variant="secondary">Tag</VelvetTag>
</DemoSpaceX>
```

## Arguments

| Name       | Description                         | Type      | Default Value |
| ---------- | ----------------------------------- | --------- | ------------- |
| `@isPill`  | Indicate if the tag is pill shaped. | `Boolean` | `false`       |
| `@size`    | The size of the tag.                | `String`  | `'md'`        |
| `@variant` | The appearance of the tag.          | `String`  | `'primary'`   |
