const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const person = new User(req.body);
  try {
    const user = await User.find({ email: person.email });
    if (user.length === 0) {
      bcrypt.hash(person.password, saltRounds).then(function (hash) {
        person.password = hash;
        person.save((err) => {
          if (err) {
            console.log(err);
          }
          res.status(201).send("User successufly registered.");
        });
      });
    } else {
      res.status(200).send("A user with this email already exists.");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
