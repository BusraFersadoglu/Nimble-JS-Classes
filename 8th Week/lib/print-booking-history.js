function printBooking(booking) {
  console.log(
    `${booking.guest.name} booked ${booking.host.name}'s ${booking.host.location} Houses`
  );
}

function printBookingHistory(guest) {
  if (guest.bookings.length == 0)
    return console.log(`${guest.name} has no bookings yet`);
  guest.bookings.forEach(printBooking);
}

module.exports = printBookingHistory;
