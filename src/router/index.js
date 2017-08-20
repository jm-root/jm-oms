import MS from 'jm-ms-core'

let ms = new MS()
export default function (opts = {}) {
  let service = this

  let getNav = function (opts = {}, cb) {
    opts.headers || (opts.headers = {})
    let user = opts.headers.acl_user
    service.nav
      .get()
      .then(function (doc) {
        cb(null, {ret: doc})
      })
  }

  let router = ms.router()
  router
    .add('/nav', 'get', getNav)
  return router
};
