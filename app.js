var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var upload = require('./routes/upload');

var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/upload', upload);

// Change this when using something like Heroku
process.env['NODE_ENV'] = "dev";
console.log("NODE_ENV:", app.get('env'));

var server = http.createServer(app);
server.listen(port);

module.exports = app;
