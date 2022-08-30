const bcrypt = require("bcrypt");

const verifyPassword = (password, hash) => {
  const result = bcrypt.compareSync(password, hash);
  return result;
};

module.exports = verifyPassword;
