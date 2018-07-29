const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post.controller');

router.get('/getall', post_controller.getall);
router.post('/createone', post_controller.createone);
router.put('/updateone/:id', post_controller.updateone);
router.delete('/deleteone/:id', post_controller.deleteone);

module.exports = router;
