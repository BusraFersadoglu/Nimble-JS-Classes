const BaseService = require("./base-service");
const Host = require("../models/host");

class HostService extends BaseService {
  async findByHostName(name) {
    return this.findBy("name", name);
  }

  findByLocation(location) {
    return this.findBy("location", location);
  }
}
module.exports = new HostService(Host);
