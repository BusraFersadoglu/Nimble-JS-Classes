const mongoose = require("mongoose");

const HostShema = new mongoose.Schema({
  name: String,
  location: String,
});

HostModel = mongoose.model("Host", HostShema);
module.exports = HostModel;
