var async = require('async');
var jm = require('jm-ms-core');
var ms = jm.ms;
var logger = jm.getLogger('jm-oms');
module.exports = function (service, opts) {
    var router = ms();

    router.add('/', 'get', function (opts, cb) {
        async.waterfall([
            function(cb){
                var resources=require('../../config/resources');
                async.each(resources,function (data,callback) {
                    service.acl.initResources(data,function (err, doc) {
                        if(err){
                            logger.debug(err);
                        }
                        console.log(doc);
                        callback();
                    })
                },function (err, doc) {
                    if(err){
                        return cb(null, jm.ERR.FAIL);
                    }
                    cb(null,doc)
                });
            }
        ],function(err,result){
            if(err){
                return cb(err);
            }
            cb(null,{ret:1});
        });
    });

    return router;
};