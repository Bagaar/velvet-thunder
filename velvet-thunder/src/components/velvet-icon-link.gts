import { concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { type Link, type LinkManagerService } from 'ember-link';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';

export interface VelvetIconLinkSignature {
  Args: {
    /// Indicate if the icon link is round.
    /// @default [false]
    isRound?: boolean;

    /// The size of the icon link.
    /// @default ["md"]
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /// A valid route path or a custom `ember-link` `Link` instance.
    /// @default [undefined]
    to: string | Link;

    /// The appearance of the icon link.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Blocks: {
    /// The icon of the icon link.
    default: [];
  };
  Element: HTMLAnchorElement;
}

export default class VelvetIconLink extends Component<VelvetIconLinkSignature> {
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
        "velvet-icon-link"
        (concat "velvet-icon-link-" (or @size "md"))
        (concat "velvet-icon-link-" (or @variant "primary"))
        (if @isRound "velvet-icon-link-round")
      }}
      href={{this.link.url}}
      {{on "click" this.link.transitionTo}}
      ...attributes
    >
      {{yield}}
    </a>
  </template>
}
