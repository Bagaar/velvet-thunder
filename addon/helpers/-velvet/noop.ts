import { helper } from '@ember/component/helper';

const NOOP = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

export default helper(function velvetNoop() {
  return NOOP;
});
