var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  categoryDisplay: String,
  createDate: String
})

module.exports = mongoose.model('beers', BeerSchema);