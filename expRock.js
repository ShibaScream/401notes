const express = require('express')

let rocks = [
  {name: 'fraggle', age: 84},
  {name: 'kid rock', age: 12},
  {name: 'rock steady', age: 22},
  {name: 'hard rock', age: 1000},
]

let app = express()

app.get('/rocks', (req, res) => {
  res.json(rocks)
})

app.get('/rocks/:id', (req, res) => {
  res.json(rocks[req.params.id])
})

app.listen(3000, () => console.log('server started'))
