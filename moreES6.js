// ARROW FUNCTIONS =>

// START WITH THIS
var addThen = function (x, y) {
  return x + y
}

// TRANSFORMS TO THIS
var addNow = (x, y) => {
  return x + y
}

// Take an array of number and add 1 to each
let numbers = [1, 2, 3, 4, 5]

let numbersPlus = numbers.map((x) => {
  return x + 1
})

console.log('Then:', numbers)
console.log('Now:', numbersPlus)

// special case for 1 parameter functions
// IF and ONLY IF you have 1 parameter, you can drop the parentheses
let numbersPlusMore = numbers.map(x => {
  return x + 1
})

console.log('Now even more:', numbersPlusMore)

// special case if a function is only one line
// NOTE THAT RETURN IS NO LONGER USED
let numbersPlusEvenMore = numbers.map(x => x + 1)
console.log('whoa:', numbersPlusEvenMore)

// let's get sickening
let numbersPlusWat = numbers
  .map(x => x * 10)
  .filter(x => x % 2 === 0)
  .reduce((x, y) => x + y)

console.log('waaaaat:', numbersPlusWat)

console.log('numbers:', numbers)
// even more
let wat = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .reduce((x, y) => x + y)

console.log(wat)
