import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('router') declare routerService: RouterService;

  beforeModel() {
    this.routerService.replaceWith('docs');
  }
}
