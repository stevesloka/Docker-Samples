var express = require('express');

// Constants
var PORT = process.env.PORT || 1337;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World, this is Steve.\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
