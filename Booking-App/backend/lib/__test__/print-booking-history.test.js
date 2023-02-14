const printBookingHistory = require("../print-booking-history");

test("print user booking", () => {
  const user = {
    name: "Büşra",
    bookings: [
      {
        user: { name: "Büşra" },
        host: { name: "Talha", location: "Trabzon" },
      },
    ],
  };

  const consoleSpy = jest.spyOn(console, "log");

  // test
  printBookingHistory(user);

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith(
    "Büşra booked Talha's Trabzon Houses"
  );

  // teardown
  consoleSpy.mockRestore();
});

test("print user booking", () => {
  const user = {
    name: "Talha",
    bookings: [],
  };

  const consoleSpy = jest.spyOn(console, "log");

  // test
  printBookingHistory(user);

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith("Talha has no bookings yet");

  // teardown
  consoleSpy.mockRestore();
});
