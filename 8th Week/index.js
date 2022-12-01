const express = require("express");
const bodyParser = require("body-parser");
const guestsRouter = require("./routes/guests");
const hostsRouter = require("./routes/hosts");
const bookingsRouter = require("./routes/bookings");

require("./mongo-connection");

const app = express();

app.use(bodyParser.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/guests", guestsRouter);
app.use("/hosts", hostsRouter);
app.use("/bookings", bookingsRouter);

module.exports = app;
