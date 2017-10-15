import MS from 'jm-ms-core'
import help from './help'

let ms = new MS()
export default function (opts = {}) {
  let service = this

  //解剖树结构
  function format (item, ary) {
    ary.push(item)
    if (item.children) {
      item.children.forEach(function (key) {
        key.parent = item.code
        format(key, ary)
      })
    }
  }

  //合成树
  function tree (resources) {
    var roots = []
    var nodes = {}
    for (var i in resources) {
      var node = resources[i]
      if (nodes[node.code]) {
        node.children = nodes[node.code].children
      }
      nodes[node.code] = node
      if (node.parent) {
        nodes[node.parent] || (nodes[node.parent] = {})
        nodes[node.parent].children || (nodes[node.parent].children = [])
        nodes[node.parent].children.push(node)
      } else {
        roots.push(node)
      }
    }
    return roots
  }

  let getNav = function (opts = {}, cb) {
    opts.headers || (opts.headers = {})
    if (!opts.headers.acl_user) return cb(null, jm.ERR.FA_NOAUTH)
    let user = opts.headers.acl_user

    service.nav
      .get()
      .then(function (doc) {
        let all = []
        for (var item in doc) {
          format(doc[item], all)
        }
        all.forEach(function (item) {
          if (item.children) {
            item.children = []
          }
        })
        return all
      }).then(function (all) {
      return new Promise(function (resolve, reject) {
        let limited = []
        service.acl.userResources(user, function (err, doc) {
          all.forEach(function (item) {
            if (doc[item.permission]) {
              limited.push(item)
            }
          })
          let limiteds = tree(limited);
          cb(null, {ret: limiteds})
        })
      })
    })
  }

  let router = ms.router()
  router
    .use('/', help(service))
    .add('/nav', 'get', getNav)
  return router
};
