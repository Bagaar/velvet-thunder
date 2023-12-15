import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import type { WithBoundArgs } from "@glint/template";
import VelvetButton from "velvet-thunder/components/velvet-button";
import VelvetIconButton from "velvet-thunder/components/velvet-icon-button";

interface VelvetDisclosureSignature {
  Args: {
    /// Indicate if the disclosed content should animate.
    /// @default [true]
    shouldAnimate?: boolean;
  };
  Blocks: {
    /// The content of the disclosure.
    content: [publicAPI: PublicAPI];
    /// The trigger of the disclosure.
    trigger: [
      publicAPI: PublicAPI & {
        Button: WithBoundArgs<typeof VelvetButton, "isDisclosure" | "onClick">;
        IconButton: WithBoundArgs<typeof VelvetIconButton, "onClick">;
      },
    ];
  };
  Element: HTMLDivElement;
}

interface PublicAPI {
  hide: () => void;
  isShown: boolean;
  show: () => void;
  toggle: () => void;
}

export default class VelvetDisclosure extends Component<VelvetDisclosureSignature> {
  @tracked isShown = false;

  VelvetButton = VelvetButton;
  VelvetIconButton = VelvetIconButton;

  get shouldAnimate() {
    return typeof this.args.shouldAnimate === "boolean"
      ? this.args.shouldAnimate
      : true;
  }

  hide = () => {
    this.isShown = false;
  };

  show = () => {
    this.isShown = true;
  };

  toggle = () => {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  };
}
