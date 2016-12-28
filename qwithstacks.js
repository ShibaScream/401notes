const Stack = require('../lab-10-ds-algos/lab-dan/lib/stack.js')

function Q() {
  this.s1 = new Stack()
  this.s2 = new Stack()
}

Q.prototype.enQ = function(value){
  if(!this.s1.HEAD) {
    this.flipStack()
  }
  this.s1.push(value)
}

Q.prototype.dQ = function(){
  if(!this.s2.HEAD) {
    this.flipStack()
  }
  return this.s2.pop()
}

Q.prototype.flipStack = function(){
  let currentStack = null
  let newStack = null
  if(this.s1.HEAD) {
    currentStack = this.s1
    newStack = this.s2
  } else {
    currentStack = this.s2
    newStack = this.s1
  }

  for(let i = 0; i < currentStack.size; i++) {
    newStack.push(currentStack.pop)
  }
}
