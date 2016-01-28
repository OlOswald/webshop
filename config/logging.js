var logger = require('morgan');

module.exports = function registerLogging(app) {
  app.use(logger('dev'));
};