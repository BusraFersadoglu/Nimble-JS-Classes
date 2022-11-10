const Guest = require("./models/guest");
const Host = require("./models/host");

const guestDatabase = require("./database/guest-database");
const hostDatabase = require("./database/host-database");

// const printBookingHistory = require("./lib/print-booking-history");

function printBooking(booking) {
  console.log(`${booking.guest.name} booked ${booking.host.name}'s house`);
}

function printBookingHistory(guest) {
  guest.bookings.forEach(printBooking);
}

const busra = Guest.create({ name: "Büşra" });
const mamut = Guest.create({ name: "Mamut" });
const talha = Host.create({ name: "Talha", location: "Ayder Yaylası" });

busra.book(talha);
mamut.book(talha);

async function main() {
  await guestDatabase.save([busra, mamut]);
  await hostDatabase.save([talha]);

  const guests = await guestDatabase.load();
  guests.forEach(printBookingHistory);
}
main();
