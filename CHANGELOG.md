# Changelog

## Release (2026-11-07)

* @bagaar/velvet-thunder 0.6.1 (patch)

#### :house: Internal
* `@bagaar/velvet-thunder`
  * [#689](https://github.com/Bagaar/velvet-thunder/pull/689) chore(deps-patch): update dependency @glint/template from 1.11.0 to 1.11.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#684](https://github.com/Bagaar/velvet-thunder/pull/684) chore(deps-minor): update dependency rollup from 4.66.0 to 4.67.4 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#674](https://github.com/Bagaar/velvet-thunder/pull/674) chore(deps-major): update actions/checkout action from v6.1.0 to v7.0.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#675](https://github.com/Bagaar/velvet-thunder/pull/675) chore(deps-major): update actions/setup-node action from v6.5.0 to v7.1.0 ([@renovate[bot]](https://github.com/apps/renovate))

#### Committers: 1
- Renovate [Bot] ([@renovate](https://github.com/apps/renovate))

## Release (2026-11-05)

* @bagaar/velvet-thunder 0.6.0 (minor)

#### :rocket: Enhancement
* `@bagaar/velvet-thunder`
  * [#672](https://github.com/Bagaar/velvet-thunder/pull/672) feat: support Ember v7 ([@gvdp](https://github.com/gvdp))

#### :house: Internal
* Other
  * [#681](https://github.com/Bagaar/velvet-thunder/pull/681) chore(deps-major): update pnpm/action-setup action to v6.1.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#677](https://github.com/Bagaar/velvet-thunder/pull/677) chore(deps-major): update dependency @embroider/test-setup from 3.0.3 to 4.0.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#673](https://github.com/Bagaar/velvet-thunder/pull/673) chore(deps): pin dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#657](https://github.com/Bagaar/velvet-thunder/pull/657) chore(deps-minor): update dependency @glimmer/component from 2.1.1 to 2.2.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#664](https://github.com/Bagaar/velvet-thunder/pull/664) chore(deps-minor): update node.js from v24.21.0 to v24.22.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `@bagaar/velvet-thunder`
  * [#678](https://github.com/Bagaar/velvet-thunder/pull/678) chore(deps-major): update dependency eslint-plugin-ember from 12.7.5 to 13.9.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#676](https://github.com/Bagaar/velvet-thunder/pull/676) chore(deps-major): update dependency @embroider/addon-dev from 7.1.6 to 8.4.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#669](https://github.com/Bagaar/velvet-thunder/pull/669) chore(deps-major): update dependency @embroider/addon-dev from 4.3.1 to 7.1.6 ([@renovate[bot]](https://github.com/apps/renovate))

#### Committers: 2
- Renovate [Bot] ([@renovate](https://github.com/apps/renovate))
- [@gvdp](https://github.com/gvdp)

## [0.5.0](https://github.com/Bagaar/velvet-thunder/compare/0.4.0...0.5.0) (2026-11-04)

### Features

* add focus and disabled text/border variables to button variants ([3191614](https://github.com/Bagaar/velvet-thunder/commit/319161434c82855852e583b3843020027007dc07))
* give tag variants and extra subtle option instead of the full variant color as background ([472fae9](https://github.com/Bagaar/velvet-thunder/commit/472fae98d46b1712278b6f9580e6e657c1ec1b97))

### Bug Fixes

* add cursor pointer styling to buttons in Tailwind v4 implementations ([88d5a62](https://github.com/Bagaar/velvet-thunder/commit/88d5a62398072fcd4bbba44b384e55a6f0caa12a))
* give secondary tag a border default when using variables styling ([2bbace8](https://github.com/Bagaar/velvet-thunder/commit/2bbace808b011865dd5e715bb5968292de29a9ff))

## [0.4.0](https://github.com/Bagaar/velvet-thunder/compare/0.3.0...0.4.0) (2026-10-13)

### Features

* add option to style components using default css variables ([913a44a](https://github.com/Bagaar/velvet-thunder/commit/913a44a5ee055d4586ba83f40ce9e91cf6cfe8e3))

### Reverts

* Revert "chore(deps-minor): update dependency webpack from 5.106.1 to 5.111.1 (#622)" ([371c348](https://github.com/Bagaar/velvet-thunder/commit/371c348e334b7d2ce19c9fb653af8cb73054e1aa)), references [#622](https://github.com/Bagaar/velvet-thunder/issues/622)

## [0.3.0](https://github.com/Bagaar/velvet-thunder/compare/0.2.1...0.3.0) (2026-07-09)

### Features

* allow plugin to be used with tailwind [@plugin](https://github.com/plugin) directive in css instead of js config file ([7662c0c](https://github.com/Bagaar/velvet-thunder/commit/7662c0c50940e1fc5681ed516047cfd211a84771))

## [0.2.1](https://github.com/Bagaar/velvet-thunder/compare/0.2.0...0.2.1) (2026-06-12)

### Bug Fixes

* add directory to npm repository setting ([0a5ffce](https://github.com/Bagaar/velvet-thunder/commit/0a5ffce4cdec80fd37cc4270c395536214b64829))
* use theming variables instead of css classes in plugin to allow Tailwind v4 to work ([6c20601](https://github.com/Bagaar/velvet-thunder/commit/6c20601f45993c92fae7f2bfb74786d5d123a8cf))

## [0.2.0](https://github.com/Bagaar/velvet-thunder/compare/0.1.1...0.2.0) (2026-04-10)

### Features

* support Glimmer v2 ([b8a3c30](https://github.com/Bagaar/velvet-thunder/commit/b8a3c30e98e1f880cf27d39540699187a9aaa87b))

## [0.1.1](https://github.com/Bagaar/velvet-thunder/compare/0.1.0...0.1.1) (2026-03-28)

## [0.1.0](https://github.com/Bagaar/velvet-thunder/compare/0.0.4...0.1.0) (2026-03-06)

### Features

* add option to hide trigger when Velvet Disclosure is opened ([bdeb493](https://github.com/Bagaar/velvet-thunder/commit/bdeb4937c57bc5e94d6b1fb6febf2ab74b71af1f))

## [0.0.4](https://github.com/bagaar/velvet-thunder/compare/0.0.3...0.0.4) (2025-10-23)

## 0.0.3 (2025-10-23)

## [0.0.2](https://github.com/bagaar/velvet-thunder/compare/0.0.1...0.0.2) (2025-02-19)

### Bug Fixes

* change dropdown trigger events to prevent content from immediately closing again ([f94e8d8](https://github.com/bagaar/velvet-thunder/commit/f94e8d89deed48398aee21566332b35da08ea6ed))
* pass correct props so standalone icon button also works as dropdown trigger ([ce4c4ef](https://github.com/bagaar/velvet-thunder/commit/ce4c4ef9ece95af67aaac3d634407d42f8c5df74))
* reference correct workspace packages ([3756d9a](https://github.com/bagaar/velvet-thunder/commit/3756d9ac790830b19e5c5e3e9518b8c4e6266075))
