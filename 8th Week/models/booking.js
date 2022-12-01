const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    autopopulate: { maxDepth: 1 },
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    autopopulate: { maxDepth: 1 },
  },
  location: String,
});

BookingSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Booking", BookingSchema);
