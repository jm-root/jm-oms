import chai from 'chai'

import config from '../config'
import $ from '../src/service'

let expect = chai.expect

let log = function (err, doc) {
  if (err) console.error(err.stack)
  if (err.errors) console.error('%j', err.errors)
  if (doc) console.log(doc)
}

let service = new $(config)

describe('service', function () {
  it('init', function (done) {
    service.nav.init()
      .then(function (doc) {
        console.log('%j', doc)
        expect(doc).to.be.ok
        done()
      })
  })
  it('get', function (done) {
    service.nav.get()
      .then(function (doc) {
        console.log('%j', doc)
        expect(doc).to.be.ok
        done()
      })
  })
})
