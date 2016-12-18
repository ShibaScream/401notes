const Express = require('express')
const morgan = require('morgan')
const cors = require('./lib/cors')
const httpErrors = require('./lib/httpErrors')
const app = Express()

// this is calling the middleware globally
app.use(morgan('dev'))
app.use(cors)

// here we call some middleware route by route
app.get('/', cors, (req, res) => {
  res.json({})
})

app.route('/users')
  .get((req, res) => {
    res.json({})
  })
  .post((req, res) => {
    res.json({})
  })

app.route('/users/:id')
  .get((req, res) => {
    res.json({})
  })
  .post((req, res) => {
    res.json({})
  })
  .delete((req, res) => {
    res.json({})
  })

app.use(httpErrors)

app.listen(3000, () => console.log('server is listening'))
