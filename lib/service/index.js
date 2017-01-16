var jm = require('jm-core');

module.exports =  function(opts){
    opts || (opts = {});
    var mq = opts.mq || null;
    var debug = opts.debug || false;

    var o = {
        mq: mq,
        debug: debug
    };
    jm.enableEvent(o);

    o.acl = require('./acl');

    return o;
};

