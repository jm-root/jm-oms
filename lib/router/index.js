var cluster = require('cluster');
var async = require('async');
var jm = require('jm-ms-core');
var ms = jm.ms;
var logger = jm.getLogger('jm-oms');
module.exports = function (service, opts) {
    var router = ms();
    if (service.debug) {
        router.use(function (opts, cb, next) {
            logger.debug(opts);
            next();
        });
    }
    service.routes || ( service.routes = {} );
    var routes = service.routes;

    var package = require('../../package.json');
    routes.help = function (opts, cb, next) {
        var o = {
            name: package.name,
            version: package.version
        };
        if (cluster.isWorker) {
            o.clusterId = cluster.worker.id;
        }
        cb(null, o);
    };

    var _help = function (opts, cb, next) {
        routes.help(opts, cb, next);
    };
    router.add('/', 'get', _help);
    router.use('/init', require('./init')(service));

    router.use('/navs', require('./nav')(service, opts));
    return router;
};


