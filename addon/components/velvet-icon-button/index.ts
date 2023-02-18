import { action } from '@ember/object';
import Component from '@glimmer/component';

interface VelvetIconButtonSignature {
  Args: {
    isDisabled?: boolean;
    isDisclosure?: boolean;
    isLoading?: boolean;
    isRenderless?: boolean;
    isRound?: boolean;
    onClick?: (event: MouseEvent) => void;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'reset' | 'submit';
    variant?: string | 'primary';
  };
  Blocks: {
    default: [{ class: string }];
  };
  Element: HTMLButtonElement;
}

export default class VelvetIconButton extends Component<VelvetIconButtonSignature> {
  @action
  clickHandler(event: MouseEvent) {
    const { isDisabled, onClick } = this.args;

    if (typeof onClick !== 'function' || isDisabled === true) {
      return;
    }

    onClick(event);
  }
}
