---
order: 3
---

# Customizing Styles

## How the Plugin Works

`velvetThunder.plugin()` generates **structural** CSS for all `velvet-*` component classes — layout, sizing, spacing, transitions, and disabled cursors. Colors, borders, and hover/focus states are intentionally left out. This is what makes Velvet Thunder semi-headless: the plugin gives components their shape, and you give them their look.

The plugin also adds `.velvet-outline` and `.velvet-outline-offset-0` utility classes used internally for focus rings (see [Outline](./utilities/outline.md)).

### Tailwind v3

The plugin safelists all `/^velvet-/` classes so Tailwind never purges them, even when they are composed dynamically at runtime.

### Tailwind v4

The safelist is not respected in Tailwind v4. Instead, `velvetThunder.content()` points Tailwind at the compiled component files so it can detect which classes are used. Classes that are composed dynamically at runtime (e.g. `velvet-button-${size}`) will not appear as literal strings in those files and may be omitted from the output. Explicitly use every variant class you need somewhere in your own templates, or write them out in your stylesheet, to ensure they are included.

## Opting Out of Components

Pass `false` for any component to skip generating its structural styles:

```js
velvetThunder.plugin({
  components: {
    button: false,
  },
});
```

## Adding Visual Styles

Create a CSS file and target the `velvet-*` classes. Use `@apply` to compose Tailwind utilities, or write plain CSS.

The class naming convention is:

- `.velvet-{component}` — the root element
- `.velvet-{component}-{variant}` — a named variant (`primary`, `secondary`, `ghost`, …)
- `.velvet-{component}-{state}` — a state modifier (`disabled`, `invalid`, …)
- `.velvet-{component}-{part}` — a sub-element of a compound component

### Example: Tag

The `VelvetTag` component applies `.velvet-tag`, `.velvet-tag-{size}`, and `.velvet-tag-{variant}` to its root element. To style the `primary` and `secondary` variants:

```css
.velvet-tag-primary {
  @apply bg-violet-500 text-white;
}

.velvet-tag-secondary {
  @apply bg-violet-500/20 text-violet-600;
}
```

Because `@variant` accepts any string, you can also introduce entirely new variants this way — just pass the name as `@variant` and add a matching CSS class.

All other components follow a similar pattern, you can look at the rendered output in each components demo page to see which classes can be targeted.
