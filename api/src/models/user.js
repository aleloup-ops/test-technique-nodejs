const mongoose = require("mongoose");

const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  })
);

module.exports = User;