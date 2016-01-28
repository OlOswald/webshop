var express = require('express');
var router = express.Router();
var controller = require('../controllers/authController');

router.use(controller.populateUser);
router.get('/login', controller.loginView);
router.post('/login', controller.login, controller.loginSuccess);
router.get('/logout', controller.logout);

module.exports = router;