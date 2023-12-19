import Component from "@glimmer/component";
import VelvetIconCircleCheckSolid from "velvet-thunder/components/velvet-icon/circle-check-solid";
import VelvetIconCircleExclamationSolid from "velvet-thunder/components/velvet-icon/circle-exclamation-solid";
import VelvetIconCircleInfoSolid from "velvet-thunder/components/velvet-icon/circle-info-solid";
import VelvetIconXMark from "velvet-thunder/components/velvet-icon/x-mark";

interface VelvetAlertSignature {
  Args: {
    /// Indicate if the alert is hideable.
    /// @default [false]
    isHideable?: boolean;
    /// The level of the alert.
    /// @default [undefined]
    level: "danger" | "info" | "success" | "warning";
    /// Handle the alert's `hide` event.
    /// @default [undefined]
    onHide?: () => void;
  };
  Blocks: {
    /// The content of the alert.
    content?: [];
    /// The icon of the alert.
    icon?: [{ class: "velvet-alert-icon" }];
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
    return typeof this.args.isHideable === "boolean"
      ? this.args.isHideable
      : Boolean(this.args.onHide);
  }

  get VelvetIconComponent() {
    return VELVET_ICON_COMPONENT[this.args.level];
  }
}
