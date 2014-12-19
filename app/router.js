import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("admin", { path: "/admin" }, function() {
    this.route("user", { path: "/user" });
  });

});

export default Router;
