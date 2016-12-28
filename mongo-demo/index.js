const Express = require('express')
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
const app = Express()
const dogRouter = require('./routes/dog-routes')

mongoose.Promise = Promise
mongoose.connect(MONGO_URI)

app.use(dogRouter)

module.exports = app

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server started in module on port ${PORT}`))
}
