import Component from "@glimmer/component";
import type { ModifierLike } from "@glint/template";
import type { TriggerSignature } from "velvet-thunder/components/velvet-dropdown";
import VelvetIconChevronDown from "velvet-thunder/components/velvet-icon/chevron-down";

interface VelvetButtonSignature {
  Args: {
    /// Indicate if the button is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Indicate if the button discloses content.
    /// @default [false]
    isDisclosure?: boolean;
    /// Indicate if the button should display a loading state.
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
    size?: "xs" | "sm" | "md" | "lg";
    /// The type of the button.
    /// @default ["button"]
    type?: "button" | "reset" | "submit";
    /// The appearance of the button.
    /// @default ["primary"]
    variant?: string | "primary";

    privateDropdownTrigger?: ModifierLike<TriggerSignature>;
  };
  Blocks: {
    /// The content of the button.
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetButton extends Component<VelvetButtonSignature> {
  VelvetIconChevronDown = VelvetIconChevronDown;

  clickHandler = (event: MouseEvent) => {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== "function" || isDisabled === true) {
      return;
    }

    onClick(event);
  };
}
