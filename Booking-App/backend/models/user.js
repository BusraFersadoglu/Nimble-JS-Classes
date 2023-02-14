const Booking = require("./booking");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserShema = new mongoose.Schema({
  fullname: { type: String, required: true, minlength: 3, unique: true },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

UserShema.plugin(require("mongoose-autopopulate"));
UserShema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserShema);
