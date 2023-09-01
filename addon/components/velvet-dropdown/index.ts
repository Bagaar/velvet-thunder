import { assert } from "@ember/debug";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  Placement,
  Strategy,
} from "@floating-ui/dom";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import type { ModifierLike, WithBoundArgs } from "@glint/template";
import { modifier } from "ember-modifier";
import VelvetButton from "velvet-thunder/components/velvet-button";
import VelvetDropdownContent from "velvet-thunder/components/velvet-dropdown/content";
import VelvetIconButton from "velvet-thunder/components/velvet-icon-button";

interface VelvetDropdownSignature {
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
        Button: WithBoundArgs<
          typeof VelvetButton,
          "privateDropdownTrigger" | "isDisclosure" | "variant"
        >;
        Content: WithBoundArgs<
          typeof VelvetDropdownContent,
          "isShown" | "modifier"
        >;
        IconButton: WithBoundArgs<
          typeof VelvetIconButton,
          "privateDropdownTrigger" | "variant"
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
  VelvetButton = VelvetButton;
  VelvetDropdownContent = VelvetDropdownContent;
  VelvetIconButton = VelvetIconButton;

  get offset(): number {
    const { offset } = this.args;

    return typeof offset === "number" ? offset : 4;
  }

  get placement(): Placement {
    return this.args.placement || "bottom-start";
  }

  get strategy(): Strategy {
    return this.args.strategy || "absolute";
  }

  content = modifier<ContentSignature>((contentElement) => {
    const { placement, strategy, triggerElement } = this;

    assert("[VelvetDropdown] Trigger element must be present.", triggerElement);

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
      if (key === "Escape") {
        this.hide();
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    document.addEventListener("keydown", pressEscapeHandler);

    return () => {
      cleanupFloating();
      document.removeEventListener("click", clickOutsideHandler);
      document.removeEventListener("keydown", pressEscapeHandler);
    };
  });

  trigger = modifier<TriggerSignature>((triggerElement) => {
    this.triggerElement = triggerElement;

    triggerElement.addEventListener("click", this.toggle);

    return () => triggerElement.removeEventListener("click", this.toggle);
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
}
