import { assert } from '@ember/debug';
import { hash } from '@ember/helper';
import { autoUpdate, computePosition, flip, offset } from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import VelvetButton from './velvet-button.js';
import VelvetDropdownContent from './velvet-dropdown/content.js';
import VelvetIconButton from './velvet-icon-button.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime';

class VelvetDropdown extends Component {
  static {
    g(this.prototype, "isShown", [tracked], function () {
      return false;
    });
  }
  #isShown = (i(this, "isShown"), void 0);
  triggerElement = null;
  get offset() {
    const {
      offset
    } = this.args;
    return typeof offset === 'number' ? offset : 4;
  }
  get placement() {
    return this.args.placement || 'bottom-start';
  }
  get strategy() {
    return this.args.strategy || 'absolute';
  }
  content = modifier(contentElement => {
    const {
      placement,
      strategy,
      triggerElement
    } = this;
    assert('[VelvetDropdown] Trigger element must be present.', triggerElement);
    // https://floating-ui.com/docs/computeposition#initial-layout:
    Object.assign(contentElement.style, {
      left: 0,
      position: strategy,
      top: 0
    });
    const updateFloating = async () => {
      const {
        x,
        y
      } = await computePosition(triggerElement, contentElement, {
        middleware: [flip(), offset(this.offset)],
        placement,
        strategy
      });
      Object.assign(contentElement.style, {
        left: `${x}px`,
        top: `${y}px`
      });
    };
    const cleanupFloating = autoUpdate(triggerElement, contentElement, updateFloating);
    const clickOutsideHandler = ({
      target
    }) => {
      if (target !== contentElement && target !== triggerElement && contentElement.contains(target) === false && triggerElement.contains(target) === false) {
        this.hide();
      }
    };
    const pressEscapeHandler = ({
      key
    }) => {
      if (key === 'Escape') {
        this.hide();
      }
    };
    // this is a mouseup instead of a click event, because if not, this immediately gets fired in the same cycle as the click to toggle the content open.
    // this then means the clickOutsideHandler get called and fires the hide() method because after a rerender there is now a different icon shown, and that is no longer a child of the triggerElement
    // changing this event to mouseup prevents this double toggle from happening and still works to hide the content when doing a subsequent click
    document.addEventListener('mouseup', clickOutsideHandler);
    document.addEventListener('keydown', pressEscapeHandler);
    return () => {
      cleanupFloating();
      document.removeEventListener('mouseup', clickOutsideHandler);
      document.removeEventListener('keydown', pressEscapeHandler);
    };
  });
  trigger = modifier(triggerElement => {
    this.triggerElement = triggerElement;
    triggerElement.addEventListener('click', this.toggle);
    return () => triggerElement.removeEventListener('click', this.toggle);
  });
  hide = () => {
    this.isShown = false;
  };
  show = () => {
    this.isShown = true;
  };
  toggle = () => {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <div class=\"velvet-dropdown\" ...attributes>\n      {{yield (hash Button=(component VelvetButton isDisclosure=true isExpanded=this.isShown privateDropdownTrigger=this.trigger) Content=(component VelvetDropdownContent isShown=this.isShown modifier=this.content) IconButton=(component VelvetIconButton privateDropdownTrigger=this.trigger isDisclosure=true isExpanded=this.isShown) isShown=this.isShown hide=this.hide show=this.show toggle=this.toggle content=this.content trigger=this.trigger)}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        hash,
        VelvetButton,
        VelvetDropdownContent,
        VelvetIconButton
      })
    }), this);
  }
}

export { VelvetDropdown as default };
//# sourceMappingURL=velvet-dropdown.js.map
