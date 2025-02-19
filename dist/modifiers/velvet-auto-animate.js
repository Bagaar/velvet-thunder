import formkitAutoAnimate from '@formkit/auto-animate';
import { modifier } from 'ember-modifier';

var velvetAutoAnimate = modifier(function velvetAutoAnimate(element) {
  const {
    disable
  } = formkitAutoAnimate(element);
  return () => disable();
});

export { velvetAutoAnimate as default };
//# sourceMappingURL=velvet-auto-animate.js.map
