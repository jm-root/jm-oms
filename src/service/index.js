import MS from 'jm-ms'
import nav from './nav'

let ms = MS()
export default function (opts = {}) {
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
  return o
}
