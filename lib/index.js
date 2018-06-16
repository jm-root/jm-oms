const service = require('./service')
const router = require('./router')
const log = require('jm-log4js')
let logger = log.getLogger('oms')

module.exports = function (opts = {}) {
  // ---- deprecated begin ----
  let o = {
    configRoot: 'config_root_oms'
  }
  Object.keys(o).forEach(function (key) {
    let bWarn = false
    if (opts[key] !== undefined) {
      opts[o[key]] = opts[key]
      delete opts[key]
      bWarn = true
    }
    if (process.env[key]) {
      opts[o[key]] = process.env[key]
      bWarn = true
    }
    bWarn && (logger.warn('%s deprecated, please use %s', key, o[key]))
  })
  // ---- deprecated end ----

  const v = ['config_root_oms', 'gateway']
  v.forEach(function (key) {
    process.env[key] && (opts[key] = process.env[key])
  })

  o = service(opts)
  o.router = router
  return o
}
