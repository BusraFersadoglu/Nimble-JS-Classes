const BaseService = require("./base-service");
const Guest = require("../models/user");

class GuestService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }
}
module.exports = new GuestService(Guest);
