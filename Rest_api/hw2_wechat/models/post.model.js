const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  content: String,
  created_at: Date,
  userId: String
})

// Export the model
module.exports = mongoose.model('Post', PostSchema);
