import { assert } from '@ember/debug';
import { hash } from '@ember/helper';
import { waitForPromise } from '@ember/test-waiters';
import { autoUpdate, computePosition, flip, offset } from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import VelvetTooltipContent from './velvet-tooltip/content.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime';

class VelvetTooltip extends Component {
  static {
    g(this.prototype, "isShown", [tracked], function () {
      return false;
    });
  }
  #isShown = (i(this, "isShown"), void 0);
  showTimeout = undefined;
  triggerElement = null;
  get offset() {
    const {
      offset
    } = this.args;
    return typeof offset === 'number' ? offset : 4;
  }
  get placement() {
    return this.args.placement || 'top';
  }
  get showDelay() {
    const {
      showDelay
    } = this.args;
    return typeof showDelay === 'number' ? showDelay : 400;
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
    assert('[VelvetTooltip] Trigger element must be present.', triggerElement);
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
    return cleanupFloating;
  });
  trigger = modifier(triggerElement => {
    this.triggerElement = triggerElement;
    triggerElement.addEventListener('mouseenter', this.show);
    triggerElement.addEventListener('mouseleave', this.hide);
    return () => {
      triggerElement.removeEventListener('mouseenter', this.show);
      triggerElement.removeEventListener('mouseleave', this.hide);
    };
  });
  hide = () => {
    clearTimeout(this.showTimeout);
    this.isShown = false;
  };
  show = () => {
    clearTimeout(this.showTimeout);
    return waitForPromise(new Promise(resolve => {
      this.showTimeout = setTimeout(() => {
        this.isShown = true;
        resolve();
      }, this.showDelay);
    }));
  };
  toggle = () => {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  };
  static {
    setComponentTemplate(precompileTemplate("\n    <div class=\"velvet-tooltip\" ...attributes>\n      {{yield (hash Content=(component VelvetTooltipContent isShown=this.isShown modifier=this.content) isShown=this.isShown hide=this.hide show=this.show toggle=this.toggle content=this.content trigger=this.trigger)}}\n    </div>\n  ", {
      strictMode: true,
      scope: () => ({
        hash,
        VelvetTooltipContent
      })
    }), this);
  }
}

export { VelvetTooltip as default };
//# sourceMappingURL=velvet-tooltip.js.map
