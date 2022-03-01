# Avatar

## Colors

```hbs preview-template
<DemoSpaceX>
  <VelvetAvatar @color='emerald' @name='Jake Peralta' />
  <VelvetAvatar @color='amber' @name='Jake Peralta' />
  <VelvetAvatar @color='rose' @name='Jake Peralta' />
</DemoSpaceX>
```

## Sizes

```hbs preview-template
<DemoSpaceX>
  <VelvetAvatar @name='Jake Peralta' @size='sm' />
  <VelvetAvatar @name='Jake Peralta' @size='md' />
  <VelvetAvatar @name='Jake Peralta' @size='lg' />
</DemoSpaceX>
```

## Rounded

```hbs preview-template
<VelvetAvatar @isRounded={{true}} @name='Jake Peralta' />
```

## Images

```hbs preview-template
<VelvetAvatar @src='https://avatars.githubusercontent.com/u/7403183' />
```

## Initials

```hbs preview-template
<VelvetAvatar @initials='JP' />
```

## No User Data

```hbs preview-template
<VelvetAvatar />
```

## Arguments

| Name         | Description                        | Default Value |
| ------------ | ---------------------------------- | ------------- |
| `@color`     | The color of the avatar.           | `"primary"`   |
| `@initials`  | The initials of the user.          | `undefined`   |
| `@isRounded` | Indicate if the avatar is rounded. | `undefined`   |
| `@name`      | The name of the user.              | `undefined`   |
| `@size`      | The size of the avatar.            | `"md"`        |
| `@src`       | The source of the image.           | `undefined`   |

The order to determine what to display is as follows:

1. If the `@src` argument is provided, the image will be displayed
1. If the `@src` argument is **not** provided, the `@name` argument will be used to determine the initials
1. If the `@name` argument is **not** provided, the `@initials` argument will be displayed
1. If the `@initials` argument is **not** provided, a question mark will be displayed as a last resort
