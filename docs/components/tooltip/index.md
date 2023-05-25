# Tooltip

Uses [Floating UI](https://floating-ui.com/) underneath.

## Placement

```hbs preview-template
<DemoSpaceX>
  <VelvetTooltip @placement="top-start" as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>Top Start</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @placement="top" as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>Top</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @placement="top-end" as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>Top End</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>
</DemoSpaceX>
```

## Offset

```hbs preview-template
<DemoSpaceX>
  <VelvetTooltip @offset={{4}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>4 Pixels Offset</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @offset={{8}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>8 Pixels Offset</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @offset={{12}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>12 Pixels Offset</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>
</DemoSpaceX>
```

## Custom Content

```hbs preview-template
<DemoSpaceX>
  <VelvetTooltip as |tooltip|>
    <VelvetAvatar @name="Jake Peralta" {{tooltip.trigger}} />
    {{#if tooltip.isShown}}
      <img
        class="rounded-md w-52"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b9d1b46230007.584c7bdd776b5.jpg"
        {{tooltip.content}}
      />
    {{/if}}
  </VelvetTooltip>
</DemoSpaceX>
```

## Show Delay

```hbs preview-template
<DemoSpaceX>
  <VelvetTooltip @showDelay={{0}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>0 MilliSeconds</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @showDelay={{400}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>400 MilliSeconds</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>

  <VelvetTooltip @showDelay={{800}} as |tooltip|>
    <VelvetTag {{tooltip.trigger}}>800 MilliSeconds</VelvetTag>
    <tooltip.Content>
      Lorem ipsum.
    </tooltip.Content>
  </VelvetTooltip>
</DemoSpaceX>
```

## Arguments

<!-- args-table: velvet-tooltip -->

- [Click here for all available `Placement` values](https://floating-ui.com/docs/computePosition#placement)
- [Click here for all available `Strategy` values](https://floating-ui.com/docs/computePosition#strategy)
