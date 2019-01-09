var mongoose = require('mongoose');

var FloorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  height: Number,
  width: Number,
});

module.exports = mongoose.model('Floor', FloorSchema);
