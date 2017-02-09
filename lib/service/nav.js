module.exports = function(service, opts) {
    opts || (opts = {});

    var o = {
        root: opts.root || 'jm:oms:nav',
        list: function(opts, cb){
            var self = this;
            service.sdk.config.listConfig({
                root: self.root
            }, function(err, doc){
                if(err || !doc || !doc.ret) {
                    err = null;
                    var nav=require('../../config/nav');
                    doc={rows:[]};
                    var navs={};
                    nav.forEach(function (item) {
                        doc.rows.push(item);
                        navs[item.code]=item;
                    });
                    service.sdk.config.setConfigs({
                        root: self.root,
                        value: navs});
                }
                cb(err,doc);
            })
        },
        init: function (opts, cb) {
            var self = this;
            var nav=require('../../config/nav');
            var navs={};
            nav.forEach(function (item) {
                navs[item.code]=item;
            });
            service.sdk.config.setConfigs({
                root: self.root,
                value: navs},function (err, doc) {
                if(err){
                    return cb(err,null);
                }
                cb(null,{ret:1})
            });
        },
        putNav:function (opts, cb) {
            var self = this;
            var nav=opts.data.config;
            service.sdk.config.setConfig({
                root: self.root,
                key:nav.code,
                value: nav},function (err, doc) {
                if(err){
                    return cb(err,null);
                }
                cb(null,{ret:1})
            });
        }
    };

    return o;
};