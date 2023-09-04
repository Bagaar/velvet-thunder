import { htmlSafe } from "@ember/template";
import Component from "@glimmer/component";

interface VelvetProgressSignature {
  Args: {
    /// The maximum value of the progress.
    /// @default [100]
    max?: number;
    /// The minimum value of the progress.
    /// @default [0]
    min?: number;
    /// The size of the progress.
    /// @default ["md"]
    size?: "sm" | "md" | "lg";
    /// The text describing the process in progress.
    /// @default [""]
    text?: string;
    /// The value of the progress.
    /// @default [0]
    value?: number;
    /// The appearance of the progress.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Element: HTMLDivElement;
}

export default class VelvetProgress extends Component<VelvetProgressSignature> {
  get lineStyle() {
    const { max, min, value } = this;
    const progress = Math.floor(((value - min) / (max - min)) * 100);
    const progressClipped = Math.max(0, Math.min(100, progress));

    return htmlSafe(`width: ${progressClipped}%;`);
  }

  get max() {
    return typeof this.args.max === "number" ? this.args.max : 100;
  }

  get min() {
    return typeof this.args.min === "number" ? this.args.min : 0;
  }

  get value() {
    return typeof this.args.value === "number" ? this.args.value : 0;
  }
}
