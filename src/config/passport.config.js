const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;

const { User } = require("../models");
const { jwtSecret } = require("../config");

const localStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ userName: username }).exec((err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: "Incorrect username." });
    if (!user.validatePassword(password))
      return done(null, false, { message: "Incorrect password." });
    return done(null, user);
  });
});

const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: (req) => req.cookies.access_token,
    secretOrKey: jwtSecret,
  },
  (payload, done) => {
    User.findOne({ _id: payload.sub }).exec((err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, user);
    });
  }
);

module.exports = {
  localStrategy,
  jwtStrategy,
};
