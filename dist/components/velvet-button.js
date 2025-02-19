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

class VelvetButton extends Component {
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
    setComponentTemplate(precompileTemplate("\n    {{#let (cn \"velvet-button\" (concat \"velvet-button-\" (or @size \"md\")) (concat \"velvet-button-\" (or @variant \"primary\")) (if @isPill \"velvet-button-pill\") (if @isDisabled \"velvet-button-disabled\") (if @isDisclosure (if @isExpanded \"velvet-button-expanded\"))) as |className|}}\n      {{#if @isRenderless}}\n        {{yield (hash class=className)}}\n      {{else}}\n        <button aria-expanded={{if @isDisclosure (if @isExpanded \"true\" \"false\") null}} class={{className}} disabled={{@isDisabled}} type={{or @type \"button\"}} {{on \"click\" this.clickHandler}} {{@privateDropdownTrigger}} ...attributes>\n          {{#if @isLoading}}\n            <VelvetSpinner />\n          {{/if}}\n          {{yield (hash class=className)}}\n          {{#if @isDisclosure}}\n            {{#if @isExpanded}}\n              <VelvetIconXMark class=\"velvet-button-disclosure-icon\" />\n            {{else}}\n              <VelvetIconChevronDown class=\"velvet-button-disclosure-icon\" />\n            {{/if}}\n          {{/if}}\n        </button>\n      {{/if}}\n    {{/let}}\n  ", {
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

export { VelvetButton as default };
//# sourceMappingURL=velvet-button.js.map
