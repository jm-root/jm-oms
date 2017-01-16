var service = require('./service');

module.exports = function(opts){
    opts = opts || {};
    var o = service(opts);
    o.router = function(opts) {
        return require('./router')(o, opts);
    };

    return o;
};