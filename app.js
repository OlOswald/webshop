var express = require('express');

var app = express();

// view engine
require('./config/view')(app);

// logging
require('./config/logging')(app);

// form handler
require('./config/forms')(app);

// session handler
require('./config/session')(app);

// database
require('./config/db')(app);

// auth handler
require('./config/auth')(app);

// static resources
require('./config/statics')(app);

// register routes
require('./routes')(app);

// error handlers
require('./config/errors')(app);

module.exports = app;
