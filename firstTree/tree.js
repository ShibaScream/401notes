const Node = require('./node')

const Tree = () => {
  this.root = new Node()
}

Tree.prototype.search = (nodeValue) => {

}

Tree.prototype.insertNode = () => {

}

Tree.prototype.print = (node) => {
  if (!node) return
  console.log(node.value)
  this.print(node.left)
  this.print(node.right)
}
