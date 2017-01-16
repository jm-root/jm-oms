var _ = require('lodash');
var async = require('async');
var jm = require('jm-core');
var mq = require('jm-mq');
var config = require('../../config');
jm.root.registries.router = {enable_router_save:true};
module.exports =  function(opts){
    opts = opts || {};
    opts.config = opts.config || {};
    _.defaultsDeep(opts.config, config);
    config = opts.config;
    console.log('oms config version : '+config.env);

    if(typeof config.mq == 'string'){
        config.mq = {url: config.mq};
    }
    config.mq.publishIdName = '$id';

    opts.omsOpts = {
        mq: opts.mq||mq(config.mq)
    };

    var o = {
        config: config
        ,logger: require('./log4js')
        ,utils: require('./utils')
        ,mq: opts.omsOpts.mq
    };

    o.sdk = opts.sdk || require('jm-sdk-core').sdk;
    !opts.sdk&&o.sdk.init({uri:config.sdk});

    o.acl = require('./acl');
    o.sso = o.sdk.sso;

    var refreshConfigEvent = function(obj){
        var keys = ['oms','common'], cfg={};
        async.eachSeries(keys,function(key,callback){
            o.sdk.config.getConfig({
                token: o.identity.token,
                root: 'SystemConfig',
                key: key
            }, function (err, doc) {
                if (!err && !doc.err) {
                    doc = doc.ret || {};
                    cfg = _.defaultsDeep(cfg, doc);
                }
                callback();
            });
        },function(err){
            o.config = _.defaultsDeep(cfg, config);
            o.locales.changeLanguage(o.config.lng,function(err,doc){
                if(err) o.logger.error(err);
            });
        });
    }

    var mqEventMap = {
        'systemconfig.common': refreshConfigEvent,
        'systemconfig.oms': refreshConfigEvent
    };

    o.mq.subscribe(['systemconfig.common','systemconfig.oms']);
    o.mq.onMessage(function(channel,message){
        var obj = null;
        try{
            obj = JSON.parse(message);
        }catch (e){
            return;
        }
        var fun = mqEventMap[channel];
        if(fun) fun(obj);
    });

    return o;
};

