var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var upload = require('./routes/upload');
var files = require('./routes/files');

var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/upload', upload);
app.use('/t', files);
app.use('/*', function(req, res, next) {
  res.redirect('/');
});

// Change this when using something like Heroku
console.log(process.env.FIREBASE_URL);
console.log("NODE_ENV:", app.get('env'));

var server = http.createServer(app);
server.listen(port);

module.exports = app;
