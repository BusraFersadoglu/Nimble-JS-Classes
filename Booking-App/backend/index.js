const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const hostsRouter = require("./routes/hosts");
const bookingsRouter = require("./routes/bookings");

require("./mongo-connection");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", usersRouter);
app.use("/hosts", hostsRouter);
app.use("/bookings", bookingsRouter);

module.exports = app;
