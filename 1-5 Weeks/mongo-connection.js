const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://BusraFersadoglu:<mongodbdeneme>@cluster0.pngvajy.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);
