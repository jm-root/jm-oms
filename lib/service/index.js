'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var o = {
    config: opts,
    ready: true
  };
  var bind = function bind(name, uri) {
    uri || (uri = '/' + name);
    ms.client({
      uri: opts.gateway + uri
    }, function (err, doc) {
      !err && doc && (o[name] = doc);
    });
  };
  bind('acl');
  bind('config');
  o.nav = (0, _nav2.default)(o, opts);
  return o;
};

var _jmMs = require('jm-ms');

var _jmMs2 = _interopRequireDefault(_jmMs);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ms = (0, _jmMs2.default)();
module.exports = exports['default'];