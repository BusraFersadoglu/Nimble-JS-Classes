const mongoose = require("mongoose");

const HostShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  overnightStayPrice: {
    type: Number,
    required: true,
  },
  numberOfGuests: {
    type: Number,
  },
  numberOfBedroom: {
    type: Number,
  },
  numberOfBed: {
    type: Number,
  },
  numberOfBath: {
    type: Number,
  },
});

module.exports = mongoose.model("Host", HostShema);
