var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moongoose = require('moongoose');
moongoose.connect('mongodb+srv://usrautos:icoF35@cluster0.mof70.mongodb.net/automovil?retryWrites=true&w=majority', );


var indexRouter = require('./routes/index');
var autosRouter = require('./routes/autos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/autos', usersRouter);

module.exports = app;
