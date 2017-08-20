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
  router.use('/', (0, _help2.default)(service)).add('/nav', 'get', getNav);
  return router;
};

var _jmMsCore = require('jm-ms-core');

var _jmMsCore2 = _interopRequireDefault(_jmMsCore);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ms = new _jmMsCore2.default();
;
module.exports = exports['default'];