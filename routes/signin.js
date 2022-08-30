const express = require("express");
const signin = "../controllers.signin";
const passport = require("passport");
const router = express.Router();

router.post("/", passport.authenticate("local"), (req, res, next) => {
  res.status(200).send("User successfuly signed in.");
});

module.exports = router;
