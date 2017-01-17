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
                    for(var key in nav){
                        doc.rows.push(nav[key])
                    }
                    service.sdk.config.setConfigs({
                        root: self.root,
                        value: nav});
                }
                cb(err,doc);
            })
        },
        init: function (opts, cb) {
            var self = this;
            var nav=require('../../config/nav');
            service.sdk.config.setConfigs({
                root: self.root,
                value: nav},function (err, doc) {
                if(err){
                    return cb(err,null);
                }
                cb(null,{ret:1})
            });
        },
        put:function (opts, cb) {
            var self = this;
            var nav=opts.data.config;
            service.sdk.config.setConfigs({
                root: self.root,
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