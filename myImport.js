var myLib = require('./myLib.js');
// 
// console.log(myLib);

var name = 'Dan';

myLib.hello(name);

myLib.goodbye(name);

var array = [[1, 2, 3], [4, 5, 6]];

var [[,,x], y] = array;
