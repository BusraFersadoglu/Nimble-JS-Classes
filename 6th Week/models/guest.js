const mongoose = require("mongoose");

const GuestShema = new mongoose.Schema({
  name: String,
  bookings: [],
});

GuestModel = mongoose.model("Guest", GuestShema);
module.exports = GuestModel;
