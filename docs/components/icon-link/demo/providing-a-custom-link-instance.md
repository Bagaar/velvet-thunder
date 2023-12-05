# Providing a Custom Link Instance

If the `@to` argument is a valid route path, it is transformed internally to a
[`Link`](https://buschtoens.github.io/ember-link/api/classes/ember_link.Link.html)
instance. You can also provide a custom `Link` instance using ember-link's
[`{{link}}`](https://buschtoens.github.io/ember-link/helper.html#link-helper) helper.

```hbs template
<VelvetIconLink
  @to={{link "docs.components.icon-link" behavior=(hash prevent=false)}}
>
  <DemoLinkIcon />
</VelvetIconLink>
```
