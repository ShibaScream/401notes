// in TDD you write your tests before you write your code
// WTF

// bring in the assert library. Mocha doesn't verify the code
var assert = require('assert');

var calc = require('../lib/myLib');

// describe blocks allow more descriptive feedback
// you can run it without describe blocks, but it's less verbose
describe('a calc module', function () {
  it('can add two numbers', function () {
    assert.equal(calc.add(2, 4), 6);
  });
});
