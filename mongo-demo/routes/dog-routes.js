// side note: in MVC paradigm, routes is comparable to controller
const Router = require('express').Router
const jsonParser = require('body-parser').json()

// convention for models is that the first letter is capitalized
const Dog = require('../model/dog')

let router = module.exports = new Router()

router.post('/dogs', jsonParser, (req, res, next) => {
  new Dog(req.body).save()
    .then(dog => res.json(dog))
    .catch(next)
})

router.get('/dogs/:id', (req, res, next) => {
  Dog.findById(req.params.id)
    .then(dog => res.json(dog))
    .catch(next)
})

router.get('/', (req, res, next) => {
  res.send('Hello World')
  next()
})
