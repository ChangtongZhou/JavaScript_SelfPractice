const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/getall', user_controller.getall);
router.post('/createone', user_controller.createone);
router.put('/updateone/:id', user_controller.updateone);
router.delete('/deleteone/:id', user_controller.deleteone);

module.exports = router;
