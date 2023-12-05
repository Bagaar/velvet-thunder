import Component from "@glimmer/component";

export type Size = "sm" | "md" | "lg";

interface VelvetRadioSignature {
  Args: {
    /// Indicate if the radio is checked.
    /// @default [false]
    isChecked?: boolean;
    /// Indicate if the radio is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// The name of the radio.
    /// @default [""]
    name?: string;
    /// Handle the radio's `change` event.
    /// @default [undefined]
    onChange?: (isChecked: boolean, event: Event) => void;
    /// The size of the radio.
    /// @default ["md"]
    size?: Size;
    /// The value of the radio.
    /// @default [undefined]
    value?: unknown;

    privateGroupValue?: unknown;
    privateInGroup?: boolean;
    privateOnChangeGroup?: (value: unknown, event: Event) => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetRadio extends Component<VelvetRadioSignature> {
  get isChecked() {
    const { privateInGroup, isChecked, privateGroupValue, value } = this.args;

    return privateInGroup ? value === privateGroupValue : isChecked;
  }

  get valueAttr() {
    const { value } = this.args;

    return value === undefined ? undefined : String(value);
  }

  changeHandler = (event: Event) => {
    if (this.args.isDisabled === true) {
      return;
    }

    const { privateInGroup, onChange, privateOnChangeGroup, value } = this.args;

    if (privateInGroup && typeof privateOnChangeGroup === "function") {
      privateOnChangeGroup(value, event);
    } else if (typeof onChange === "function") {
      onChange((event.target as HTMLInputElement).checked, event);
    }
  };
}
