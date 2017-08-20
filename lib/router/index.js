'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var service = this;

  var getNav = function getNav() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    opts.headers || (opts.headers = {});
    var user = opts.headers.acl_user;
    service.nav.get().then(function (doc) {
      cb(null, { ret: doc });
    });
  };

  var router = ms.router();
  router.add('/nav', 'get', getNav);
  return router;
};

var _jmMsCore = require('jm-ms-core');

var _jmMsCore2 = _interopRequireDefault(_jmMsCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ms = new _jmMsCore2.default();
;
module.exports = exports['default'];