import { helper } from '@ember/component/helper';

export default helper(function velvetClassList(positional/*, named*/) {
  return positional.filter(Boolean).join(' ');
});
