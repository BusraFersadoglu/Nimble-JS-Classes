const mongoose = require("mongoose");

const HostShema = new mongoose.Schema({
  name: String,
  location: String,
});

module.exports = mongoose.model("Host", HostShema);
