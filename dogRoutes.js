

let dogs = [
  {name: 'Ponyo', breed: 'Shiba', age: 6},
  {name: 'Beau', breed: 'Golden', age: 5},
  {name: 'Gus', breed: 'Golden', age: 2},
]

module.exports = (router) => {
  router.get('/dogs', (req, res) => {
    res.json(dogs)
  })

  router.get('/dogs/:id', (req, res) => {
    res.json(dogs[req.params.id])
  })

  router.post('/dogs', (req, res) => {
    console.log(req.body)
    // req.body automagically exists because of body-parser
    let dog = req.body
    dogs.push(dog)
    res.json(dog)
  })

  router.get('/', (req, res) => {
    res.send('hello world')
  })
}
