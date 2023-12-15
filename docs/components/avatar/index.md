# Avatar

## Variants

```hbs preview-template
<DemoSpaceX>
  <VelvetAvatar @variant="emerald" @name="Jake Peralta" />
  <VelvetAvatar @variant="amber" @name="Jake Peralta" />
  <VelvetAvatar @variant="rose" @name="Jake Peralta" />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetAvatar @name="Jake Peralta" @size="sm" />
  <VelvetAvatar @name="Jake Peralta" @size="md" />
  <VelvetAvatar @name="Jake Peralta" @size="lg" />
</DemoSpaceX>
```

## Round

```hbs preview-template
<VelvetAvatar @isRound={{true}} @name="Jake Peralta" />
```

## Images

```hbs preview-template
<VelvetAvatar @src="https://avatars.githubusercontent.com/u/7403183" />
```

## Initials

```hbs preview-template
<VelvetAvatar @initials="JP" />
```

## No User Data

```hbs preview-template
<VelvetAvatar />
```

## Signature

<!-- component-signature: velvet-avatar -->

The order to determine what to display is as follows:

1. If the `@src` argument is provided, the image will be displayed
1. If the `@src` argument is **not** provided, the `@name` argument will be used to determine the initials
1. If the `@name` argument is **not** provided, the `@initials` argument will be displayed
1. If the `@initials` argument is **not** provided, a question mark will be displayed as a last resort
