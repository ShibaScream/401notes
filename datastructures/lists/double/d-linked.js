'use strict'

const Node = require('./node.js')

const DoublyLinkedList = module.exports = function(arr) {
  this.head = null
  this.tail = null
  if(Array.isArray(arr)) {
    arr.forEach(val => this.append(val))
  }
}

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)
  if(!this.head) {
    this.head = node
    this.node = node
    return node.value
  }
  node.next = this.head
  this.head.previous = node
  this.head = node
  return node.value
}

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  if(!this.tail) {
    this.head = node
    this.node = node
    return node.val
  }
  node.previous = this.tail
  this.tail.next = node
  this.tail = node
  return node.value
}

DoublyLinkedList.prototype.removeHead = function() {
  if(!this.head) return
  let prevHead = this.head
  this.head = this.head.next
  this.head.previous = null
  prevHead.next = null
  return prevHead.val
}

DoublyLinkedList.prototype.removeTail = function() {
  if(!this.tail) return
  let prevTail = this.tail
  this.tail = this.tail.previous
  this.tail.next = null
  prevTail.previous = null
  return prevTail.value
}

DoublyLinkedList.prototype.reverse = function() {
  // flip the list!
  let prevHead = this.head
  let currentNode = this.tail
  this.head = this.tail
  this.tail = prevHead
  while(currentNode) {
    let prevNode = currentNode.next
    currentNode.next = currentNode.previous
    currentNode.previous = prevNode
    currentNode = currentNode.next
  }

}
