import { helper } from '@ember/component/helper';

const NOOP = () => {};

export default helper(function velvetNoop() {
  return NOOP;
});
