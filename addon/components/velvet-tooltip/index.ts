import { assert } from '@ember/debug';
import { action } from '@ember/object';
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  Strategy,
} from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { ModifierLike, WithBoundArgs } from '@glint/template';
import { modifier } from 'ember-modifier';
import VelvetTooltipContent from 'velvet-thunder/components/velvet-tooltip/content';

interface VelvetTooltipSignature {
  Args: {
    /// Offset of the content in pixels relative to the trigger.
    offset?: number;
    /// Placement of the content relative to the trigger.
    placement?: Placement;
    /// CSS position of the content.
    strategy?: Strategy;
  };
  Blocks: {
    default: [
      {
        Content: WithBoundArgs<
          typeof VelvetTooltipContent,
          'isShown' | 'modifier'
        >;
        isShown: boolean;
        hide: () => void;
        show: () => void;
        toggle: () => void;
        content: ModifierLike<ContentSignature>;
        trigger: ModifierLike<TriggerSignature>;
      }
    ];
  };
  Element: HTMLDivElement;
}

export interface ContentSignature {
  Element: HTMLElement;
}

export interface TriggerSignature {
  Element: HTMLElement;
}

export default class VelvetTooltip extends Component<VelvetTooltipSignature> {
  @tracked isShown = false;

  triggerElement: HTMLElement | null = null;
  VelvetTooltipContent = VelvetTooltipContent;

  get offset(): number {
    const { offset } = this.args;

    return typeof offset === 'number' ? offset : 4;
  }

  get placement(): Placement {
    return this.args.placement || 'top';
  }

  get strategy(): Strategy {
    return this.args.strategy || 'absolute';
  }

  content = modifier<ContentSignature>((contentElement) => {
    const { placement, strategy, triggerElement } = this;

    assert('[VelvetTooltip] Trigger element must be present.', triggerElement);

    // https://floating-ui.com/docs/computeposition#initial-layout:
    Object.assign(contentElement.style, {
      left: 0,
      position: strategy,
      top: 0,
    });

    const updateFloating = async () => {
      const { x, y } = await computePosition(triggerElement, contentElement, {
        middleware: [flip(), offset(this.offset)],
        placement,
        strategy,
      });

      Object.assign(contentElement.style, { left: `${x}px`, top: `${y}px` });
    };

    const cleanupFloating = autoUpdate(
      triggerElement,
      contentElement,
      updateFloating
    );

    return cleanupFloating;
  });

  trigger = modifier<TriggerSignature>((triggerElement) => {
    this.triggerElement = triggerElement;

    triggerElement.addEventListener('mouseenter', this.show);
    triggerElement.addEventListener('mouseleave', this.hide);

    return () => {
      triggerElement.removeEventListener('mouseenter', this.show);
      triggerElement.removeEventListener('mouseleave', this.hide);
    };
  });

  @action
  hide() {
    this.isShown = false;
  }

  @action
  show() {
    this.isShown = true;
  }

  @action
  toggle() {
    this.isShown = !this.isShown;
  }
}