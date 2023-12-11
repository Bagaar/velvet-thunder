import formkitAutoAnimate from "@formkit/auto-animate";
import { modifier } from "ember-modifier";

interface AutoAnimateSignature {
  Element: HTMLElement;
}

export default modifier<AutoAnimateSignature>(function autoAnimate(element) {
  const controller = formkitAutoAnimate(element);

  return () => controller.disable();
});
