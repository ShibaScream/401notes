const User = require('../model/user')

module.exports = (req, res, next) => {
  // check if authorization is basic
  // decode the base64 string
  let encodedAuthorization = req.headers.authorization.split('Basic')[1].trim()
  // split the string to get values
  let [username, password] = new Buffer(encodedAuthorization, 'base64').toString().split(':')
  res.send(`user: ${username}\npass: ${password}\n`)
  User
    .findOne({username: username})
    .then(user => {
      if(user.password !== password) {
        res.json(new Error('Invalid Username or Password')).end()
      } else {
        // 'log-in'
        console.log(`${user} logged in`)
        req.user = user
        next()
      }
    })
    .catch(next)
}
