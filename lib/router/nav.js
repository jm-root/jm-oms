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
    var init=function (opts, cb) {
        service.nav.init(opts, cb);
    };
    var delNav=function (opts, cb) {
        service.nav.delNav(opts, cb);
    };
    var getNav =function (opts, cb) {
        if(!opts.data.acl_user) return cb(null, jm.ERR.FA_NOAUTH);
        var user = opts.data.acl_user;
        var nav=[];
        async.waterfall([
            function (cb) {
                var all=[];
                service.nav.list(opts,function (err, doc) {
                    for(var item in doc ){
                        format(doc[item],all);
                    }
                    all.forEach(function (item) {
                        if(item.children){
                            item.children=[];
                        }
                    });
                    cb(err,all)
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
    router
        .add('/','get', getNav)
        .add('/all', 'get', list)
        .add('/init', 'get', init)
        .add('/putNav', 'get', putNav)
        .add('/delRoot', 'get', delNav)
    ;

    return router;
};
