import Component from '@glimmer/component';
import type { ModifierLike } from '@glint/template';
import type { TriggerSignature } from 'velvet-thunder/components/velvet-dropdown';

interface VelvetButtonSignature {
  Args: {
    /// Indicate if the button is disabled.
    isDisabled?: boolean;
    /// Indicate if the button discloses content.
    isDisclosure?: boolean;
    /// Indicate if the button should display a loading state.
    isLoading?: boolean;
    /// Indicate if the button is pill shaped.
    isPill?: boolean;
    /// Make the button renderless.
    isRenderless?: boolean;
    /// Handle the button's `click` event.
    onClick?: (event: MouseEvent) => void;
    /// The size of the button.
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /// The type of the button.
    type?: 'button' | 'reset' | 'submit';
    /// The appearance of the button.
    variant?: string | 'primary';

    privateDropdownTrigger?: ModifierLike<TriggerSignature>;
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetButton extends Component<VelvetButtonSignature> {
  clickHandler = (event: MouseEvent) => {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }

    onClick(event);
  };
}
