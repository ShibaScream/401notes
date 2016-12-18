'use strict';

function byRef(a) {
  let newPerson = Object.create(a)
  newPerson.name = 'Bob'
  return newPerson
}

let person1 = {
  name:'Sarah'
}

let person2 = byRef(person1);

console.log(person1);
console.log(person2);

person1.prototype.greet = function() {
  console.log('hello! my name is ', this.name);
}

console.log(person1);
console.log(person2);
