var config = {
    development: {
        debug: true,
        port: 20170,
        prefix:'/oms',
        mq: 'redis://localhost:6379',
        sdk: 'http://localhost:20200',
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

