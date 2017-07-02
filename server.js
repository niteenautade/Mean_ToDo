var express  = require('express');
var app      = express();
var path = require('path');
var port     = process.env.PORT || 4200;

console.log('Buss',path.join(__dirname, '/src/app/dist/index.html'));
app.use('/app', express.static(path.join(__dirname, '/src/app/dist')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/app/dist/index.html'))
})

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);