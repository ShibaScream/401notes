module.exports = {};

var exports = module.exports;

exports.hello = function (name) {
  console.log('hello, ', name, '! How are you?');
};

exports.goodbye = function (name) {
  console.log('goodbye, ', name, '. I knew you\'d always leave me.');
};

exports.add = function (x, y) {
  return x + y;
}

exports.sub = function (x, y) {
  return x - y;
}

exports.mult = function (x, y) {
  return x * y;
}

exports.div = function (x, y) {
  return x / y;
}
// console.log(exports);
// console.log(module);
