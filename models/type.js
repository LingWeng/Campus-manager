var mongoose = require('mongoose');

var TypeSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model('Type', TypeSchema);
