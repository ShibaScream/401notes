'use strict'

// queues need to be aware of the front and back of line
// i.e. first and last node
// nodes need to know value and prev value, so we can re-use that module
// First In, First Out -- F.I.F.O.

const Node = require('./node')

// queues don't typically have
const Queue = module.exports = function () {
  this.HEAD = null
  this.last = null
}

Queue.prototype.enqueue = function (value) {
  // create a new node
  // grab last node and point the current last node to the new one
  // assign last node to the new node
  let node = new Node(value)

  if (!this.last) {
    this.HEAD = node
    this.last = node
    this.HEAD.previousNode = this.last
    return
  }

  this.last.previousNode = node
  this.last = node

}

Queue.prototype.dequeue = function () {
  if(this.HEAD) {
    let temp = this.HEAD
    if(this.HEAD === this.last) {
      this.HEAD = null
      this.last = null
    } else {
      this.HEAD = temp.previousNode
    }
    return temp.value
    }
  return null
}
