'use strict'

function Node (value, left, right) {
  this.right = right || null
  this.left = left || null
  this.value = value || null
}

module.exports = Node
