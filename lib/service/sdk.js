require('jm-config/sdk');
var jm = require('jm-sdk-core');
var logger = jm.getLogger('jm-oms');

module.exports = function(service, opts) {
    opts || (opts = {});
    if(!opts.sdk) return null;
    var sdk = jm.sdk;
    sdk.init({uri: opts.sdk});

    function signon() {
        sdk.sso.signon(opts.user, function(err, doc){
            if(err){
                logger.error(err.stack);
                logger.error('sdk signon fail. %j', doc);
            }else{
                logger.debug('sdk sigon success. %s', utils.formatJSON(doc));
                if(sdk.user && sdk.user.token) sdk.sso.signout({token: sdk.user.token});
                sdk.user = doc;
                sdk.emit('signon', doc);
                setTimeout(signon, 20 * 3600 * 1000);
            }
        });
    }
    if(opts.user){
        signon();
    }

    return sdk;
};
