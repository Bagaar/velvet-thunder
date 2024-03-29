import { addDocfyRoutes } from '@docfy/ember';
import EmberRouter from '@ember/routing/router';
import config from 'website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  addDocfyRoutes(this);
  this.route('not-found', { path: '/*path' });
});
