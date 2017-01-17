var config = {
    development: {
        debug: true,
        port: 20170,
        prefix:'/oms',
        mq: 'redis://192.168.0.33:6379',
        sdk: 'http://192.168.0.55:19990',
        ms: [
            {
                type: 'ws'
            },
            {
                type: 'http'
            }
        ]
    },
    production: {
        port: 20170,
        prefix:'/oms',
        mq: 'redis://redis:6379',
        sdk: 'http://sdk:19990',
        ms: [
            {
                type: 'ws'
            },
            {
                type: 'http'
            }
        ]
    }
};

var env = process.env.NODE_ENV||'development';
config = config[env]||config['development'];
config.env = env;

['debug', 'port', 'prefix', 'trustProxy', 'mq', 'sdk'].forEach(function(key) {
    process.env[key] && (config[key]=process.env[key]);
});

module.exports = config;

