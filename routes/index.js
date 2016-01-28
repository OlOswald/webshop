var homeRoutes = require('./homeRoutes');
var authRoutes = require('./authRoutes');
var userRoutes = require('./userRoutes');
var adminRoutes = require('./adminRoutes');

module.exports = function registerRoutes(app) {
  app.use('/', authRoutes, homeRoutes);
  app.use('/users', userRoutes);
  app.use('/admin', adminRoutes);
};