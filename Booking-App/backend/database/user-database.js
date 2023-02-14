const BaseService = require("../services/base-service");
const User = require("../models/user");
const bookingService = require("../services/booking-service");
const hostService = require("../services/host-service");

class UserDatabase extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }

  async book(hostId, userId, location) {
    const user = await this.find(userId);
    const host = await hostService.find(hostId);

    const booking = await bookingService.insert({ host, user, location });
    user.bookings.push(booking);

    await user.save();

    return booking;
  }
}

module.exports = new UserDatabase(User);
