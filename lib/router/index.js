var cluster = require('cluster');
var async = require('async');
var jm = require('jm-ms-core');
var ms = jm.ms;
var logger = jm.getLogger('jm-oms');
module.exports = function (service, opts) {
    var router = ms();
    if (service.debug) {
        router.use(function (opts, cb, next) {
            logger.debug(opts);
            next();
        });
    }
    service.routes || ( service.routes = {} );
    var routes = service.routes;

    var package = require('../../package.json');
    routes.help = function (opts, cb, next) {
        var o = {
            name: package.name,
            version: package.version
        };
        if (cluster.isWorker) {
            o.clusterId = cluster.worker.id;
        }
        cb(null, o);
    };

    var _help = function (opts, cb, next) {
        routes.help(opts, cb, next);
    };
    var getNav =function (opts, cb) {
        if(!opts.data.acl_user) return cb(null, jm.ERR.FA_NOAUTH);
        var user = opts.data.acl_user;
        var nav=[];
        async.waterfall([
            function (cb) {
                var all=[];
                service.nav.list(opts,function (err, doc) {
                    doc.forEach(function (item) {
                        format(item,all)
                    });
                    console.log(all);
                    cb(err,doc.ret)
                });
            },
            function (all,cb) {
                var limited=[];
                service.acl.getResources(opts,function (err,doc) {
                    if(err){
                        return cb(err,null)
                    }
                    all.forEach(function (item) {
                        if(doc[item.code]){
                            limited.push(item);
                        }else{
                            nav.push(item);
                        }
                    });
                    cb(null,limited)
                })
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

            cb(null,{ret:tree(nav)});
        })
    };
    //解剖树结构
    function format(item,ary) {
        ary.push(item);
        if(item.children){
            item.children.forEach(function (key) {
                key.parent=item.code;
                format(key,ary);
            })
        }
    }
    //合成树
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

    router.add('/', 'get', _help)
          .add('/nav','get', getNav)
          .use('/init', require('./init')(service))
          .use('/navs', require('./nav')(service, opts));

    return router;
};


