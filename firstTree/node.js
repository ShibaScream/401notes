'use strict'

function Node (value, left, right) {
  this.right = right || undefined
  this.left = left || undefined
  this.value = value || undefined
}

module.exports = Node
