var cookieParser = require('cookie-parser');
var session = require('express-session');
var flashMessages = require('flash');

module.exports = function registerCookieHandler(app) {
  app.use(cookieParser());
  app.use(session({secret: '_ibs+S3SS/ON', resave: false, saveUninitialized: false}));
  app.use(flashMessages());
};