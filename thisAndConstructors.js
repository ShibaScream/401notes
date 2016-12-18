function Dog(name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says, "WOOF!"`)
}

let dog1 = new Dog('Ponyo', 'Shiba', 6)
let dog2 = new Dog('Gus', 'Golden', 4)
let dog3 = new Dog('Beau', 'Shithead', 1)

console.log(dog1)
dog1.bark()

ponyoBarks = dog1.bark
ponyoBarks() // this won't work correctly!!

dog2.bark()

dog1.bark.call(dog2) // call() temporarily resets the context of this and invokes the function

// note how bind doesn't invoke the function, but it
// permanently resets the context of this and returns a function which can be called using the defined context
let shitheadBarks = dog1.bark.bind(dog3)
shitheadBarks()

// WHOA HOLY SHIT YOU CAN ALLOW AN ARBITRARY NUMBER OF ARGUMENTS INTO A FUNCTION
function add() {
  return [].reduce.call(arguments, function(x, y) {
    return x + y
  }, 0)
}

console.log(add(2, 4, 10, 10))

function printThisAndX (x) {
  console.log(x)
  console.log(this)
}

printThisAndX(4)  // this will be the global scope, x = 4
printThisAndX.call({}, 4) // this will be undefined, x = 4
