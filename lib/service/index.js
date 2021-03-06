const MS = require('jm-ms')
const nav = require('./nav')
const acl = require('./acl')

let ms = MS()
module.exports = function (opts = {}) {
  let o = {
    config: opts,
    ready: true
  }
  let bind = function (name, uri) {
    uri || (uri = '/' + name)
    ms.client({
      uri: opts.gateway + uri
    }, function (err, doc) {
      !err && doc && (o[name] = doc)
    })
  }
  bind('acl')
  bind('config')
  o.nav = nav(o, opts)
  o.omsAcl = acl(o, opts)
  return o
}
