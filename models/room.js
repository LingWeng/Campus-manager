var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: Number,
  reservation: Number,
  capacity: Number,
  beamer: Boolean,
  occupied: Boolean,
  activity: Number,
  xPos: Number,
  yPos: Number,
  width: Number,
  height: Number,
  floor: Number,
  selected: Boolean,
});

module.exports = mongoose.model('Room', RoomSchema);
