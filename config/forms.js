var bodyParser = require('body-parser');

module.exports = function registerFormParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
};