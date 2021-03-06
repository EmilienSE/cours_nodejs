const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

let sess = {
	maxAge: 86400,
	secret: 'tata',
	name: 'express_session_cookie',
	proxy: true,
	resave: true,
	saveUninitialized: true
};

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const voitureRouter = require('./routes/voiture');
const loginRouter = require('./routes/login');

const app = express();

app.use('/users', usersRouter);
app.use('/users/login', loginRouter);

app.use(session(sess));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session(sess));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/voiture', voitureRouter);

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
