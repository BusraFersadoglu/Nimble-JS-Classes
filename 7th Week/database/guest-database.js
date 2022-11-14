const BaseService = require("../services/base-service");
const Guest = require("../models/guest");
const bookingService = require("../services/booking-service");
const hostService = require("../services/host-service");

class GuestDatabase extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }

  async book(hostId, guestId, location) {
    const guest = await this.find(guestId);
    const host = await hostService.find(hostId);

    const booking = await bookingService.insert({ host, guest, location });
    guest.bookings.push(booking);

    await guest.save();

    return booking;
  }
}

module.exports = new GuestDatabase(Guest);
