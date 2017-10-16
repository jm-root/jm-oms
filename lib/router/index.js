'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var service = this;

  //解剖树结构
  function format(item, ary) {
    ary.push(item);
    if (item.children) {
      item.children.forEach(function (key) {
        key.parent = item.code;
        format(key, ary);
      });
    }
  }

  //合成树
  function tree(resources) {
    var roots = [];
    var nodes = {};
    for (var i in resources) {
      var node = resources[i];
      if (nodes[node.code]) {
        node.children = nodes[node.code].children;
      }
      nodes[node.code] = node;
      if (node.parent) {
        nodes[node.parent] || (nodes[node.parent] = {});
        nodes[node.parent].children || (nodes[node.parent].children = []);
        nodes[node.parent].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  var getNav = function getNav() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    opts.headers || (opts.headers = {});
    if (!opts.headers.acl_user) return cb(null, jm.ERR.FA_NOAUTH);
    var user = opts.headers.acl_user;

    service.nav.get().then(function (doc) {
      var all = [];
      for (var item in doc) {
        format(doc[item], all);
      }
      all.forEach(function (item) {
        if (item.children) {
          item.children = [];
        }
      });
      return all;
    }).then(function (all) {
      return new Promise(function (resolve, reject) {
        var limited = [];
        service.omsAcl.userResources(user, function (err, doc) {
          all.forEach(function (item) {
            if (doc[item.permission]) {
              limited.push(item);
            }
          });
          var limiteds = tree(limited);
          cb(null, { ret: limiteds });
        });
      });
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