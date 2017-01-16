var service = require('./service');

/**
 * oms服务
 * @class oms
 * @param {Object} [opts={}] 参数
 * @example
 * opts参数:{
 *  sdk:(必填)
 *  mq:(可选，如果有，则更新时通过消息服务器通知重新加载)
 * }
 * @returns {Object}
 * @example
 * 返回结果:{
 * }
 */
module.exports = function(opts){
    opts = opts || {};
    var o = service(opts);
    o.router = function(opts) {
        return require('./router')(o, opts);
    };

    return o;
};
