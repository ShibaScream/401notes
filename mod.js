const fs = require('fs')

function modifyFile (path, data) {
  data[0] = 80
  fs.writeFile(path, data, function(err, data) {
    if (err) throw err
    console.log('it is written')
  })
}

function readFile (path, cb) {
  fs.readFile(path, function (err, data) {
    if (err) throw err
    cb(path, data)
  })
}

readFile('./text.txt', modifyFile)
