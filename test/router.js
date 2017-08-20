import chai from 'chai'
import config from '../config'
import $ from '../src'

let expect = chai.expect

let service = $(config)
let router = service.router()

describe('router', function () {
  it('get', function (done) {
    router.get('/nav',
      function (err, doc) {
        expect(doc).to.be.ok
        console.log('%j', doc)
        done()
      })
  })
})
