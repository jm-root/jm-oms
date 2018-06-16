const $ = require('./service')

let service = null
beforeAll(async () => {
  service = $
})

test('nav.init', async () => {
  let doc = await service.nav.init()
  console.log(doc)
  expect(doc).toBeTruthy()
})

test('nav.get', async () => {
  let doc = await service.nav.get()
  console.log(doc)
  expect(doc).toBeTruthy()
})
