var passport = require('passport');
var app = require('../app');

var populateUser = function (req, res, next) {
  res.locals.loggedInUser = req.user;
  next();
};

var loginView = function (req, res) {
  res.render('loginView', {title: "Anmeldung"});
};

var login = passport.authenticate('local', {failureRedirect: '/login'});

var loginSuccess = function (req, res) {
  req.flash('info', 'Login erfolgreich. Du bist nun eingeloggt als "' + req.user.userName + '".');
  res.redirect('/');
};

var logout = function (req, res) {
  req.logout();
  req.flash('info', 'Logout erfolgreich.');
  res.redirect('/');
};

module.exports = {populateUser, loginView, login, loginSuccess, logout};

