import { assert } from '@ember/debug';
import { hash } from '@ember/helper';
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  type Placement,
  type Strategy,
} from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { ModifierLike, WithBoundArgs } from '@glint/template';
import { modifier } from 'ember-modifier';
import VelvetButton from './velvet-button.gts';
import VelvetDropdownContent from './velvet-dropdown/content.gts';
import VelvetIconButton from './velvet-icon-button.gts';

export interface VelvetDropdownSignature {
  Args: {
    /// Offset of the content in pixels relative to the trigger.
    /// @default [4]
    offset?: number;

    /// Placement of the content relative to the trigger.
    /// @default ["bottom-start"]
    placement?: Placement;

    /// CSS position of the content.
    /// @default ["absolute"]
    strategy?: Strategy;
  };
  Blocks: {
    /// The trigger and the content of the dropdown.
    default: [
      {
        Button: WithBoundArgs<
          typeof VelvetButton,
          'privateDropdownTrigger' | 'isDisclosure' | 'variant'
        >;
        Content: WithBoundArgs<
          typeof VelvetDropdownContent,
          'isShown' | 'modifier'
        >;
        IconButton: WithBoundArgs<
          typeof VelvetIconButton,
          'privateDropdownTrigger' | 'variant'
        >;
        isShown: boolean;
        hide: () => void;
        show: () => void;
        toggle: () => void;
        content: ModifierLike<ContentSignature>;
        trigger: ModifierLike<TriggerSignature>;
      },
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

export default class VelvetDropdown extends Component<VelvetDropdownSignature> {
  @tracked isShown = false;

  triggerElement: HTMLElement | null = null;

  get offset(): number {
    const { offset } = this.args;

    return typeof offset === 'number' ? offset : 4;
  }

  get placement(): Placement {
    return this.args.placement || 'bottom-start';
  }

  get strategy(): Strategy {
    return this.args.strategy || 'absolute';
  }

  content = modifier<ContentSignature>((contentElement) => {
    const { placement, strategy, triggerElement } = this;

    assert('[VelvetDropdown] Trigger element must be present.', triggerElement);

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
      updateFloating,
    );

    const clickOutsideHandler = ({ target }: MouseEvent) => {
      if (
        target !== contentElement &&
        target !== triggerElement &&
        contentElement.contains(target as Node) === false &&
        triggerElement.contains(target as Node) === false
      ) {
        this.hide();
      }
    };

    const pressEscapeHandler = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        this.hide();
      }
    };

    document.addEventListener('click', clickOutsideHandler);
    document.addEventListener('keydown', pressEscapeHandler);

    return () => {
      cleanupFloating();
      document.removeEventListener('click', clickOutsideHandler);
      document.removeEventListener('keydown', pressEscapeHandler);
    };
  });

  trigger = modifier<TriggerSignature>((triggerElement) => {
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

  <template>
    <div class="velvet-dropdown" ...attributes>
      {{yield
        (hash
          Button=(component
            VelvetButton
            isDisclosure=true
            isExpanded=this.isShown
            privateDropdownTrigger=this.trigger
          )
          Content=(component
            VelvetDropdownContent
            isShown=this.isShown
            modifier=this.content
          )
          IconButton=(component
            VelvetIconButton
            privateDropdownTrigger=this.trigger
            isDisclosure=true
            isExpanded=this.isShown
          )
          isShown=this.isShown
          hide=this.hide
          show=this.show
          toggle=this.toggle
          content=this.content
          trigger=this.trigger
        )
      }}
    </div>
  </template>
}
