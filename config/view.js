var path = require('path');

module.exports = function registerViewEngine(app) {
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
};