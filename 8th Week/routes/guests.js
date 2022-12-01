const guestService = require("../services/guest-service");
const bookingService = require("../services/booking-service");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const guests = await guestService.load();
  res.render("guests", { guests });
});

router.get("/:guestId", async (req, res) => {
  const guest = await guestService.find(req.params.guestId);
  if (!guest) return res.send("Can not find guest");
  res.render("guest", { guest });
});

router.post("/", async (req, res) => {
  const guest = await guestService.insert(req.body);
  res.send(guest);
});

router.delete("/:guestId", async (req, res) => {
  await guestService.removeBy("_id", req.params.guestId);
  res.send("Delete guest");
});

router.patch("/:guestId", async (req, res) => {
  const { guestId } = req.params;
  const { name } = req.body;

  await guestService.update(guestId, [name]);
});

router.post("/:guestId/bookings", async (req, res) => {
  const { guestId } = req.params;
  const { hostId, location } = req.body;

  const booking = await bookingService.book(hostId, guestId, location);
  res.send(booking);
});

module.exports = router;
