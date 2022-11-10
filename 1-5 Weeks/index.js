const express = require("express");
const bodyParser = require("body-parser");
const guestsRouter = require("./routes/guests");

require("./mongo-connection");

const app = express();

app.use(bodyParser.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/guests", guestsRouter);
app.listen(3002, () => {
  console.log("started listening 3002");
});
