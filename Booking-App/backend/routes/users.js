const userService = require("../services/user-service");
const bookingService = require("../services/booking-service");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(await userService.load());
});

router.get("/:userId", async (req, res) => {
  const user = await userService.find(req.params.userId);
  if (!user) return res.send("Can not find user");
  res.send(user);
});

router.post("/", async (req, res, next) => {
  try {
    const user = await userService.insert(req.body);
    res.send(user);
  } catch (e) {
    next(e);
  }
});

router.delete("/:userId", async (req, res) => {
  await userService.removeBy("_id", req.params.userId);
  res.send("Delete user");
});

router.patch("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  await userService.update(userId, { name });
});

router.post("/:userId/bookings", async (req, res) => {
  const { userId } = req.params;
  const { hostId, location } = req.body;

  const booking = await bookingService.book(hostId, userId, location);
  res.send(booking);
});

module.exports = router;
