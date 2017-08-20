'use strict';

var jm = require('jm-ms');
var app = null;
jm.ms.client({
  uri: 'http://192.168.0.55:20110/acl'
}, function (err, doc) {
  app = doc;
});

module.exports = {
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