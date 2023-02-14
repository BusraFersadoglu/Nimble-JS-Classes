const BaseService = require("./base-service");
const Booking = require("../models/booking");
const hostService = require("./host-service");
const userService = require("./user-service");

class BookingService extends BaseService {
  async findByPassengerId(userId) {
    return this.findBy("user", userId);
  }

  async findByDriverId(hostId) {
    return this.findBy("host", hostId);
  }

  async book(hostId, userId) {
    const user = await userService.find(userId);
    const host = await hostService.find(hostId);

    const booking = await this.insert({ host, user });
    user.bookings.push(booking);

    await user.save();

    return booking;
  }
}

module.exports = new BookingService(Booking);
