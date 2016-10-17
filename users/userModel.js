var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  answers: [String]
})

module.exports = mongoose.model('users', UserSchema);