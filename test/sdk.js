var jm = jm || {};
if (typeof module !== 'undefined' && module.exports) {
    jm = require('../sdk');
}

(function(){
    var sdk = jm.sdk;
    var logger = jm.logger;
    var utils = jm.utils;

    var log = function(err, doc){
        if (err) {
            logger.error(err.stack);
        }
        if(doc){
            logger.debug('%s', utils.formatJSON(doc));
        }
    };

    sdk.on('open', function(name){
        if(name !== 'oms') return;
        sdk.oms.nav({
            token: '7f2b90212b9c8f36bdeacb2ead7ff9f9764f95bbd4c880694c0f38076a4e0b33'
        }, log);
    });

    var sdkConfig = sdkConfig || {
            uri: 'ws://192.168.0.55:19990'
        };
    sdk.init(sdkConfig);
})();