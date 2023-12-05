import Component from "@glimmer/component";
import type { ModifierLike } from "@glint/template";
import type { TriggerSignature } from "velvet-thunder/components/velvet-dropdown";

interface VelvetIconButtonSignature {
  Args: {
    /// Indicate if the icon button is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Indicate if the icon button discloses content.
    /// @default [false]
    isDisclosure?: boolean;
    /// Indicate if the icon button should display a loading state.
    /// @default [false]
    isLoading?: boolean;
    /// Make the icon button renderless.
    /// @default [false]
    isRenderless?: boolean;
    /// Indicate if the icon button is round.
    /// @default [false]
    isRound?: boolean;
    /// Handle the icon button's `click` event.
    /// @default [undefined]
    onClick?: (event: MouseEvent) => void;
    /// The size of the icon button.
    /// @default ["md"]
    size?: "xs" | "sm" | "md" | "lg";
    /// The type of the icon button.
    /// @default ["button"]
    type?: "button" | "reset" | "submit";
    /// The appearance of the icon button.
    /// @default ["primary"]
    variant?: string | "primary";

    privateDropdownTrigger?: ModifierLike<TriggerSignature>;
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetIconButton extends Component<VelvetIconButtonSignature> {
  clickHandler = (event: MouseEvent) => {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== "function" || isDisabled === true) {
      return;
    }

    onClick(event);
  };
}
