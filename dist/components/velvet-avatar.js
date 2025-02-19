import { concat } from '@ember/helper';
import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import { cn } from '../-private/helpers/cn.js';
import VelvetIconUser from './velvet-icon/user.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class VelvetAvatar extends Component {
  get initials() {
    return (this.args.name || '').split(' ').slice(0, 2).map(name => name.charAt(0)).join('');
  }
  static {
    setComponentTemplate(precompileTemplate("\n    <div class={{cn \"velvet-avatar\" (concat \"velvet-avatar-\" (or @size \"md\")) (concat \"velvet-avatar-\" (or @variant \"primary\")) (if @isRound \"velvet-avatar-round\")}} ...attributes>\n      {{#if @src}}\n        <img alt={{@name}} class=\"velvet-avatar-image\" src={{@src}} />\n      {{else if @name}}\n        {{this.initials}}\n      {{else if @initials}}\n        {{@initials}}\n      {{else}}\n        <VelvetIconUser class=\"velvet-avatar-icon\" />\n      {{/if}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        cn,
        concat,
        or,
        VelvetIconUser
      })
    }), this);
  }
}

export { VelvetAvatar as default };
//# sourceMappingURL=velvet-avatar.js.map
