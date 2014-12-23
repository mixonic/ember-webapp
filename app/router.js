import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("admin", { path: "/admin" });
  this.resource("admin.user", { path: "/admin/user" });
  this.resource("admin.role", { path: "/admin/role" });
  this.resource("admin.group", { path: "/admin/group" });

});

export default Router;
