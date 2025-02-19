import { hash, concat } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import VelvetIconChevronDown from './velvet-icon/chevron-down.js';
import VelvetIconXMark from './velvet-icon/x-mark.js';
import VelvetSpinner from './velvet-spinner.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetIconButton extends Component {
  clickHandler = event => {
    const {
      isDisabled,
      onClick
    } = this.args;
    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }
    onClick(event);
  };
  static {
    setComponentTemplate(precompileTemplate("\n    {{#let (cn \"velvet-icon-button\" (concat \"velvet-icon-button-\" (or @size \"md\")) (concat \"velvet-icon-button-\" (or @variant \"primary\")) (if @isRound \"velvet-icon-button-round\") (if @isDisabled \"velvet-icon-button-disabled\") (if @isDisclosure (if @isExpanded \"velvet-icon-button-expanded\"))) as |className|}}\n      {{#if @isRenderless}}\n        {{yield (hash class=className)}}\n      {{else}}\n        <button class={{className}} disabled={{@isDisabled}} type={{or @type \"button\"}} {{on \"click\" this.clickHandler}} {{@privateDropdownTrigger}} ...attributes>\n          {{#if @isLoading}}\n            <VelvetSpinner />\n          {{else if (has-block)}}\n            {{yield (hash class=className)}}\n          {{else if @isDisclosure}}\n            {{#if @isExpanded}}\n              <VelvetIconXMark class=\"velvet-icon-button-disclosure-icon\" />\n            {{else}}\n              <VelvetIconChevronDown class=\"velvet-icon-button-disclosure-icon\" />\n            {{/if}}\n          {{/if}}\n        </button>\n      {{/if}}\n    {{/let}}\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or,
        hash,
        on,
        VelvetSpinner,
        VelvetIconXMark,
        VelvetIconChevronDown
      })
    }), this);
  }
}

export { VelvetIconButton as default };
//# sourceMappingURL=velvet-icon-button.js.map
