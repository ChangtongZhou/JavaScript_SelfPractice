const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/', user_controller.userlist);
router.get('/:id', user_controller.oneuser);
router.post('/', user_controller.createone);
router.put('/:id', user_controller.updateone);
router.delete('/:id', user_controller.deleteone);

module.exports = router;
