const guestDatabase = require("../database/guest-database");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const guests = await guestDatabase.load();
  res.render("guests", { guests });
});

router.get("/:guestId", async (req, res) => {
  const guest = await guestDatabase.find(req.params.guestId);
  if (!guest) return res.send("Can not find guest");
  res.render("guest", { guest });
});

router.post("/", async (req, res) => {
  const guest = await guestDatabase.insert(req.body);
  res.send(guest);
});

router.delete("/:guestId", async (req, res) => {
  await guestDatabase.removeBy("_id", req.params.guest_id);
  res.send("Delete guest");
});

router.patch("/:guestId", async (req, res) => {
  const { guestId } = req.params;
  const { name } = req.body;

  await guestDatabase.update(guestId, [name]);
});

module.exports = router;
