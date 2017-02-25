'use strict'

const BST = require('../BinarySearchTree')

const chai = require('chai')
const expect = chai.expect

describe('Binary Search Tree tests', function() {
  describe('test for property of bst constructor function', function() {
    it('should have a root property', function() {
      let bst = new BST()
      expect(bst).to.have.property('root')
    })
  })
  describe('tests for insert method of bst', function() {
    it('should create a new root node on an empty tree', function() {
      let bst = new BST()
      let val = 1
      bst.insertNode(val)
      expect(bst).to.have.deep.property('root.value', val)
    })
    it('should create a new left node on a root with a value less than root', function() {
      let bst = new BST([2])
      let val = 1
      bst.insertNode(val)
      expect(bst).to.have.deep.property('root.left.value', val)
    })
    it('should create a new right node on a root with a value greater than root', function() {
      let bst = new BST([2])
      let val = 3
      bst.insertNode(val)
      expect(bst).to.have.deep.property('root.right.value', val)
    })
    it('should throw error if not given value to insert', function() {
      let bst = new BST()
      expect(() => bst.insertnode()).to.throw(Error)
    })
  })
  describe('tests for delete method of bst', function() {
    it('should delete left node on a tree', function() {
      let bst = new BST([2,1,3])
      bst.deleteNode(1)
      expect(bst).to.have.deep.property('root.left', null)
    })
    it('should delete left node on a tree', function() {
      let bst = new BST([2,1,3])
      bst.deleteNode(3)
      expect(bst).to.have.deep.property('root.right', null)
    })
    it('should delete root on a tree', function() {
      let bst = new BST([1])
      bst.deleteNode(1)
      expect(bst).to.have.property('root', null)
    })
  })
})
