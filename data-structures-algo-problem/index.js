const balanced = require('./lib/balanced')

console.log(balanced('test'))
console.log(balanced('(test)'))
console.log(balanced('(test'))
console.log(balanced('test)'))
