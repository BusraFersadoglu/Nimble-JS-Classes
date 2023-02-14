const app = require("../..");
const request = require("supertest")(app);

test("creates a new guets", async () => {
  const userToCreate = {
    name: "Test user",
  };

  const response = await request.post("/users").send(userToCreate).expect(200);

  const userCreated = response.body;

  expect(userCreated).toMatchObject(userToCreate);
  expect(userCreated.bookings).toEqual([]);
});
