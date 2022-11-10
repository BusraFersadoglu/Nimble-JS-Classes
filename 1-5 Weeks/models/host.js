const uuid = require("uuid");

class Host {
  constructor(name, location, id = uuid.v4()) {
    this.name = name;
    this.location = location;
    this.id = id;
  }
  static create({ name, location, id }) {
    return new Host(name, location, id);
  }
}

module.exports = Host;
