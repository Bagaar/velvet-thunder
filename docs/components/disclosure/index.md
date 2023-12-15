---
manualDemoInsertion: true
---

# Disclosure

Uses [AutoAnimate](https://auto-animate.formkit.com/) underneath.

## Trigger

### Button

```hbs preview-template
<VelvetDisclosure>
  <:trigger as |disclosure|>
    <disclosure.Button>
      Toggle Content
    </disclosure.Button>
  </:trigger>
  <:content>
    <div class="bg-violet-500/25 h-52 mt-4 rounded-md"></div>
  </:content>
</VelvetDisclosure>
```

### Icon Button

```hbs preview-template
<VelvetDisclosure>
  <:trigger as |disclosure|>
    <disclosure.IconButton>
      <VelvetDisclosureIcon />
    </disclosure.IconButton>
  </:trigger>
  <:content>
    <div class="bg-violet-500/25 h-52 mt-4 rounded-md"></div>
  </:content>
</VelvetDisclosure>
```

### Custom

```hbs preview-template
<VelvetDisclosure>
  <:trigger as |disclosure|>
    <VelvetSwitch @onChange={{disclosure.toggle}}>
      Toggle Content
    </VelvetSwitch>
  </:trigger>
  <:content>
    <div class="bg-violet-500/25 h-52 mt-4 rounded-md"></div>
  </:content>
</VelvetDisclosure>
```

## Examples

[[demos-all]]

## Signature

<!-- component-signature: velvet-disclosure -->
