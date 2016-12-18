const http = require('http');
const url = require('url')
const PORT = process.env.PORT || 3000;

let server = http.createServer(function(req, res){
  req.url = url.parse(req.url)
  console.log(req.url.path)

  if (req.url.path === '/dogs') {
    let dogs = [{name:'Ponyo', breed:'Shiba'}, {name:'Gus', breed:'Golden'}]
    res.write(JSON.stringify(dogs) + '\n')
    res.end()
  } else {
    res.write('hi!\n')
    res.end()
  }
})

server.listen(PORT, function() {
  console.log('SERVER IS LISTENING ON', PORT)
})
