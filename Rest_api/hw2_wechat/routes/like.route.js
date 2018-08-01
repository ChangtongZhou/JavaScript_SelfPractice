const express = require('express');
const router = express.Router();

const like_controller = require('../controllers/like.controller');

router.get('/', like_controller.getall);
router.get('/:id', like_controller.getone);
router.post('/', like_controller.createone);
router.put('/:id', like_controller.updateone);
router.delete('/:id', like_controller.deleteone);

module.exports = router;
