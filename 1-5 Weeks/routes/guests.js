const guestDatabase = require("../database/guest-database");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const guests = await guestDatabase.load();
  //   res.send(flatted.stringify(guests));
  res.render("guests", { guests });
});

router.get("/:guestId", async (req, res) => {
  const guest = await guestDatabase.find(req.params.guestId);
  if (!guest) return res.send("Can not find guest");
  res.render("guest", { guest });
});

router.post("/", async (req, res) => {
  //   const guest = Guest.create(req.body);
  //   await guestDatabase.insert(guest);
  const guest = await guestDatabase.insert(req.body);
  res.send(guest);
});

router.delete("/:guestId", async (req, res) => {
  await guestDatabase.removeBy("id", req.params.guestId);
  res.send("Delete guest");
});

module.exports = router;
