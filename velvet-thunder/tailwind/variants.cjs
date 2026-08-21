'use strict';

const DEFAULT_VARIANT_NAMES = ['primary', 'secondary', 'ghost'];

// Consumers define these as CSS custom properties, following the
// `--velvet-{name}`, `--velvet-{name}-hover`, `--velvet-{name}-active`,
// `--velvet-{name}-disabled`, and `--velvet-on-{name}` naming contract.
function velvetVar(name, state) {
  // todo: add validation here to see variable really exists
  return state ? `var(--velvet-${name}-${state})` : `var(--velvet-${name})`;
}

function velvetOnVar(name) {
  // todo: add validation here to see variable really exists
  return `var(--velvet-on-${name})`;
}

// `variables: true` generates the default variant names; `variables: [...]`
// generates exactly the given names; anything else generates none.
function resolveVariantNames([variantsEnabled, variantNames]) {
  if (variantsEnabled === true) {
    return variantNames && Array.isArray(variantNames)
      ? variantNames
      : DEFAULT_VARIANT_NAMES;
  }

  return [];
}

// `factory` is a single function applied to every name — there is no
// per-name special-casing, so any variant name works the same way.
function generateVariants(variables, factory) {
  if (!variables) {
    return {};
  }
  return resolveVariantNames(variables).reduce((result, name) => {
    result[`&-${name}`] = factory(name);
    return result;
  }, {});
}

// For components with no variant classes to choose between (checkbox, radio,
// input, …) — there's nothing to pick a name from, just a `colors: true` /
// `colors: false` switch, so this takes a plain boolean rather than the
// `[enabled, names]` tuple `generateVariants` uses. `styles` is a plain style
// object, not a factory: these components hardcode which `--velvet-*` name(s)
// they read from (usually `velvetVar('primary')`), since there's nothing to pick.
function whenColorsEnabled(colors, styles) {
  return colors === true ? styles : {};
}

module.exports = {
  generateVariants,
  whenColorsEnabled,
  velvetVar,
  velvetOnVar,
};
