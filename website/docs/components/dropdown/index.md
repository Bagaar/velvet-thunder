# Dropdown

Uses [Floating UI](https://floating-ui.com/) underneath.

## Placement

```hbs preview-template
<DemoSpaceX>
  <VelvetDropdown @placement="bottom-start" as |dropdown|>
    <dropdown.Button>
      Bottom Start
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>

  <VelvetDropdown @placement="bottom-end" as |dropdown|>
    <dropdown.Button>
      Bottom End
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>
</DemoSpaceX>
```

## Offset

```hbs preview-template
<DemoSpaceX>
  <VelvetDropdown @offset={{4}} as |dropdown|>
    <dropdown.Button>
      4 Pixels Offset
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>

  <VelvetDropdown @offset={{8}} as |dropdown|>
    <dropdown.Button>
      8 Pixels Offset
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>

  <VelvetDropdown @offset={{12}} as |dropdown|>
    <dropdown.Button>
      12 Pixels Offset
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>
</DemoSpaceX>
```

## Triggers

```hbs preview-template
<DemoSpaceX>
  <VelvetDropdown as |dropdown|>
    <dropdown.Button>
      Menu
    </dropdown.Button>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>

  <VelvetDropdown as |dropdown|>
    <dropdown.IconButton>
      <DemoMenuIcon />
    </dropdown.IconButton>
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>

   <VelvetDropdown as |dropdown|>
    <dropdown.IconButton />
    <dropdown.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </dropdown.Content>
  </VelvetDropdown>
</DemoSpaceX>
```

## Custom Trigger and Content

```hbs preview-template
<DemoSpaceX>
  <VelvetDropdown as |dropdown|>
    <VelvetAvatar @name="Jake Peralta" role="button" {{dropdown.trigger}} />
    {{#if dropdown.isShown}}
      <img
        class="rounded-md w-52"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b9d1b46230007.584c7bdd776b5.jpg"
        {{dropdown.content}}
      />
    {{/if}}
  </VelvetDropdown>
  
  <VelvetDropdown as |dropdown|>
    <button {{dropdown.trigger}}>
      {{#if dropdown.isShown}}
        <div>Open</div>
      {{else}}
        <div>Closed</div>
      {{/if}}
    </button>
    {{#if dropdown.isShown}}
      <img
        class="rounded-md w-52"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b9d1b46230007.584c7bdd776b5.jpg"
        {{dropdown.content}}
      />
    {{/if}}
  </VelvetDropdown>
</DemoSpaceX>
```

## Signature

<!-- component-signature: velvet-dropdown -->

- [Click here for all available `Placement` values](https://floating-ui.com/docs/computePosition#placement)
- [Click here for all available `Strategy` values](https://floating-ui.com/docs/computePosition#strategy)
