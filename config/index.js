var config = {
    development: {
        debug: true,
        port: 20170,
        prefix:'/oms',
        mq: 'redis://localhost',
        sdk: 'http://test.gzleidi.cn:82',
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
        mq: 'redis://redis.db',
        sdk: 'http://api.web',
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

