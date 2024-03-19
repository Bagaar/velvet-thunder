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

export interface VelvetButtonSignature {
  Args: {
    /// Indicate if the button is disabled.
    /// @default [false]
    isDisabled?: boolean;

    /// Indicate if the button discloses content.
    /// @default [false]
    isDisclosure?: boolean;

    /// Indicate if the button's disclosed content is expanded.
    /// @default [false]
    isExpanded?: boolean;

    /// Indicate if the button should render a loading state.
    /// @default [false]
    isLoading?: boolean;

    /// Indicate if the button is pill shaped.
    /// @default [false]
    isPill?: boolean;

    /// Make the button renderless.
    /// @default [false]
    isRenderless?: boolean;

    /// Handle the button's `click` event.
    /// @default [undefined]
    onClick?: (event: MouseEvent) => void;

    /// The size of the button.
    /// @default ["md"]
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /// The type of the button.
    /// @default ["button"]
    type?: 'button' | 'reset' | 'submit';

    /// The appearance of the button.
    /// @default ["primary"]
    variant?: string | 'primary';

    privateDropdownTrigger?: ModifierLike<TriggerSignature>;
  };
  Blocks: {
    /// The content of the button.
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetButton extends Component<VelvetButtonSignature> {
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
        "velvet-button"
        (concat "velvet-button-" (or @size "md"))
        (concat "velvet-button-" (or @variant "primary"))
        (if @isPill "velvet-button-pill")
        (if @isDisabled "velvet-button-disabled")
        (if @isDisclosure (if @isExpanded "velvet-button-expanded"))
      )
      as |className|
    }}
      {{#if @isRenderless}}
        {{yield (hash class=className)}}
      {{else}}
        <button
          aria-expanded={{if @isDisclosure (if @isExpanded "true" "false") null}}
          class={{className}}
          disabled={{@isDisabled}}
          type={{or @type "button"}}
          {{on "click" this.clickHandler}}
          {{@privateDropdownTrigger}}
          ...attributes
        >
          {{#if @isLoading}}
            <VelvetSpinner />
          {{/if}}
          {{yield (hash class=className)}}
          {{#if @isDisclosure}}
            {{#if @isExpanded}}
              <VelvetIconXMark class="velvet-button-disclosure-icon" />
            {{else}}
              <VelvetIconChevronDown class="velvet-button-disclosure-icon" />
            {{/if}}
          {{/if}}
        </button>
      {{/if}}
    {{/let}}
  </template>
}
