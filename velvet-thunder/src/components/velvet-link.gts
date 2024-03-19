import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { type Link, type LinkManagerService } from 'ember-link';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetLinkSignature {
  Args: {
    /// Indicate if the link is pill shaped.
    /// @default [false]
    isPill?: boolean;

    /// The size of the link.
    /// @default ["md"]
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /// A valid route path or a custom `ember-link` `Link` instance.
    /// @default [undefined]
    to: string | Link;

    /// The appearance of the link.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Blocks: {
    /// The content of the link.
    default: [];
  };
  Element: HTMLAnchorElement;
}

export default class VelvetLink extends Component<VelvetLinkSignature> {
  @service('link-manager') declare linkManagerService: LinkManagerService;

  get link() {
    const { to } = this.args;

    if (typeof to === 'string') {
      return this.linkManagerService.createLink(
        this.linkManagerService.getLinkParamsFromURL(to),
      );
    }

    return to;
  }

  <template>
    <a
      class={{cn
        "velvet-link"
        (concat "velvet-link-" (or @size "md"))
        (concat "velvet-link-" (or @variant "primary"))
        (if @isPill "velvet-link-pill")
      }}
      href={{this.link.url}}
      {{on "click" this.link.transitionTo}}
      ...attributes
    >
      {{yield}}
    </a>
  </template>
}
