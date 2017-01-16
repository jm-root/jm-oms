var _ = require('lodash');
var async = require('async');
var path = require('path');
var express = require('express');
var ERROR = require('../../consts').Error;
var jm = require('jm-ms-core');
var ms = jm.ms;
var logger=jm.logger;
module.exports = function (service, opts) {
    var router = ms();
    service.routes || ( service.routes = {} );
    var package = require('../../package.json');
    var packageInfo=function(opts,cb){
        cb(null,{
            name: package.name,
            version: package.version
        });
    };
    router.add('/help','get' ,packageInfo);
    router.add('/init','get' ,function(opts,cb){
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

    router.use('/nav', require('./nav')(service, opts));
    router.use('/players', require('./player')(service, opts));
    return router;
};


