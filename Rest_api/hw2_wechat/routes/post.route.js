const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post.controller');

router.get('/', post_controller.getall);
router.get('/:id', post_controller.getone);
router.get('/getByUserId/:id', post_controller.getOneByUserId);
router.post('/', post_controller.createone);
router.put('/:id', post_controller.updateone);
router.delete('/:id', post_controller.deleteone);

module.exports = router;
