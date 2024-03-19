import { concat } from '@ember/helper';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';
import VelvetIconUser from './velvet-icon/user.gts';

export interface VelvetAvatarSignature {
  Args: {
    /// The initials of the user.
    /// @default [""]
    initials?: string;

    /// Indicate if the avatar is round.
    /// @default [false]
    isRound?: boolean;

    /// The name of the user.
    /// @default [""]
    name?: string;

    /// The size of the avatar.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';

    /// The source of the image.
    /// @default [""]
    src?: string;

    /// The appearance of the avatar.
    /// @default ["primary"]
    variant?: string | 'primary';
  };
  Element: HTMLDivElement;
}

export default class VelvetAvatar extends Component<VelvetAvatarSignature> {
  get initials() {
    return (this.args.name || '')
      .split(' ')
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join('');
  }

  <template>
    <div
      class={{cn
        "velvet-avatar"
        (concat "velvet-avatar-" (or @size "md"))
        (concat "velvet-avatar-" (or @variant "primary"))
        (if @isRound "velvet-avatar-round")
      }}
      ...attributes
    >
      {{#if @src}}
        <img alt={{@name}} class="velvet-avatar-image" src={{@src}} />
      {{else if @name}}
        {{this.initials}}
      {{else if @initials}}
        {{@initials}}
      {{else}}
        <VelvetIconUser class="velvet-avatar-icon" />
      {{/if}}
    </div>
  </template>
}
