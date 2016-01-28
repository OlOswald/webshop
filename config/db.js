var mongoose = require('mongoose');

var dbHost = process.env.DB_PORT_27017_TCP_ADDR || 'localhost';
var dbPort = process.env.DB_PORT_27017_TCP_PORT || '27017';

var dbURI = 'mongodb://ibs-db:IbStpe18Id@' + dbHost + ':' + dbPort + '/app';

module.exports = function registerDB(app) {
  mongoose.connect(dbURI);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
  });
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
    //process.exit(1);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });

// To be called when process is restarted or terminated
  var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected through ' + msg);
      callback();
    });
  };

// For nodemon restarts
  process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
      process.kill(process.pid, 'SIGUSR2');
    });
  });

// For app termination
  process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
      process.exit(0);
    });
  });
  process.on('SIGTERM', function () {
    gracefulShutdown('app termination', function () {
      process.exit(0);
    });
  });

  require('../models');

};
