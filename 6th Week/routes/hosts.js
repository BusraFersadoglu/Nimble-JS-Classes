const hostDatabase = require("../database/host-database");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const hosts = await hostDatabase.load();
  res.render("hosts", { hosts });
});

router.get("/:hostId", async (req, res) => {
  const host = await hostDatabase.find(req.params.hostId);
  if (!host) return res.send("Can not find host");
  res.render("host", { host });
});

router.post("/", async (req, res) => {
  const host = await hostDatabase.insert(req.body);
  res.send(host);
});

router.delete("/:hostId", async (req, res) => {
  await hostDatabase.removeBy("_id", req.params.hostId);
  res.send("Delete host");
});

router.patch("/:hostId", async (req, res) => {
  const { hostId } = req.params;
  const { name } = req.body;

  await hostDatabase.update(hostId, { name });
});

module.exports = router;
