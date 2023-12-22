import formkitAutoAnimate from "@formkit/auto-animate";
import { modifier } from "ember-modifier";

interface VelvetAutoAnimateSignature {
  Element: HTMLElement;
}

export default modifier<VelvetAutoAnimateSignature>(
  function velvetAutoAnimate(element) {
    const { disable } = formkitAutoAnimate(element);

    return () => disable();
  },
);
