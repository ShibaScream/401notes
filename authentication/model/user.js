const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: String,
})

// DO NOT USE AN ARROW FUNCTION ON MONOGOOSE MODELS
userSchema.methods.hashAndStorePassword = function(password) {
  // the hashing process is async
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) return reject(err)
      this.password = hash
      resolve(this)
    })
  })
}

userSchema.methods.hashAndReturnPassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) return reject(err)
      resolve(hash)
    })
  })
}

module.exports = mongoose.model('user', userSchema)
