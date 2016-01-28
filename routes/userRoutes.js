var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

router.get('/', controller.usersView);
router.post('/', controller.create);
router.get('/new', controller.createView);
router.get('/:userName', controller.profileView);

module.exports = router;
