/**
 * Created by jacsion on 2016/3/24.
 */
var async = require('async');
var _ = require('lodash');
var path = require('path');
var jmcommon = require('jm-common');
var express = require('express');
var http = require("http");
var request = require('superagent');
var counts = require('../../consts');
var MqHkey = counts.MqHkey;
var ERROR = counts.Error;
var jm =  require('jm-common');
var ms = jm.ms;
module.exports = function(service, opts) {
    var router = ms();
    var locales = service.locales;
    var navPath = path.join(__dirname,'../../config/nav_admin.json');
    function tree(resources) {
        var roots = [];
        var nodes = {};
        for(var i in resources){
            var node = resources[i];
            if(nodes[node.code]){
                node.children = nodes[node.code].children;
            }
            nodes[node.code] = node;
            if(node.parent){
                nodes[node.parent] || (nodes[node.parent]={});
                nodes[node.parent].children || (nodes[node.parent].children = []);
                nodes[node.parent].children.push(node);
            } else {
                roots.push(node);
            }
        }
        return roots;
    }

    /**
     * 导航菜单
     */
    var getNav=function (opts, cb) {
        var res = jmcommon.utils.readJsonSync(navPath);
      /*  if(!opts.data.acl || !opts.data.acl_user) return cb(null, jm.ERR.FA_NOAUTH);
        var user = opts.data.acl_user;*/
       var user='57563e1430a23d5239ea2068';
        var nav=[];
        async.waterfall([
            function (cb) {
                service.acl.getResources(opts,function (err,doc) {
                    if(err){
                        return cb(err,null)
                    }
                    cb(null,doc.ret)
                })
            },
            function (allResource,cb) {
                var limited=[];
                res.forEach(function (item) {
                    if(allResource[item.code]){
                        limited.push(item);
                    }else{
                        nav.push(item);
                    }
                });
                cb(null,limited)
            },
            function (limitedResources,cb) {
                service.acl.userResources(user,function (err, doc) {
                    if(err){
                        return cb(err,null)
                    }
                    limitedResources.forEach(function (item) {
                        if(doc[code]&&doc[code].indexOf('get')!=-1){
                            nav.push(item)
                        }
                    });
                    cb(null,doc)
                });
            }
        ],function (err,doc) {
            if(err){
                return cb(err);
            }

            cb(null,{rows:tree(nav)});
        })
    };
    var getNavConfig=function(opts, cb) {
        var o = jmcommon.utils.readJsonSync(navPath);
        cb(null,o);
    };
    var postNavConfig= function(opts, cb) {
        var data = opts.data.data;
        if(typeof data == 'string'){
            try{data = JSON.parse(data);}catch (e){data = null;}
        }

        if(!data||!_.isObjectLike(data)) return cb(ERROR.FAIL(req.locale));

        jmcommon.utils.writeJsonSync(navPath, data);
        cb({});
    };
    function formatCurrency(obj){
        var ary = [];
        for(var key in obj){
            ary.push({code:key,title:obj[key]});
        }
        return ary;
    }
    var getCurRencys=function(opts,cb) {
        var hkey = MqHkey.CurrencyDict;
        service.sdk.config.listConfig({root:hkey,all:true},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            cb(null,{rows:formatCurrency(o)});
        });
    };
    var postCurRencys=function(opts,cb) {
        var code = opts.data.code;
        var title = opts.data.title;

        var hkey = MqHkey.CurrencyDict;
        service.sdk.config.setConfig({root:hkey,key:code,value:title},function(err,result){
            if(err) return cb(ERROR.FAIL(req.locale));
            service.sdk.config.listConfig({root:hkey,all:true},function(err,o){
                if(err) return cb(ERROR.FAIL(req.locale));
                cb(null,{rows:formatCurrency(o)});
            });
        });
    };
    var delCurRencys=function(opts,cb) {
        var code =  opts.data.code;
        var hkey = MqHkey.CurrencyDict;
        service.sdk.config.delConfig({root:hkey,key:code},function(err,result){
            if(err) return cb(ERROR.FAIL(req.locale));
            service.sdk.config.listConfig({root:hkey,all:true},function(err,o){
                if(err) return cb(ERROR.FAIL(req.locale));
                cb(null,{rows:formatCurrency(o)});
            });
        });
    };

    function formatRate(obj,dict){
        dict = dict || {};
        var ary = [];
        for(var key in obj){
            var rate = obj[key];
            var cy = key.split(':');
            var from = cy[0];
            var to = cy[1];
            var o = {
                from: from,
                to: to,
                fromName: dict[from],
                toName: dict[to],
                rate: Number(rate)
            };
            ary.push(o);
        }
        return ary;
    }

    var getRates=function(opts,cb) {
        service.sdk.config.listConfig({root:MqHkey.CurrencyDict,all:true},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            var hkey = MqHkey.ExchangeRate;
            service.sdk.config.listConfig({root:hkey,all:true},function(err,result){
                if(err) return cb(ERROR.FAIL(req.locale));
                cb(null,{rows:formatRate(result,o)});
            });
        });
    };
    var postRates=function(opts,cb) {
        var from = opts.data.from;
        var to = opts.data.to;
        var rate = opts.data.rate;

        if(isNaN(rate)){
            return cb(ERROR.PARAM(req.locale,'[rate]'));
        }
        if(from==to){
            return cb({err:ERROR.FAIL(req.locale).err,msg:locales.t('bank:CurrencyExchangeIsNotTheSame',{lng:req.locale})});
        }
        var key = from+':'+to;
        var hkey = MqHkey.ExchangeRate;
        service.sdk.config.listConfig({root:MqHkey.CurrencyDict,all:true},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            if(!o[from]||!o[to]){
                return cb({err:ERROR.FAIL(req.locale).err,msg:locales.t('bank:InvalidCurrency',{lng:req.locale})});
            }
            service.sdk.config.setConfig({root:hkey,key:key,value:Number(rate)},function(err,result){
                if(err) return cb(ERROR.FAIL(req.locale));
                service.sdk.config.listConfig({root:hkey,all:true},function(err,result){
                    if(err) return cb(ERROR.FAIL(req.locale));
                    cb(null,{rows: formatRate(result, o)});
                });
            });
        });
    };
    var delRates=function(opts,cb) {
        var key = req.query.key || opts.data.key;
        var hkey = MqHkey.ExchangeRate;
        service.sdk.config.listConfig({root:MqHkey.CurrencyDict,all:true},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            service.sdk.config.delConfig({root:hkey,key:key},function(err,result){
                if(err) return cb(ERROR.FAIL(req.locale));
                service.sdk.config.listConfig({root:hkey,all:true},function(err,result){
                    if(err) return cb(ERROR.FAIL(req.locale));
                    cb(null,{rows: formatRate(result, o)});
                });
            });
        });
    };
    var getSystemInit=function(opts,cb) {
        service.sdk.config.listConfig({root:MqHkey.SystemInit,all:true},function(err,o){
            if(err) return cb(err);
            cb(null,o||{});
        });
    }
    var postSystemInit=function(opts,cb) {
        var value = opts.data.value||{};
        service.sdk.config.setConfigs({root:MqHkey.SystemInit,value:value},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            cb();
        });
    }
    var delSystemInit=function(opts,cb) {
        var key =  opts.data.key||'';
        service.sdk.config.delConfig({root:MqHkey.SystemInit,key:key},function(err,o){
            if(err) return cb(ERROR.FAIL(req.locale));
            cb();
        });
    };
    var postSystemConfig=function(opts,cb) {
        var name = opts.data.name;
        if(!name) return cb(ERROR.PARAM(req.locale,'[name]'));
        var channel = 'systemconfig.'+name;
        service.mq.publish(channel,JSON.stringify({}));
        cb({});
    };
    router.add('/', 'get',getNav)
          .add('/navconfig','get',getNavConfig)
          .add('/navconfig','post',postNavConfig)
          .add('/currencys', 'get',getCurRencys)
          .add('/currencys','post',postCurRencys )
          .add('/currencys','delete',delCurRencys )
          .add('/rates','get', getRates)
          .add('/rates','post',postRates )
          .add('/rates', 'delete',delRates)
          .add('/systeminit','get', getSystemInit)
          .add('/systeminit', 'post',postSystemInit)
          .add('/systeminit','delete',delSystemInit )
          .add('/systemconfig','post',postSystemConfig );
    router.add('/system/init','post', function(opts,cb) {
        service.sdk.config.listConfig({root:MqHkey.SystemInit,all:true},function(err,o){
            if(err) return cb({});
            o = o || {};
            var pending = _.size(o);
            if(!pending) return cb({});

            for(var key in o){
                var obj = o[key] || {};
                var isInit = obj.isInit;
                if(isInit){
                    var server = service.config.sdk+"/"+ key +"/init?token="+opts.data.token;
                    http.get(server, function (resp) {
                        console.log("server: " + server);
                        var size = 0;
                        var chunks = [];
                        resp.on('data', function(chunk){
                            size += chunk.length;
                            chunks.push(chunk);
                        });
                        resp.on('end', function(){
                            var data = Buffer.concat(chunks, size);
                            console.log("%s res: %j", key, data.toString());
                            if (!--pending) cb({});
                        });
                    }).on("err", function (e) {
                        console.log("%s errer: %j", key, e);
                        if (!--pending) cb({});
                    });
                }else{
                    if (!--pending) cb({});
                }
            }
        });
    });




    router.add('/stat','get', function (opts,cb) {
        var fields_sso = opts.data.fields_sso;
        var fields_pay = opts.data.fields_pay;
        var fields = opts.data.fields;
        if(fields){
            if(typeof fields == 'string'){
                try{fields = JSON.parse(fields);}catch(e){fields=null;}
            }
            if(!_.isPlainObject(fields)){
                return cb(ERROR.PARAM(req.locale,'[fields]'));
            }
        }else{
            fields = {user:1,pay:1};
        }
        var host = service.config.sdk;
        async.parallel({
            user: function (cb) {//用户统计
                request.get(host+'/sso/stat')
                    .query({
                        token: service.identity.token,
                        fields: fields_sso
                    })
                    .end(function(err,res){
                        if(res&&res.body.err) err = res.body;
                        if(err) return cb(err);
                        cb(null,res.body);
                    });
            },
            pay: function (cb) {//支付统计
                request.get(host+'/pay/stat')
                    .query({
                        token: service.identity.token,
                        fields: fields_pay
                    })
                    .end(function(err,res){
                        if(res&&res.body.err) err = res.body;
                        if(err) return cb(err);
                        cb(null,res.body);
                    });
            }
        }, function (err, result) {
            if (err) return cb(ERROR.SYSTEM(req.locale));
            cb(result||{});
        });
    });

    /**
     * @api {get} /cfg 查询配置(可查项,键,值)
     * @apiVersion 0.0.1
     * @apiGroup oms
     * @apiUse Error
     *
     * @apiParam {String} [hkey] 配置项(可选,不传查配置项).
     * @apiParam {String} [key] 配置键(可选,hkey和key都传查询具体配置).
     * @apiParam {String} [search] 模糊查询(可选,只有配置项有效).
     *
     * @apiParamExample {json} 请求参数例子:
     * {
     * }
     *
     * @apiSuccessExample {json} 成功:
     * 方式一:返回具体配置
     * {}
     * 方式二:返回配置项或键
     * {
     *  rows:[]
     * }
     */
    router.add('/cfg','get', function (opts,cb) {
        var hkey = opts.data.hkey;
        var key = opts.data.key;
        var search = opts.data.search||'*';
        if(hkey&&key){//返回具体配置
            service.sdk.config.getConfig({root:hkey,key:key},function(err,o){
                if(err) return cb(ERROR.FAIL(req.locale));
                var ret = o.ret || {};
                cb(null,ret);
            });
        }else if(hkey){//返回配置键
            service.sdk.config.listConfig({root:hkey},function(err,o){
                if(err) return cb(ERROR.FAIL(req.locale));
                cb(null,o||{rows:[]});
            });
        }else{//返回配置项
            if(search) search = '*'+search+'*';
            service.mq.client.keys(search,function(err,doc){
                if(err) return cb(ERROR.FAIL(req.locale));
                var rows = doc || [];
                cb(null,{rows:rows});
            });
        }
    });

    /**
     * @api {post} /cfg 设置配置
     * @apiVersion 0.0.1
     * @apiGroup oms
     * @apiUse Error
     *
     * @apiParam {String} [root] 配置项(可选).
     * @apiParam {String} [key] 配置键(必填).
     * @apiParam {String} [value] 配置值(可选).
     *
     * @apiParamExample {json} 请求参数例子:
     * {
     * }
     *
     * @apiSuccessExample {json} 成功:
     * {
     *  ret: true|false
     * }
     */
    router.add('/cfg','post', function(opts,cb) {
        var root = opts.data.root;
        var key = opts.data.key;
        var value = opts.data.value;

        service.sdk.config.setConfig({root:root,key:key,value:value},function(err,result){
            if(err) return cb(ERROR.FAIL(req.locale));
            cb(null,result||{});
        });
    });

    /**
     * @api {delete} /cfg 删除配置
     * @apiVersion 0.0.1
     * @apiGroup oms
     * @apiUse Error
     *
     * @apiParam {String} [root] 配置项(可选,只传该值将删除该所有配置).
     * @apiParam {String} [key] 配置键(可选,root加key只删除对应key的值).
     *
     * @apiParamExample {json} 请求参数例子:
     * {
     * }
     *
     * @apiSuccessExample {json} 成功:
     * {
     *  ret: true|false
     * }
     */
    router.add('/cfg','delete', function(opts,cb) {
        var root = opts.data.root;
        var key = opts.data.key;
        var all = opts.data.all;
        if(!key&&all==undefined){
            all = true;
        }
        service.sdk.config.delConfig({root:root,key:key,all:all},function(err,result){
            if(err) return cb(ERROR.FAIL(req.locale));
            cb(null,result||{});
        });
    });

    return router;
};