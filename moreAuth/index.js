const Express = require('express')
const morgan = require('morgan')
const JSONParser = require('body-parser').json()
const app = new Express()

app.use(morgan('dev'))
app.use(JSONParser)

app.get('/', function(req, res) {
  res.json({msg: 'hello, world!'})
})

app.get('/getvals', function(req, res) {
  let base64String = req.headers.authorization.split(' ')[1]
  let [user, pass] = Buffer.from(base64String, 'base64').toString().split(':')
  res.json({
    base: base64String,
    user: user,
    pass: pass,
  })
})

app.post('/register', function(req, res) {
  res.json(req.body)
})

app.listen(3000, function() {
  console.log('server started on port 3000')
})
