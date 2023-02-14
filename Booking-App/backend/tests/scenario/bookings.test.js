const app = require("../..");
const request = require("supertest")(app);

test("creates a new booking", async () => {
  const userToCreate = {
    name: "Test user",
  };

  const hostToCreate = {
    name: "Test host",
    location: "Moda",
  };

  const userResponse = await request
    .post("/users")
    .send(userToCreate)
    .expect(200);

  const hostResponse = await request
    .post("/hosts")
    .send(hostToCreate)
    .expect(200);

  const bookingResponse = await request
    .post(`/users/${userResponse.body._id}/bookings`)
    .send({
      hostId: hostResponse.body._id,
      userId: userResponse.body._id,
      location: hostResponse.body.location,
    })
    .expect(200);

  const bookingCreated = bookingResponse.body;

  expect(bookingCreated).toMatchObject({
    host: hostResponse.body,
    user: userResponse.body,
    location: hostResponse.body.location,
  });
});
