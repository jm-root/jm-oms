require('log4js').configure(__dirname + '/log4js.json');
var config = {
    development: {
        debug: true,
        port: 20170,
        mq: 'redis://localhost',
        sdk: 'http://test.gzleidi.cn:82',
        modules: {
            oms: {
                module: process.cwd() + '/lib'
            }
        }
    },
    production: {
        port: 20170,
        mq: 'redis://redis.db',
        sdk: 'http://api.web',
        modules: {
            oms: {
                module: process.cwd() + '/lib'
            }
        }
    }
};

var env = process.env.NODE_ENV||'development';
config = config[env]||config['development'];
config.env = env;

module.exports = config;

