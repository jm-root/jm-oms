module.exports = function(service, opts) {
    opts || (opts = {});

    var o = {
        root: opts.root || 'oms',
        list: function(opts, cb){
            var self = this;
            service.sdk.config.getConfig({
                root: self.root,
                key: 'nav',
            }, function(err, doc){
                if(err || !doc || !doc.ret) {
                    err = null;
                    doc = {ret: require('../../config/nav')};      //测试用
                    service.sdk.config.setConfig({
                        root: self.root,
                        key: 'nav',
                        value: doc.ret});
                }
                cb(err, doc);
            })
        }
    };
    //
    //
    // function tree(resources) {
    //     var roots = [];
    //     var nodes = {};
    //     for(var i in resources){
    //         var node = resources[i];
    //         if(nodes[node.code]){
    //             node.children = nodes[node.code].children;
    //         }
    //         nodes[node.code] = node;
    //         if(node.parent){
    //             nodes[node.parent] || (nodes[node.parent]={});
    //             nodes[node.parent].children || (nodes[node.parent].children = []);
    //             nodes[node.parent].children.push(node);
    //         } else {
    //             roots.push(node);
    //         }
    //     }
    //     return roots;
    // }
    //
    // /**
    //  * 导航菜单
    //  */
    // var getNav=function (opts, cb) {
    //     var res = jmcommon.utils.readJsonSync(navPath);
    //   /*  if(!opts.data.acl || !opts.data.acl_user) return cb(null, jm.ERR.FA_NOAUTH);
    //     var user = opts.data.acl_user;*/
    //    var user='57563e1430a23d5239ea2068';
    //     var nav=[];
    //     async.waterfall([
    //         function (cb) {
    //             service.acl.getResources(opts,function (err,doc) {
    //                 if(err){
    //                     return cb(err,null)
    //                 }
    //                 cb(null,doc.ret)
    //             })
    //         },
    //         function (allResource,cb) {
    //             var limited=[];
    //             res.forEach(function (item) {
    //                 if(allResource[item.code]){
    //                     limited.push(item);
    //                 }else{
    //                     nav.push(item);
    //                 }
    //             });
    //             cb(null,limited)
    //         },
    //         function (limitedResources,cb) {
    //             service.acl.userResources(user,function (err, doc) {
    //                 if(err){
    //                     return cb(err,null)
    //                 }
    //                 limitedResources.forEach(function (item) {
    //                     if(doc[code]&&doc[code].indexOf('get')!=-1){
    //                         nav.push(item)
    //                     }
    //                 });
    //                 cb(null,doc)
    //             });
    //         }
    //     ],function (err,doc) {
    //         if(err){
    //             return cb(err);
    //         }
    //
    //         cb(null,{rows:tree(nav)});
    //     })
    // };

    return o;
};