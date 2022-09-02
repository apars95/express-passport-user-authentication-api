const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).send("User successfully signed out");
    res.redirect("/"); // optional redirect
  });
});

module.exports = router;
