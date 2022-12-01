const app = require("../..");
const request = require("supertest")(app);

test("creates a new hosts", async () => {
  const hostToCreate = {
    name: "Test host",
  };

  const response = await request.post("/hosts").send(hostToCreate).expect(200);
  const hostCreated = response.body;

  expect(hostCreated).toMatchObject(hostToCreate);
});
