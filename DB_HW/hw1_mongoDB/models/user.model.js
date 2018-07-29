const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
  id: Number,
  name: String,
  age: Number,
  Sex: String,
  title: String,
  start_date: Date
})

module.exports = mongoose.model('User', UserSchema);
