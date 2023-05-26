import Component from '@glimmer/component';

interface VelvetSwitchSignature {
  Args: {
    /// Alignment of the switch.
    alignment?: 'left' | 'right';
    /// Indicate if the switch is checked.
    isChecked?: boolean;
    /// Indicate if the switch is disabled.
    isDisabled?: boolean;
    /// Handle the switch's `change` event.
    onChange?: (isChecked: boolean, event: Event) => void;
    /// The size of the switch.
    size?: 'sm' | 'md' | 'lg';
  };
  Blocks: {
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
