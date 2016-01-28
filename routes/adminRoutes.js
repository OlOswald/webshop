var express = require('express');
var router = express.Router();
var controller = require('../controllers/adminController');

var checkLoggedInUser = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
};

router.use(checkLoggedInUser);
router.get('/', controller.homeView);

module.exports = router;