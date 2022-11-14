// const guestDatabase = require("./database/guest-database");
// const hostDatabase = require("./database/host-database");

// function printBooking(booking) {
//   console.log(
//     `${booking.guest.name} booked ${booking.host.name}'s ${booking.host.location} Houses`
//   );
// }

// function printBookingHistory(guest) {
//   guest.bookings.forEach(printBooking);
// }

// async function main() {
//   const busra = await guestDatabase.findByName("Büşra");
//   const mamut = await guestDatabase.findByName("Mamut");
//   const talha = await hostDatabase.findByHostName("Talha");

//   printBookingHistory(busra);
//   printBookingHistory(mamut);
//   console.log(talha);
// }
// main();
