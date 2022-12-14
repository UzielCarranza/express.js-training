var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var editRouter = require('./routes/put');
var deleteRouter = require('./routes/delete');
var nextRouter = require('./routes/next');
var downloadRouter = require('./routes/download');
var redirectRouter = require('./routes/redirect');
var chainingRouter = require('./routes/chaining');
var urlEncodedRouter = require('./routes/urlEncoded');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create', createRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/next', nextRouter);
app.use('/download', downloadRouter);
app.use('/redirect', redirectRouter);
app.use('/chaining', chainingRouter);
app.use('/item', urlEncodedRouter);

//using the public folder at the root of the project
app.use(express.static("public/images"))

//using the images folder at the route /images
app.use("/images", express.static("images"))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
