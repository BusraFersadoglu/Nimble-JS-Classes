const printBookingHistory = require("../print-booking-history");

test("print guest booking", () => {
  const guest = {
    name: "Büşra",
    bookings: [
      {
        guest: { name: "Büşra" },
        host: { name: "Talha", location: "Trabzon" },
      },
    ],
  };

  const consoleSpy = jest.spyOn(console, "log");

  // test
  printBookingHistory(guest);

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith(
    "Büşra booked Talha's Trabzon Houses"
  );

  // teardown
  consoleSpy.mockRestore();
});

test("print guest booking", () => {
  const guest = {
    name: "Talha",
    bookings: [],
  };

  const consoleSpy = jest.spyOn(console, "log");

  // test
  printBookingHistory(guest);

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith("Talha has no bookings yet");

  // teardown
  consoleSpy.mockRestore();
});
