const app = require('../index.js')
const expect = require('chai').expect
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('dog server', function() {
  let server = undefined
  before(function(done) {
    server = app.listen(3000, () => {
      console.log('server started on port 3000')
      done()
    })
  })

  // do tests
  it('can get', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.html
        done()
      })
  })

  after(function(done) {
    server.close(() => {
      console.log('server closed')
      done()
    })
  })
})
