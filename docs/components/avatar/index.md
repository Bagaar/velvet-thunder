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

## Arguments

| Name        | Description                      | Type      | Default Value |
| ----------- | -------------------------------- | --------- | ------------- |
| `@initials` | The initials of the user.        | `String`  | `''`          |
| `@isRound`  | Indicate if the avatar is round. | `Boolean` | `false`       |
| `@name`     | The name of the user.            | `String`  | `''`          |
| `@size`     | The size of the avatar.          | `String`  | `'md'`        |
| `@src`      | The source of the image.         | `String`  | `''`          |
| `@variant`  | The appearance of the avatar.    | `String`  | `'primary'`   |

The order to determine what to display is as follows:

1. If the `@src` argument is provided, the image will be displayed
1. If the `@src` argument is **not** provided, the `@name` argument will be used to determine the initials
1. If the `@name` argument is **not** provided, the `@initials` argument will be displayed
1. If the `@initials` argument is **not** provided, a question mark will be displayed as a last resort
