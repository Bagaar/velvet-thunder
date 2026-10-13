Handled by [release-it](https://github.com/release-it/release-it). Just merge to the release branch when ready and the `Release` GitHub workflow will take care of the rest.

## How publishing works

- No npm token is stored in the repo. The workflow authenticates via npm [Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC), configured on npmjs.com for `Bagaar/velvet-thunder` and `release.yml`.
- release-it's own npm publish is disabled; instead the `after:bump` hook in `velvet-thunder/.release-it.json` runs `npm stage publish`.
- This is a **staged release only**: the new version is **not live** until a maintainer approves it with 2FA on npmjs.com (or via `npm stage list`). Note that the git tag and push to `main` happen before that approval.
