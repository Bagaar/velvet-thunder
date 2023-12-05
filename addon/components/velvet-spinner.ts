import templateOnlyComponent from "@ember/component/template-only";

interface VelvetSpinnerSignature {
  Args: {
    /// The size of the spinner.
    /// @default ["md"]
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };
  Element: SVGElement;
}

export default templateOnlyComponent<VelvetSpinnerSignature>();
