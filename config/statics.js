var path = require('path');
var express = require('express');

module.exports = function registerStaticResources(app) {
  app.use(express.static(path.join(__dirname, '..', 'public')));
};