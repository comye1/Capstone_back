var express = require('express')
var app = express()
app.listen(9999);
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
res.send('hello world')
})
