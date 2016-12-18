'use strict'

const expect = require('chai').expect

const Stack = require('./stack')

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the null stack', function () {
      let stack = new Stack()
      stack.push(25)
      expect(stack.HEAD.value).to.equal(25)
      expect(stack.HEAD.previousNode).to.be.null
    })
    it('should throw error when max size exceeded', function () {
      let stack = new Stack(1)
      stack.push(25)
      expect(stack.push(25)).to.throw(Error)
    })
  })
})
