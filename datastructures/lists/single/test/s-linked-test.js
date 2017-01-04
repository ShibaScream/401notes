'use strict'

const expect = require('chai').expect
const SinglyLinkedList = require('../s-linked')
let sll = new SinglyLinkedList()

describe('singly-linked list module', function() {
  describe('prepend', function() {
    it('should create a new node and add to sll.head when list is empty', function() {
      let n = 1
      sll.prepend(n)
      expect(sll.head.value).to.be.equal(n)
      expect(sll.head.next).to.be.null
    })
    it('should create a new node and add to sll.head when list has existing node(s)', function() {
      let n = 2
      sll.prepend(n)
      expect(sll.head.value).to.be.equal(n)
      expect(sll.head.next).to.not.be.null
    })
  })

  describe('append', function() {

  })

  describe('remove', function() {
    
  })
})
