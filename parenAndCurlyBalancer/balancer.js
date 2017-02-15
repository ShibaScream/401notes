// const stack = require('../datastructures/stack.js')


function balancer (string) {
  const stack = []
  const list = ['(',')','{','}']
  const toPush = ['(','{']

  for (let i = 0; i < string.length; i++) {
    let char = list.indexOf(string[i]) ? string[i] : null
    if (char) {
      if (toPush.indexOf(char)) {
        stack.push(char)
      } else {
        if (stack.pop() === char)
      }
    }
  }
}
