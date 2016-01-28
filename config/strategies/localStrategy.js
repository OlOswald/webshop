var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models').User;

passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
  },
  function (username, password, done) {
    User.findOne({userName: username}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user || !user.validPassword(password)) {
        return done(null, false, {message: 'Benutzername oder Passwort sind falsch'});
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.userName);
});

passport.deserializeUser(function (userName, done) {
  User.findOne({userName: userName}, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});