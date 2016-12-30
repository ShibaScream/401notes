const User = require('../model/user')
const authentication = require('../lib/authentication')
const jsonParser = require('body-parser').json()


module.exports = (router) => {
  router.get('/', (req, res) => {
    res.json({msg: 'hello, world!'})
  })
  router.post('/users', jsonParser, (req, res, next) => {
    let newUser = new User(req.body)
    newUser
      .hashAndStorePassword()
      .then(user => {
        user
          .save()
          .then(user => res.json(user))
      })
      .catch(next)
  })

  router.get('/users', authentication, (req, res, next) => {
    User
      .find()
      .then(users => res.json(users))
      .catch(next)
  })

  router.get('/users/:id', authentication, (req, res, next) => {
    User
      .findById(req.params.id)
      .then(user => res.json(user))
      .catch(next)
  })
  // create a new user
  // router.post('/signup', (req, res, next) => {
  //   User
  //     .create(req.body)
  //     .then(user => {
  //       res.json(user)
  //     })
  //     .catch(next)
  // })
  //
  // router.login('/login', (req, res, next) => {
  //
  // })
}
