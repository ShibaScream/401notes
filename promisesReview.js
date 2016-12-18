let fs = require('fs')

console.log(1)
function readFile (file) {
  console.log(2)
  return new Promise ((resolve, reject) => {
    console.log(3)
    fs.readFile(file, (err, buffer) => {
      console.log(4)
      err ? reject(err) : resolve(buffer)
    })
    console.log(4.5)
  })
}

console.log(5)

readFile('./mod.js')
  .then(buffer => {
    console.log(7)
    console.log(buffer)
  })
  .catch(err => {
    console.log(8)
    console.error(err)
  })
