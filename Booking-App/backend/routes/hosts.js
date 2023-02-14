const hostService = require("../services/host-service");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(await hostService.load());
});

router.get("/:hostId", async (req, res) => {
  const host = await hostService.find(req.params.hostId);
  if (!host) return res.send("Can not find host");
  res.send(host);
});

router.post("/", async (req, res) => {
  const host = await hostService.insert(req.body);
  res.send(host);
});

router.delete("/:hostId", async (req, res) => {
  await hostService.removeBy("_id", req.params.hostId);
  res.send("Delete host");
});

router.patch("/:hostId", async (req, res) => {
  const { hostId } = req.params;
  const { name } = req.body;

  await hostService.update(hostId, { name });
});

module.exports = router;
