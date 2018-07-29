const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/users/getall', user_controller.getall);
router.post('/users/insertone', user_controller.user_create);
router.get('/users/getone/:id', user_controller.getone);
router.put('/users/updateone/:id', user_controller.updateone);
router.delete('/users/deleteone/:id', user_controller.deleteone);
module.exports = router;
