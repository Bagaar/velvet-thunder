import Component from "@glimmer/component";

interface VelvetInputSignature {
  Args: {
    /// Indicate if the input is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Indicate if the input is invalid.
    /// @default [false]
    isInvalid?: boolean;
    /// Indicate if the input is pill shaped.
    /// @default [false]
    isPill?: boolean;
    /// Handle the input's `change` event.
    /// @default [undefined]
    onChange?: (value: string, event: Event) => void;
    /// Handle the input's `input` event.
    /// @default [undefined]
    onInput?: (value: string, event: Event) => void;
    /// The placeholder of the input.
    /// @default [""]
    placeholder?: string;
    /// The size of the input.
    /// @default ["md"]
    size?: "sm" | "md" | "lg";
    /// The type of the input.
    /// @default [""]
    type?: string;
    /// The value of the input.
    /// @default [""]
    value?: string;
    /// The appearance of the input.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Element: HTMLInputElement;
}

export default class VelvetInput extends Component<VelvetInputSignature> {
  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== "function" || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLInputElement).value, event);
  };

  inputHandler = (event: Event) => {
    const { isDisabled, onInput } = this.args;

    if (typeof onInput !== "function" || isDisabled === true) {
      return;
    }

    onInput((event.target as HTMLInputElement).value, event);
  };
}
