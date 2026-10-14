'use strict';

const velvetThunder = require('@bagaar/velvet-thunder/tailwind');

// Only used to build the "CSS Variables" theme (see tailwind/themes/variables.css).
// The `variants` (choose from a list of names) and `colors` (single fixed
// accent, for components with no variant classes of their own) options below
// generate CSS-variable-driven classes on top of the structural ones, so this
// must stay out of tailwind.config.js — otherwise they'd end up in the
// always-loaded base tailwind.css for every theme.
//
// Deliberately no forms/typography plugins here: this file only ever needs
// `@tailwind components;` for velvetThunder's own classes. Adding those plugins
// would also re-emit their `.prose`/form component styles into this file, which
// load after the base tailwind.css and can win the cascade over utility-layer
// overrides (like `prose-a:no-underline`) that only exist in the base build.
//
// For the same reason `content` only points at velvetThunder's own files: v4
// has no `@tailwind components` equivalent (plugin components are emitted as
// utilities), so scanning the site's templates here would re-emit their
// utilities into this file too. v3 doesn't need the templates either, since
// the plugin safelists every `velvet-*` class.
module.exports = {
  content: [...velvetThunder.content()],
  darkMode: 'class',
  plugins: [
    velvetThunder.plugin({
      components: {
        alert: { variants: [true, ['info', 'danger', 'warning', 'success']] },
        avatar: { variants: [true, ['primary', 'emerald', 'amber', 'rose']] },
        button: { variants: [true] },
        checkbox: { colors: true },
        iconButton: { variants: [true] },
        iconLink: { variants: [true] },
        input: { colors: true },
        link: { variants: [true] },
        progress: { variants: [true, ['primary', 'emerald', 'amber', 'rose']] },
        radio: { colors: true },
        select: { colors: true },
        switch: { colors: true },
        tag: { variants: [true, ['primary', 'secondary']] },
        textarea: { colors: true },
        tooltip: { colors: true },
      },
    }),
  ],
};
