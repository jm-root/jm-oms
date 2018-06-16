const $ = require('./service')

let router = null
beforeAll(async () => {
  router = $.router()
})

test('nav', async () => {
  let doc = await router.request({
    uri: '/nav',
    headers: {
      acl_user: '596d5cb3baeeaf00203de4ec'
    }
  })
  console.log(doc)
  expect(doc).toBeTruthy()
})
