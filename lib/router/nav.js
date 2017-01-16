var jm =  require('jm-ms-core');
var ms = jm.ms;
module.exports = function(service, opts) {
    var router = ms();

    var list = function(opts, cb) {
        service.nav.list(opts, cb);
    };

    router
        .add('/', 'get', list)
    ;

    return router;
};
