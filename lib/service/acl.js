'use strict';

module.exports = function (service) {
  var app = service.acl;
  var acl = {
    getResources: function getResources(opts, cb) {
      app.get('/resources/all', cb);
    },
    userResources: function userResources(user, cb) {
      app.get('/users/' + user + '/resources', cb);
    },
    initResources: function initResources(resources, cb) {
      app.put('/resources', resources, cb);
    },
    isAllowed: function isAllowed(user, resource, permisssions, cb) {
      app.get('/resources/isAllowed', {
        data: {
          user: user,
          resource: resource,
          permisssions: permisssions
        }
      }, cb);
    }
  };

  return acl;
};