require('log4js').configure(require('path').join(__dirname, 'log4js.json'))
var config = {
  development: {
    debug: true,
    port: 3000,
    configRoot: 'oms',
    gateway: 'http://api.h5.jamma.cn:81',
    modules: {
      oms: {
        module: process.cwd() + '/src'
      }
    }
  },
  production: {
    port: 80,
    gateway: 'http://gateway.app',
    modules: {
      oms: {
        module: process.cwd() + '/lib'
      }
    }
  }
}

var env = process.env.NODE_ENV || 'development'
config = config[env] || config['development']
config.env = env

module.exports = config
