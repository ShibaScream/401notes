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
    it('should delete root on a tree and set root to null if no children', function() {
      let bst = new BST([1])
      bst.deleteNode(1)
      expect(bst).to.have.property('root', null)
    })
    it('should delete root on a tree and assign root to right node', function() {
      let bst = new BST([2,3])
      bst.deleteNode(2)
      expect(bst).to.have.deep.property('root.value', 3)
    })
    it('should delete root on a tree and assign root to left node', function() {
      let bst = new BST([2,1])
      bst.deleteNode(2)
      expect(bst).to.have.deep.property('root.value', 1)
    })
    it('should delete node on a tree and appropriately reassign if node has 2 children', function() {
      let bst = new BST([3,2,6,1,2,4,7,5])
      bst.deleteNode(6)
      expect(bst).to.have.deep.property('root.right.value', 7)
    })
    it('should delete root on a tree and appropriately reassign if root has 2 children', function() {
      let bst = new BST([3,2,6,1,2,4,7,5])
      bst.deleteNode(3)
      expect(bst).to.have.deep.property('root.value', 4)
      expect(bst).to.have.deep.property('root.right.left.value', 5)
    })
    it('should throw error if not given value to delete', function() {
      let bst = new BST([1])
      expect(() => bst.deleteNode()).to.throw(Error)
    })
    it('should not throw any errors or modify values if given a value that does not exist in tree', function() {
      let bst = new BST([3,2,6])
      expect(() => bst.deleteNode(20)).to.not.throw(Error)
      expect(bst).to.have.deep.property('root.value', 3)
      expect(bst).to.have.deep.property('root.left.value', 2)
      expect(bst).to.have.deep.property('root.right.value', 6)

    })
  })
})
