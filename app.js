require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const signup = require("./routes/signup");
const signin = require("./routes/signin");
const signout = require("./routes/signout");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Session Storage */
const sessionStore = MongoStore.create({ mongoUrl: process.env.DB_ADDRESS });

/* Session setup
   Cookie expiration date is arbitrary set to two days*/

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,
    },
  })
);

//Passport Authentication
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/signup", signup);
app.use("/signin", signin);
app.use("/signout", signout);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
