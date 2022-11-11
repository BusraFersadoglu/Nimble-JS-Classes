const BaseDatabase = require("./base-database");
const Host = require("../models/host");

class HostDatabase extends BaseDatabase {
  findByHostName(name) {
    return this.findBy("name", name);
  }

  findByLocation(location) {
    return this.findBy("location", location);
  }
}
module.exports = new HostDatabase(Host);
