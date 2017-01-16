/**
 * Created by jacsion on 2016/3/24.
 */
var async = require('async');
var _ = require('lodash');
var path = require('path');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var counts = require('../../consts');
var MqHkey = counts.MqHkey;
var ERROR = counts.Error;
var jm =  require('jm-common');
var ms = jm.ms;

module.exports = function(service, opts) {
    var router = ms();
    var logger = service.logger;
    /**
     * @api {get} /list 玩家列表
     * @apiVersion 0.0.1
     * @apiGroup oms
     * @apiUse Error
     *
     * @apiParam {Number} [page=1] 第几页(可选).
     * @apiParam {Number} [rows=10] 一页几行(可选,默认10).
     * @apiParam {String} [startDate] 开始时间(可选).
     * @apiParam {String} [endDate] 结束时间(可选).
     * @apiParam {String} [search] 模糊查询(可选).
     * @apiParam {Boolean} [active] 是否激活(可选).
     * @apiParam {Number} [type] 类型(可选,0:游客,1:手机,2:微信,3:QQ).
     *
     * @apiParamExample {json} 请求参数例子:
     * {
     * }
     *
     * @apiSuccessExample {json} 成功:
     * {
     * }
     */
    router.add ('/list','get', function(opts,cb) {
        var page = opts.data.page;
        var rows = opts.data.rows;
        var search = opts.data.search;
        var startDate = opts.data.startDate;
        var endDate = opts.data.endDate;
        var active = opts.data.active;
        var type = opts.data.type;

        var host = service.config.sdk;
        var url = host+"/sso/users";
        async.waterfall([
            function(cb){//查用户
                request.get(url)
                    .query({
                        token:service.identity.token,
                        page: page,
                        rows: rows,
                        startDate: startDate,
                        endDate: endDate,
                        tags:'$unexist',
                        keyword: search,
                        active: active,
                        type: type
                    })
                    .end(function(err,res){
                        if(res&&res.body.err) err = res.body;
                        if(err) return cb(err);
                        cb(null,res.body);
                    });
            },
            function(obj,cb){ //拼数据
                var rows = obj.rows || [];
                async.eachSeries(rows,function(item,callback){
                    async.parallel([
                        function(cb){//查账户
                            service.sdk.bank.query({token:service.identity.token,userId:item._id},function(err,doc){
                                if(err){
                                    logger.error(doc||err);
                                    return cb();
                                }
                                item.hold = doc||{};
                                cb();
                            });
                        },
                        function(cb){
                            request.get(host+"/record/stat")
                                .query({
                                    token:service.identity.token,
                                    type: 5,
                                    content: 'jb',
                                    userId:item._id,
                                    statType: 2
                                })
                                .end(function(err,res){
                                    if(res&&res.body.err) err = res.body;
                                    if(err) return cb(err);
                                    var rows = res.body.rows||[];
                                    var amount = 0;
                                    rows.forEach(function(obj){
                                        amount += obj.amount;
                                    });
                                    item.record = item.record || {};
                                    item.record.expend_jb = Math.round(amount||0);
                                    cb();
                                });
                        },
                        function(cb){
                            var startDate = moment().startOf('day').toString();
                            var endDate = moment().endOf('day').toString();
                            request.get(host+"/record/stat")
                                .query({
                                    token:service.identity.token,
                                    type: 4,
                                    content: 'jb',
                                    userId:item._id,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                                .end(function(err,res){
                                    if(res&&res.body.err) err = res.body;
                                    if(err) return cb(err);
                                    var o = res.body.rows[0]||{};
                                    var income = o.amount||0;
                                    request.get(host+"/record/stat")
                                        .query({
                                            token:service.identity.token,
                                            type: 5,
                                            content: 'jb',
                                            userId:item._id,
                                            startDate: startDate,
                                            endDate: endDate
                                        })
                                        .end(function(err,res){
                                            if(res&&res.body.err) err = res.body;
                                            if(err) return cb(err);
                                            var o = res.body.rows[0]||{};
                                            var cost = o.amount||0;
                                            item.record.gain_jb = Math.round((income-cost)||0);
                                            cb();
                                        });
                                });
                        }
                    ],function(err,result){
                        if(err) logger.error(err);
                        callback();
                    });
                },function(err){
                    cb(null, obj);
                });
            }
        ],function(err,result){
            if(err){
                cb(err,null)
            }
           cb(result||{});
        });
    });

    /**
     * @api {get} /:id/gameStat 玩家游戏数据列表
     * @apiVersion 0.0.1
     * @apiGroup oms
     * @apiUse Error
     *
     * @apiParam {Number} [page=1] 第几页(可选).
     * @apiParam {Number} [rows=10] 一页几行(可选,默认10).
     * @apiParam {String} [search] 模糊查询(可选).
     *
     * @apiParamExample {json} 请求参数例子:
     * {
     * }
     *
     * @apiSuccessExample {json} 成功:
     * {
     * }
     */
    router.add ('/:id/gameStat','get', function(opts,cb) {
        var userId = req.params.id;
        if(!ObjectId.isValid(userId)){
            return next('route');
        }
        var page = opts.data.page;
        var rows = opts.data.rows;
        var host = service.config.sdk;

        async.waterfall([
            function(cb){//获取应用数据
                request.get(host+"/appManager/apps")
                    .query({
                        token:service.identity.token,
                        page: page,
                        rows: rows,
                        status:1
                    })
                    .end(function(err,res){
                        if(res&&res.body.err) err = res.body;
                        if(err) return cb(err);
                        cb(null, res.body);
                    });
            },
            function(obj, cb){
                var ary = [];
                async.eachSeries(obj.rows||[],function(item,callback){
                    var appid = item._id;
                    item = {name:item.name};
                    async.parallel([
                        function(cb){//查用户在游戏里的金币总收益
                            request.get(host+"/bank/stat")
                                .query({
                                    token: service.identity.token,
                                    ctCode: 'jb',
                                    fromUserId: appid,
                                    toUserId: userId,
                                    statType: 2
                                })
                                .end(function(err,res){
                                    if(res&&res.body.err) err = res.body;
                                    if(err) return cb(err);
                                    var rows = res.body.rows||[];
                                    var income = 0;
                                    rows.forEach(function(obj){
                                        income += obj.amount;
                                    });
                                    request.get(host+"/bank/stat")
                                        .query({
                                            token: service.identity.token,
                                            ctCode: 'jb',
                                            fromUserId: userId,
                                            toUserId: appid,
                                            statType: 2
                                        })
                                        .end(function(err,res){
                                            if(res&&res.body.err) err = res.body;
                                            if(err) return cb(err);
                                            var rows = res.body.rows||[];
                                            var expend = 0;
                                            rows.forEach(function(obj){
                                                expend += obj.amount;
                                            });
                                            item.gain_jb = Math.round(income-expend);
                                            cb();
                                        });
                                });
                        },
                        function(cb){//查用户在游戏里的夺宝卷总收益
                            request.get(host+"/bank/stat")
                                .query({
                                    token: service.identity.token,
                                    ctCode: 'dbj',
                                    fromUserId: appid,
                                    toUserId: userId,
                                    statType: 2
                                })
                                .end(function(err,res){
                                    if(res&&res.body.err) err = res.body;
                                    if(err) return cb(err);
                                    var rows = res.body.rows||[];
                                    var income = 0;
                                    rows.forEach(function(obj){
                                        income += obj.amount;
                                    });
                                    request.get(host+"/bank/stat")
                                        .query({
                                            token: service.identity.token,
                                            ctCode: 'dbj',
                                            fromUserId: userId,
                                            toUserId: appid,
                                            statType: 2
                                        })
                                        .end(function(err,res){
                                            if(res&&res.body.err) err = res.body;
                                            if(err) return cb(err);
                                            var rows = res.body.rows||[];
                                            var expend = 0;
                                            rows.forEach(function(obj){
                                                expend += obj.amount;
                                            });
                                            item.gain_dbj = Math.round(income-expend);
                                            cb();
                                        });
                                });
                        },
                        function(cb){//查今天总收益
                            var startDate = moment().startOf('day').toString();
                            var endDate = moment().endOf('day').toString();
                            request.get(host+"/bank/stat")
                                .query({
                                    token: service.identity.token,
                                    ctCode: 'jb',
                                    fromUserId: appid,
                                    toUserId: userId,
                                    statType: 0,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                                .end(function(err,res){
                                    if(res&&res.body.err) err = res.body;
                                    if(err) return cb(err);
                                    var rows = res.body.rows||[];
                                    var income = 0;
                                    rows.forEach(function(obj){
                                        income += obj.amount;
                                    });
                                    request.get(host+"/bank/stat")
                                        .query({
                                            token: service.identity.token,
                                            ctCode: 'jb',
                                            fromUserId: userId,
                                            toUserId: appid,
                                            statType: 0,
                                            startDate: startDate,
                                            endDate: endDate
                                        })
                                        .end(function(err,res){
                                            if(res&&res.body.err) err = res.body;
                                            if(err) return cb(err);
                                            var rows = res.body.rows||[];
                                            var expend = 0;
                                            rows.forEach(function(obj){
                                                expend += obj.amount;
                                            });
                                            item.gain_day_jb = Math.round(income-expend);
                                            cb();
                                        });
                                });
                        }
                    ],function(err,result){
                        if(err) logger.error(err);
                        ary.push(item);
                        callback();
                    });
                },function(err){
                    obj.rows = ary;
                    cb(null, obj);
                });
            }
        ],function(err,result){
            if(err){
                cb(err,null);
            }
           cb(result||{});
        });
    });


    return router;
};