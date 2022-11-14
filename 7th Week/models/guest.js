const Booking = require("./booking");
const mongoose = require("mongoose");

const GuestShema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

GuestShema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Guest", GuestShema);
