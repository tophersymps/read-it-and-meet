const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema to be used for Users in the User model
const userSchema = new Schema({
  username: String,
  googleId: String
});

// Create the User model
const User = mongoose.model('user', userSchema);

// Export the User model
module.exports = User;