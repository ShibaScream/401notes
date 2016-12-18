let fs = require('fs')

// resolve and reject are both functions
let myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('hello')
  } else {
    reject('booooo')
  }
})

myPromise
  .then(message => {
    console.log(message)
  })
  .catch(err => {
    console.error(err)
  })

  console.log('this is gonna run first')

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, buffer) => {
      if (err) return reject(err)
      resolve(buffer)
    })
  })
}

readFile('./isomorphic.js')
  .then(data => {
    console.log(data.toString())
  })
  .catch(err => {
    console.error(err)
  })
