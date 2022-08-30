const mongoose = require("mongoose");
const connection = require("../config/db");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
