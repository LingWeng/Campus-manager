var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  id: Number,
  date: String,
  duration: Number
});

module.exports = mongoose.model('Reservation', ReservationSchema);
