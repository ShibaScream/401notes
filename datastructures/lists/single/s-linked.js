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
    return node.val
  }

  node.next = this.head
  this.head = node
  return node.val
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val)
  let currentNode = null

  if(!this.head) {
    this.head = node
    return node.val
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
  return node.val
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
