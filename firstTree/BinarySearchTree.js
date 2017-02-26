const Node = require('./node')

function BinarySearchTree (array) {
  this.root = null
  if (array && Array.isArray(array)) {
    array.forEach(value => {
      this.insertNode(value)
    })
  }
}

// search function for a full and balanced tree = log(n)
BinarySearchTree.prototype.search = function (value, node=this.root) {
  if (!node) return false
  if (value == undefined || value == null) return false
  if (node.value === value) return true
  if (node.value > value) {
    this.search(node.left, value)
  } else {
    this.search(node.right, value)
  }
}

BinarySearchTree.prototype.insertNode = function (value, node=this.root) {
  if (value == undefined || value == null) throw new Error('no value given')
  if (!this.root) {
    node = new Node(value)
    this.root = node
    return
  }

  if (node.value > value) {
    if (!node.left) {
      node.left = new Node(value)
      return
    }
    this.insertNode(value, node.left)
  } else {
    if (!node.right) {
      node.right = new Node(value)
      return
    }
    this.insertNode(value, node.right)
  }

}

BinarySearchTree.prototype.printDFS = function (node=this.root) {
  if (!node) return
  console.log(node.value)
  this.printDFS(node.left)
  this.printDFS(node.right)
}

BinarySearchTree.prototype.printBFS = function (node=this.root) {
  if (!node) return
  let queue = []
  queue.push(node)
  while (queue.length) {
    let current = queue.shift()
    console.log(current.value)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
}

BinarySearchTree.prototype.getDepth = function (node=this.root, i=0) {
  if (!node) return i
  i++
  return Math.max(
    this.getDepth(node.left, i),
    this.getDepth(node.right, i)
  )
}

BinarySearchTree.prototype.sumNodes = function (node=this.root, result = {i:0, array:[] }) {
  if (!node) return result
  result.i += node.value
  result.array.push(node.value)
  let left = this.sumNodes(node.left, result)
  let right = this.sumNodes(node.right, result)
  return left.i > right.i ? left : right
}


BinarySearchTree.prototype.deleteNode = function (value, node=this.root) {
  if (value == undefined || value == null) throw new Error('no value given')
  if (node == undefined || node == null) return node
  else if (value < node.value) {
    node.left = this.deleteNode(value, node.left)
  }
  else if (value > node.value) {
    node.right = this.deleteNode(value, node.right)
  }
  // we found the value
  else {
    // case 1
    if (!node.left && !node.right) {
      if (node === this.root) return this.root = null
      node = null
    }
    // case 2
    else if (!node.left) {
      if (node === this.root) return this.root = node.right
      node = node.right
    }
    else if (!node.right) {
      if (node === this.root) return this.root = node.left
      node = node.left
    }
    // case 3
    else {
      let minNode = _findMinVal(node.right)
      node.value = minNode.value
      node.right = this.deleteNode(node.value, node.right)
    }
  }
  return node
}

function _findMinVal (node) {
  let currentNode = node
  let minValNode = currentNode
  while (currentNode.left) {
    currentNode = currentNode.left
    minValNode = minValNode.value > currentNode.value ? currentNode : minValNode
  }
  return minValNode
}
module.exports = BinarySearchTree
