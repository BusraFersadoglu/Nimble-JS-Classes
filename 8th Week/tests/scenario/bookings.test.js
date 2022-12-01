const app = require("../..");
const request = require("supertest")(app);

test("creates a new booking", async () => {
  const guestToCreate = {
    name: "Test guest",
  };

  const hostToCreate = {
    name: "Test host",
    location: "Moda",
  };

  const guestResponse = await request
    .post("/guests")
    .send(guestToCreate)
    .expect(200);

  const hostResponse = await request
    .post("/hosts")
    .send(hostToCreate)
    .expect(200);

  const bookingResponse = await request
    .post(`/guests/${guestResponse.body._id}/bookings`)
    .send({
      hostId: hostResponse.body._id,
      guestId: guestResponse.body._id,
      location: hostResponse.body.location,
    })
    .expect(200);

  const bookingCreated = bookingResponse.body;

  expect(bookingCreated).toMatchObject({
    host: hostResponse.body,
    guest: guestResponse.body,
    location: hostResponse.body.location,
  });
});
