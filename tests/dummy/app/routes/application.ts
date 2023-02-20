import { registerDestructor } from '@ember/destroyable';
import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('router') declare routerService: RouterService;

  beforeModel() {
    const handler = () => window.scrollTo(0, 0);

    this.routerService.on('routeDidChange', handler);

    registerDestructor(this, () => {
      this.routerService.off('routeDidChange', handler);
    });
  }
}
