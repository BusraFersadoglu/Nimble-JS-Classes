const BaseService = require("./base-service");
const Booking = require("../models/booking");
const hostService = require("./host-service");
const guestService = require("./guest-service");

class BookingService extends BaseService {
  async findByPassengerId(guestId) {
    return this.findBy("guest", guestId);
  }

  async findByDriverId(hostId) {
    return this.findBy("host", hostId);
  }

  async book(hostId, guestId, location) {
    const guest = await guestService.find(guestId);
    const host = await hostService.find(hostId);

    const booking = await this.insert({ host, guest, location });
    guest.bookings.push(booking);

    await guest.save();

    return booking;
  }
}

module.exports = new BookingService(Booking);
