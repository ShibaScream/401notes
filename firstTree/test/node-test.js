'use strict'

const Node = require('../node')

const chai = require('chai')
const expect = chai.expect

describe('node tests', function() {
  describe('tests for node properties on constructor function', function() {
    let node = new Node(1)
    it('should have value property', function() {
      expect(node).to.have.property('value')
    })
    it('should have right node property', function() {
      expect(node).to.have.property('right')
    })
    it('should have left node property', function() {
      expect(node).to.have.property('left')
    })
  })
})
