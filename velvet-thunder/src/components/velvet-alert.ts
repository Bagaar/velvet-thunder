import Component from '@glimmer/component';
import VelvetIconCircleCheckSolid from './velvet-icon/circle-check-solid.ts';
import VelvetIconCircleExclamationSolid from './velvet-icon/circle-exclamation-solid.ts';
import VelvetIconCircleInfoSolid from './velvet-icon/circle-info-solid.ts';
import VelvetIconXMark from './velvet-icon/x-mark.ts';

export interface VelvetAlertSignature {
  Args: {
    /// Indicate if the alert is hideable.
    /// @default [false]
    isHideable?: boolean;
    /// The level of the alert.
    /// @default [undefined]
    level: 'danger' | 'info' | 'success' | 'warning';
    /// Handle the alert's `hide` event.
    /// @default [undefined]
    onHide?: () => void;
  };
  Blocks: {
    /// The content of the alert.
    content: [];
    /// The icon of the alert.
    icon?: [{ class: 'velvet-alert-icon' }];
    /// The title of the alert.
    title: [];
  };
  Element: HTMLDivElement;
}

const VELVET_ICON_COMPONENT = {
  danger: VelvetIconCircleExclamationSolid,
  info: VelvetIconCircleInfoSolid,
  success: VelvetIconCircleCheckSolid,
  warning: VelvetIconCircleExclamationSolid,
};

export default class VelvetAlert extends Component<VelvetAlertSignature> {
  VelvetIconXMark = VelvetIconXMark;

  get isHideable() {
    return typeof this.args.isHideable === 'boolean'
      ? this.args.isHideable
      : Boolean(this.args.onHide);
  }

  get VelvetIconComponent() {
    return VELVET_ICON_COMPONENT[this.args.level];
  }
}
