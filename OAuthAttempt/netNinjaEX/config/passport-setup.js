const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

// FIXME: Edit username to pull in Nickname from profile json
passport.use(
  new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    // console.log('passport callback function fired');
    // console.log(profile);
    // Check if user already exists in db
    User.findOne({
      googleId: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        // already have the user
        // console.log('user is: ', currentUser);
        console.log(currentUser.username, 'is already in the database!');
      } else {
        // if not, create new user in db
        new User({
          username: (profile.name.givenName.charAt(0) + profile.name.familyName).toLowerCase(),
          googleId: profile.id
        }).save().then((newUser) => {
          console.log('New user created: ' + newUser);
          // console.log(profile);
        });
      }
    });
  })
)