import { concat, hash } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import type { ModifierLike } from '@glint/template';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.ts';
import type { TriggerSignature } from './velvet-dropdown.gts';
import VelvetIconChevronDown from './velvet-icon/chevron-down.gts';
import VelvetIconXMark from './velvet-icon/x-mark.gts';
import VelvetSpinner from './velvet-spinner.gts';

export interface VelvetIconButtonSignature {
  Args: {
    /// Indicate if the icon button is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Indicate if the icon button discloses content.
    /// @default [false]
    isDisclosure?: boolean;

    /// Indicate if the icon button's disclosed content is expanded.
    /// @default [false]
    isExpanded?: boolean;

    /// Indicate if the icon button should render a loading state.
    /// @default [false]
    isLoading?: boolean;

    /// Make the icon button renderless.
    /// @default [false]
    isRenderless?: boolean;

    /// Indicate if the icon button is round.
    /// @default [false]
    isRound?: boolean;

    /// Handle the icon button's `click` event.
    /// @default [undefined]
    onClick?: (event: MouseEvent) => void;

    /// The size of the icon button.
    /// @default ["md"]
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /// The type of the icon button.
    /// @default ["button"]
    type?: 'button' | 'reset' | 'submit';

    /// The appearance of the icon button.
    /// @default ["primary"]
    variant?: string | 'primary';

    privateDropdownTrigger?: ModifierLike<TriggerSignature>;
  };
  Blocks: {
    /// The icon of the icon button.
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetIconButton extends Component<VelvetIconButtonSignature> {
  clickHandler = (event: MouseEvent) => {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }

    onClick(event);
  };

  <template>
    {{#let
      (cn
        "velvet-icon-button"
        (concat "velvet-icon-button-" (or @size "md"))
        (concat "velvet-icon-button-" (or @variant "primary"))
        (if @isRound "velvet-icon-button-round")
        (if @isDisabled "velvet-icon-button-disabled")
        (if @isDisclosure (if @isExpanded "velvet-icon-button-expanded"))
      )
      as |className|
    }}
      {{#if @isRenderless}}
        {{yield (hash class=className)}}
      {{else}}
        <button
          class={{className}}
          disabled={{@isDisabled}}
          type={{or @type "button"}}
          {{on "click" this.clickHandler}}
          {{@privateDropdownTrigger}}
          ...attributes
        >
          {{#if @isLoading}}
            <VelvetSpinner />
          {{else if (has-block)}}
            {{yield (hash class=className)}}
          {{else if @isDisclosure}}
            {{#if @isExpanded}}
              <VelvetIconXMark class="velvet-icon-button-disclosure-icon" />
            {{else}}
              <VelvetIconChevronDown
                class="velvet-icon-button-disclosure-icon"
              />
            {{/if}}
          {{/if}}
        </button>
      {{/if}}
    {{/let}}
  </template>
}
