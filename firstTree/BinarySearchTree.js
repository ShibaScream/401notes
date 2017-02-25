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
    let current = queue.pop()
    queue.push(current.left)
    queue.push(current.right)
    console.log(current.value)
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
  if (!node) return false
  if (value == undefined || value == null) return false
  if (node.value === value) {
    _reassignLeftNode(node)
    console.log('ended reassign with', node)
    node = node.right
    return true
  }
  if (node.value > value) {
    if (node.left.value === value) {
      _reassignLeftNode(node.left)
      node.left = node.left.right
      return true
    }
    this.deleteNode(node.left, value)
  } else {
    if (node.right.value === value) {
      _reassignLeftNode(node.right)
      node.right = node.right.right
      return true
    }
    this.deleteNode(node.right, value)
  }
  return false
}

function _reassignLeftNode (node) {
  console.log('Started reassign with:', node)
  if (node.left == null) return
  if (node.right == null) {
    node.right = node.left
    node.left = null
    return
  }
  let current = node
  while (current.left) {
    current = current.left
  }
  current.left = node.left
  node.left = null
}

module.exports = BinarySearchTree
