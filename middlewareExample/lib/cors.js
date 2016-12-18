module.exports = (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Headers', '*')
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  // every middleware needs to end the response or call next to function properly
  next()
}
