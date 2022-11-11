const BaseDatabase = require("./base-database");
const Guest = require("../models/guest");

class GuestDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load();
    return objects.find((o) => o.name == name);
  }
}
module.exports = new GuestDatabase(Guest);
