# Select

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetSelect @size="sm" as |select|>
    <select.Option @value="first">First</select.Option>
    <select.Option @value="second">Second</select.Option>
    <select.Option @value="third">Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @size="md" as |select|>
    <select.Option @value="first">First</select.Option>
    <select.Option @value="second">Second</select.Option>
    <select.Option @value="third">Third</select.Option>
  </VelvetSelect>
  <VelvetSelect @size="lg" as |select|>
    <select.Option @value="first">First</select.Option>
    <select.Option @value="second">Second</select.Option>
    <select.Option @value="third">Third</select.Option>
  </VelvetSelect>
</DemoSpaceX>
```

## Selected

```hbs preview-template
<VelvetSelect @selected="second" as |select|>
  <select.Option @value="first">First</select.Option>
  <select.Option @value="second">Second</select.Option>
  <select.Option @value="third">Third</select.Option>
</VelvetSelect>
```

## Pill

```hbs preview-template
<VelvetSelect @isPill={{true}} as |select|>
  <select.Option @value="first">First</select.Option>
  <select.Option @value="second">Second</select.Option>
  <select.Option @value="third">Third</select.Option>
</VelvetSelect>
```

## Disabled

```hbs preview-template
<VelvetSelect @isDisabled={{true}} as |select|>
  <select.Option @value="first">First</select.Option>
  <select.Option @value="second">Second</select.Option>
  <select.Option @value="third">Third</select.Option>
</VelvetSelect>
```

## Invalid

```hbs preview-template
<VelvetSelect @isInvalid={{true}} as |select|>
  <select.Option @value="first">First</select.Option>
  <select.Option @value="second">Second</select.Option>
  <select.Option @value="third">Third</select.Option>
</VelvetSelect>
```

## Arguments

<!-- args-table: velvet-select -->

### Option Arguments

<!-- args-table: velvet-select/option -->

## Testing

Use the `velvetSelect` test helper to select a specific value for a
`VelvetSelect` component.

```js
import { velvetSelect } from "velvet-thunder/test-support";

// Select by index:
await velvetSelect(".velvet-select", { index: 0 });

// Select by text:
await velvetSelect(".velvet-select", { text: "First" });
```
