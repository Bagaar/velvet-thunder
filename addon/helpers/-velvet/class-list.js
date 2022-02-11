import { helper } from '@ember/component/helper';

export default helper(function velvetClassList(positional) {
  return positional.filter(Boolean).join(' ');
});
