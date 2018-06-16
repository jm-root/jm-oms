const $ = require('./service')

let router = null
beforeAll(async () => {
  router = $.router()
})

test('nav', (done) => {
  router.request(
    {
      uri: '/nav',
      type: 'get',
      headers: {
        acl_user: '596d5cb3baeeaf00203de4ec'
      }
    },
    (err, doc) => {
      console.log(doc)
      expect(doc.ret).toBeTruthy()
      done()
    }
  )
})
