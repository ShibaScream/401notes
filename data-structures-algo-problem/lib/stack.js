// STACK === First In, Last Out, F.I.L.O.
// METHODS === push, pop, peek(optional--see the top item)
// Each "node" needs to be aware of the previous node and the value inserted in the stack, size and type would be nice, but optional
// The stack itself is never aware of anything other than the top node in the stack
// when we push an item on the stack, we don't need to return anything
// when we pop something off the stack, we remove and return that top value
// we we peek, we return that top value

'use strict'

const Node = require('./node')

const Stack = module.exports = function (array, maxSize) {
  this.HEAD = null,
  this.size = 0,
  this.maxSize = maxSize || null

  if(array && Array.isArray(array)) {
    array.forEach(value => {
      this.push(value)
    })
  }
}

Stack.prototype.push = function (val) {
  // a new node is created with val and previousNode
  this.size += 1

  if (this.maxSize && this.size > this.maxSize) {
    throw new RangeError(`max stack size of ${this.maxSize} exceeded`)
  }

  this.HEAD = new Node(val, this.HEAD)
}

Stack.prototype.pop = function () {
  // temp save prevNode on the HEAD node
  // remove the node assigned to the top of the stack
  // prevNode assigned to HEAD of stack
  // returning the value of node removed
  if (this.HEAD) {
    let temp = this.HEAD
    this.HEAD = this.HEAD.previousNode
    this.size -= 1
    return temp.value
  }
  return null
}

Stack.prototype.peek = function () {
  // return the value of HEAD node
  if (this.HEAD) {
    return this.HEAD.value
  }
  return null
}
