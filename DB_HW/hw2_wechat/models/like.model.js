const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LikeSchema = new Schema({
  userId: String,
  postId: String
})

module.exports = mongoose.model('Like', LikeSchema);
