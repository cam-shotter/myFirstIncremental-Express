var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.use(express.static('public'))

const PORT = process.env.NODE_ENV || 3000

app.listen(PORT)

console.log("Listening on port:", PORT);
