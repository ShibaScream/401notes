const Node = require('./node')

function Tree (array) {
  this.root = null
  if (array && Array.isArray(array)) {
    array.forEach(value => {
      this.insertNode(value)
    })
  }
}

Tree.prototype.search = function (nodeValue) {
  console.log(nodeValue)
}

Tree.prototype.insertNode = function (value, node) {
  if (!this.root) {
    console.log('created root!')
    node = new Node(value)
    this.root = node
    return this.root
  }

  if (!node) {
    node = this.root
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

Tree.prototype.printDFS = function (node) {
  if (!node) return
  console.log(node.value)
  this.printDFS(node.left)
  this.printDFS(node.right)
}

Tree.prototype.printBFS = function (node) {
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

module.exports = Tree
