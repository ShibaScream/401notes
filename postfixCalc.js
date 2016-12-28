'use strict'

const Stack = require('../lab-10-ds-algos/lab-dan/lib/stack.js')

function postfixCalc(arr) {
  const stack = new Stack()
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  }
  arr.forEach(n => {
    if (typeof n === 'number') {
      stack.push(n)
    } else if (operations.hasOwnProperty(n)) {
      let y = stack.pop()
      let x = stack.pop()
      if(!x || !y) {
        throw new Error('improper equation, please check that you have your operations in the correct order')
      }
      stack.push(operations[n](x, y))
    } else {
      throw new Error(`${n} is an unexpected character!`)
    }
  })

  if(stack.size === 1) {
    return stack.HEAD.value
  } else {
    throw new Error('unexpected items in stack, please check that you have all necessary operators')
  }
}

console.log(`1 + 2 = ${postfixCalc([1, 2, '+'])}`)
console.log(`(2 + 4) * 7 = ${postfixCalc([2, 4, '+', 7, '*'])}`)
console.log(`(2 / 4) * 7 = ${postfixCalc([2, 4, '/', 7, '*'])}`)
console.log(`(2 - 4) * 7 = ${postfixCalc([2, 4, '-', 7, '*'])}`)
// BOTH OF THESE WILL ERROR OUT
// console.log(`2 + 4 4 = ${postfixCalc([2, 4, '+', 4])}`)
// console.log(`2 + = ${postfixCalc([2, '+'])}`)
// console.log(`(2 BLAH 4) * 7 = ${postfixCalc([2, 4, 'BLAH', 7, '*'])}`)
