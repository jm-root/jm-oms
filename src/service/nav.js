import defaultNav from '../../config/nav'
import Promis from 'bluebird'

export default function (service, opts = {}) {
  let root = opts.configRoot || 'oms'
  let uri = '/' + root + '/nav'
  let o = {
    init: function (opts = {}) {
      let nav = opts.nav || defaultNav
      return new Promis(function (resolve, reject) {
        service.config.post(uri,
          {
            value: nav
          },
          function (err, doc) {
            if (err) throw err
            resolve(nav)
          })
      })
    },
    get: function (opts) {
      let self = this
      return new Promis(function (resolve, reject) {
        service.config.get(uri,
          function (err, doc) {
            if (err) throw err

            if (!doc || !doc.ret) {
              return self.init()
            }
            resolve(doc.ret)
          })
      })
    },
    set: function (opts) {
      let nav = opts.data.nav
      return new Promis(function (resolve, reject) {
        service.config.post(uri,
          {
            value: nav.value
          },
          function (err, doc) {
            if (err) throw err
            resolve(doc)
          })
      })
    }
  }

  return o
}
