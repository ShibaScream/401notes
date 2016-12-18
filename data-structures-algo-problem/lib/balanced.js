// given a string, determine if parentheses are balanced and routine a boolean

const Stack = require('./stack')

module.exports = function(string) {
  const stack = new Stack()
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      stack.push(i)
    } else if(string[i] === ')') {
      if (stack.pop() === null) return false
    }
  }
  
  return stack.size === 0

}
