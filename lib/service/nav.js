'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (service) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var root = opts.configRoot || 'oms';
  var uri = '/' + root + '/nav';
  var o = {
    init: function init() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nav = opts.nav || _nav2.default;
      return new _bluebird2.default(function (resolve, reject) {
        service.config.post(uri, {
          value: nav
        }, function (err, doc) {
          if (err) throw err;
          resolve(nav);
        });
      });
    },
    get: function get(opts) {
      var self = this;
      return new _bluebird2.default(function (resolve, reject) {
        service.config.get(uri, function (err, doc) {
          if (err) throw err;

          if (!doc || !doc.ret) {
            return self.init();
          }
          resolve(doc.ret);
        });
      });
    },
    set: function set(opts) {
      var nav = opts.data.nav;
      return new _bluebird2.default(function (resolve, reject) {
        service.config.post(uri, {
          value: nav.value
        }, function (err, doc) {
          if (err) throw err;
          resolve(doc);
        });
      });
    }
  };

  return o;
};

var _nav = require('../../config/nav');

var _nav2 = _interopRequireDefault(_nav);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];