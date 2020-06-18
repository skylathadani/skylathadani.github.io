// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');
//var publicDir = require('path').join(_dirname,'/public');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));
app.use(express.static('publicDir'));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');