const Booking = require("./booking");
const uuid = require("uuid");

class Guest {
  constructor(name, bookings = [], id = uuid.v4()) {
    this.name = name;
    this.bookings = bookings;
    this.id = id;
  }
  book(host, location) {
    const booking = new Booking(host, this, location);

    this.bookings.push(booking);

    return booking;
  }
  static create({ name, bookings, id }) {
    return new Guest(name, bookings, id);
  }
}

module.exports = Guest;
