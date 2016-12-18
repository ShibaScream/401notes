const EE = require('events')
const fs = require('fs')
let ee = new EE()

ee.on('anEvent', function () {
  console.log('an event occurred')
})

ee.emit('anEvent')
ee.emit('anEvent')
ee.emit('anEvent')
ee.emit('anEvent')


// another example
fs.readFile('./text.txt', function (err, data) {
  if (err) throw err
  console.log('read file 1')
  ee.emit('readFile2')
})

ee.on('readFile2', function (err, data) {
  if (err) throw err
  fs.readFile('./text2.txt', function (err, data) {
    if (err) throw err
    console.log('read file 2')
    ee.emit('readFile3')
  })
})

ee.on('readFile3', function (err, data) {
  if (err) throw err
  fs.readFile('./text3.txt', function (err, data) {
    if (err) throw err
    console.log('read file 3')
  })
})
