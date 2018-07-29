const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: String,
  gender: String,
  location: String,
  bio: String

});

// Export the model
module.exports = mongoose.model('User', UserSchema);
