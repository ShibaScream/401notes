'use strict'

const Node = require('./node.js')

const SinglyLinkedList = module.exports = function(arr) {
  this.head = null
  if(Array.isArray(arr)) {
    arr.forEach(val => this.append(val))
  }
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val)

  if(!this.head) {
    this.head = node
    return node.value
  }

  node.next = this.head
  this.head = node
  return node.value
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  let currentNode = null

  if(!this.head) {
    this.head = node
    return node.value
  }

  _setLastNode(this.head)
  // while(currentNode.next) {
  //   currentNode = currentNode.next
  // }

  function _setLastNode(node) {
    if(!node.next) return
    currentNode = node.next
    _setLastNode(currentNode)
  }
  currentNode.next = node
  return node.value
}

SinglyLinkedList.prototype.removeHead = function() {
  let prevHead = this.head
  this.head = prevHead.next
  prevHead.next = null
  return prevHead.val
}

SinglyLinkedList.prototype.removeTail = function() {
  let val = null
  let secondLastNode = this.head
  if(!this.head) return
  if(!this.head.next) {
    val = this.head.val
    this.head = null
    return val
  }
  while(secondLastNode.next.next) {
    secondLastNode = secondLastNode.next
  }
  val = secondLastNode.next.val
  secondLastNode.next = null
  return val
}

// white board problem - solution 1
SinglyLinkedList.prototype.reverse1 = function() {
  let newList = new SinglyLinkedList()
  let currentHead = this.head
  while (currentHead) {
    newList.prepend(currentHead.val)
    currentHead = currentHead.next
  }
  return newList
}

// solution 2
SinglyLinkedList.prototype.reverse2 = function() {
  let prevHead = this.Head
  
}
