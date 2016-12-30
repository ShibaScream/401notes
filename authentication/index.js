const Express = require('express')
const router = Express.Router()
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = Express()

const httpErrors = require('./lib/httpErrors')

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/authentication'

require('./routes/user-routes')(router)
app.use(router)

mongoose.Promise = Promise
mongoose.connect(MONGO_URI).then(() => console.log(`Mongo connected via ${MONGO_URI}`))


app.use(morgan('dev'))

app.use(httpErrors)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
