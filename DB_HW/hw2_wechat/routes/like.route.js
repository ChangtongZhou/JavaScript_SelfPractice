const express = require('express');
const router = express.Router();

const like_controller = require('../controllers/like.controller');

router.get('/getall', like_controller.getall);
router.post('/createone', like_controller.createone);
router.put('/updateone/:id', like_controller.updateone);
router.delete('/deleteone/:id', like_controller.deleteone);

module.exports = router;
