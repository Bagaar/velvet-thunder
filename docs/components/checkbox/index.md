---
manualDemoInsertion: true
---

# Checkbox

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isChecked={{true}} @size="sm">Small</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size="md">Medium</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @size="lg">Large</VelvetCheckbox>
</DemoSpaceX>
```

## Disabled

```hbs preview-template
<DemoSpaceX>
  <VelvetCheckbox @isDisabled={{true}}>Disabled</VelvetCheckbox>
  <VelvetCheckbox @isChecked={{true}} @isDisabled={{true}}>
    Disabled
  </VelvetCheckbox>
</DemoSpaceX>
```

## Indeterminate

```hbs preview-template
<VelvetCheckbox @isIndeterminate={{true}}>Indeterminate</VelvetCheckbox>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-checkbox -->
