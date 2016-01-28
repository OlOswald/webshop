var User = require('../models').User;

var usersView = function (req, res, next) {
  User.find(function (err, users) {
    if (err) {
      throw err;
    }
    res.render('users/usersView', {title: 'Alle Benutzer', users});
  });
};

var createView = function (req, res, next) {
  res.render('users/createView', {title: 'Registrierung'});
};

var create = function (req, res, next) {
  var form = req.body;
  var user = new User({userName: form.userName, firstName: form.firstName, lastName: form.lastName, email: form.email});
  user.setPassword(form.password);
  user.save(function (err) {
    if (err) {
      req.flash('danger', err.message);
      return res.redirect('/users/new');
    }
    req.flash('success', 'Vielen Dank. Deine Registrierung war erfolgreich.');
    return res.redirect('/');
  });
};

var profileView = function (req, res, next) {
  var userName = req.params.userName;
  User.findOne({userName}, function (err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.status(404).render('errorView', {title: 'Fehler', message: `Es existiert kein Nutzer ${userName}`});
    }
    res.render('users/profileView', {title: 'Profil von ' + user.userName, user});
  });
};

module.exports = {usersView, profileView, createView, create};