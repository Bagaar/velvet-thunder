import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('router') routerService;

  beforeModel() {
    this.routerService.replaceWith('docs');
  }
}
