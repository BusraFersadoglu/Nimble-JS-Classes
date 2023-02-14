function printBooking(booking) {
  console.log(
    `${booking.user.name} booked ${booking.host.name}'s ${booking.host.location} Houses`
  );
}

function printBookingHistory(user) {
  if (user.bookings.length == 0)
    return console.log(`${user.name} has no bookings yet`);
  user.bookings.forEach(printBooking);
}

module.exports = printBookingHistory;
