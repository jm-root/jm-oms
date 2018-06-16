const consts = require('../consts')
const defaultNav = require('../../config/nav')

module.exports = function (service, opts = {}) {
  let root = opts.config_root_oms || consts.configRoot
  let uri = '/' + root + '/nav'
  let o = {
    init: async function (opts = {}) {
      let nav = opts.nav || defaultNav
      await this.set(nav)
      return nav
    },
    get: async function (opts) {
      let doc = await service.config.get(uri)
      if (doc && doc.ret) return doc.ret
      doc = await this.init()
      return doc
    },
    set: async function (opts) {
      let doc = await service.config.post(
        uri,
        {
          value: opts
        }
      )
      return doc
    }
  }

  return o
}
