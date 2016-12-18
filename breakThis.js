function Person(name) {
  this.name = name
  this.pets = ['parrot', 'cat', 'dog']
  this.printAllPets1 = function() {
    this.pets.forEach(function(pet) {
      console.log(`${this.name} owns a ${pet}`)
    })
  }
  this.printAllPets2 = function() {
    // pass this context for this into forEach
    this.pets.forEach(function(pet) {
      console.log(`${this.name} owns a ${pet}`)
    }, this)
  }
  this.printAllPets3 = function() {
    // force this context using arrow function
    this.pets.forEach(pet => console.log(`${this.name} owns a ${pet}`))
  }
}

let bob = new Person('bob')
bob.printAllPets1() // will return 'undefined owns a...'
bob.printAllPets2() // will return 'bob owns a...'
bob.printAllPets3() // will return 'bob owns a...'
