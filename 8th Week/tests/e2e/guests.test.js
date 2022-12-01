const app = require("../..");
const request = require("supertest")(app);

test("creates a new guets", async () => {
  const guestToCreate = {
    name: "Test guest",
  };

  const response = await request
    .post("/guests")
    .send(guestToCreate)
    .expect(200);

  const guestCreated = response.body;

  expect(guestCreated).toMatchObject(guestToCreate);
  expect(guestCreated.bookings).toEqual([]);
});
