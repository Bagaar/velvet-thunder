import Component from '@glimmer/component';

export interface VelvetSwitchSignature {
  Args: {
    /// Alignment of the switch.
    /// @default ["left"]
    alignment?: 'left' | 'right';
    /// Indicate if the switch is checked.
    /// @default [false]
    isChecked?: boolean;
    /// Indicate if the switch is disabled.
    /// @default [false]
    isDisabled?: boolean;
    /// Handle the switch's `change` event.
    /// @default [undefined]
    onChange?: (isChecked: boolean, event: Event) => void;
    /// The size of the switch.
    /// @default ["md"]
    size?: 'sm' | 'md' | 'lg';
  };
  Blocks: {
    /// The label of the switch.
    default: [];
  };
  Element: HTMLInputElement;
}

export default class VelvetSwitch extends Component<VelvetSwitchSignature> {
  changeHandler = (event: Event) => {
    const { isDisabled, onChange } = this.args;

    if (typeof onChange !== 'function' || isDisabled === true) {
      return;
    }

    onChange((event.target as HTMLInputElement).checked, event);
  };
}
