const Node = module.exports = function (value, previousNode) {
  this.value = value
  this.previousNode = previousNode || null
}
