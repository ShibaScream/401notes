const express = require('express')
const morgan = require('morgan')
const jsonParser = require('body-parser').json()

const createError = require('http-errors')

const PORT = process.env.PORT || 3000

const app = express()
// this is kinda like middleware
// morgan is great for logging
app.use(morgan('combined'))
app.use(jsonParser)
// mount and run the error function very last
// this is a very unique middleware, only the error handling one does this
app.use((err, req, res, next) => (
  console.error(err.message)
  err = createError(500, err.message)
  res.status(err.status).send(err.name)
))

require('./dogRoutes')(app)

app.listen(3000, () => console.log('server started'))
