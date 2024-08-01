const bcrypt = require("bcrypt");

const hash = {
  salt: async function () {
    return await bcrypt.genSalt(10);
  },
  make: async function (value) {
    const saltRound = await this.salt();
    return await bcrypt.hash(value, saltRound);
  },
  compare: async function (password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
  },
};

module.exports = {
  hash,
};
