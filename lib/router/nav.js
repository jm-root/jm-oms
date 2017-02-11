var jm =  require('jm-ms-core');

var ms = jm.ms;
module.exports = function(service, opts) {
    var router = ms();

    var list = function(opts, cb) {
        service.nav.list(opts, cb);
    };
    var putNav=function (opts, cb) {
        service.nav.putNav(opts, cb);
    };
    router
        .add('/all', 'get', list)
        .add('/init', 'post', putNav)
    ;

    return router;
};
