import Component from '@glimmer/component';
import type { ModifierLike } from '@glint/template';
import type { TriggerSignature } from 'velvet-thunder/components/velvet-dropdown';

interface VelvetIconButtonSignature {
  Args: {
    /// Indicate if the icon button is disabled.
    isDisabled?: boolean;
    /// Indicate if the icon button discloses content.
    isDisclosure?: boolean;
    /// Indicate if the icon button should display a loading state.
    isLoading?: boolean;
    /// Make the icon button renderless.
    isRenderless?: boolean;
    /// Indicate if the icon button is round.
    isRound?: boolean;
    /// Handle the icon button's `click` event.
    onClick?: (event: MouseEvent) => void;
    /// The size of the icon button.
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /// The type of the icon button.
    type?: 'button' | 'reset' | 'submit';
    /// The appearance of the icon button.
    variant?: string | 'primary';

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

    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }

    onClick(event);
  };
}
