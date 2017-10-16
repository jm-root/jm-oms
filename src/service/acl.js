module.exports = function(service){
  let app = service.acl
  let acl = {
    getResources: function (opts, cb) {
      app.get('/resources/all', cb)
    },
    userResources: function (user, cb) {
      app.get('/users/' + user + '/resources', cb)
    },
    initResources: function (resources, cb) {
      app.put('/resources', resources, cb)
    },
    isAllowed: function (user, resource, permisssions, cb) {
      app.get('/resources/isAllowed', {
        data: {
          user: user,
          resource: resource,
          permisssions: permisssions
        }
      }, cb)
    }
  }

  return acl
}
