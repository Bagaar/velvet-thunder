import Component from "@glimmer/component";
import type { WithBoundArgs } from "@glint/template";
import VelvetSelectOption from "velvet-thunder/components/velvet-select/option";

interface VelvetSelectSignature {
  Args: {
    /// Indicate if the select is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Indicate if the select is invalid.
    /// @default [false]
    isInvalid?: boolean;
    /// Indicate if the select is pill shaped.
    /// @default [false]
    isPill?: boolean;
    /// Handle the select's `change` event.
    /// @default [undefined]
    onChange?: (selected: unknown, event: Event) => void;
    /// The placeholder of the select.
    /// @default [""]
    placeholder?: string;
    /// The selected option of the select.
    /// @default [undefined]
    selected?: unknown;
    /// The size of the select.
    /// @default ["md"]
    size?: "sm" | "md" | "lg";
    /// The appearance of the select.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Blocks: {
    /// The options of the select.
    default: [
      {
        Option: WithBoundArgs<
          typeof VelvetSelectOption,
          "privateOnCreate" | "privateOnDestroy" | "privateSelected"
        >;
      },
    ];
  };
  Element: HTMLSelectElement;
}

export default class VelvetSelect extends Component<VelvetSelectSignature> {
  options = new Map();
  VelvetSelectOption = VelvetSelectOption;

  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }

  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }

  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== "function" || isDisabled === true) {
      return;
    }

    onChange(
      this.options.get((event.target as HTMLSelectElement).value),
      event,
    );
  };

  addOption = (id: string, value: unknown) => {
    this.options.set(id, value);
  };

  removeOption = (id: string) => {
    this.options.delete(id);
  };
}
