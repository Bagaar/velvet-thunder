import { helper } from '@ember/component/helper';

export default helper(function velvetClass(positional) {
  return positional.join('-');
});
