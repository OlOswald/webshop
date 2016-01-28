var passport = require('passport');

module.exports = function registerAuthHandler(app) {
  app.use(passport.initialize());
  app.use(passport.session());
  require('./strategies/localStrategy');
};