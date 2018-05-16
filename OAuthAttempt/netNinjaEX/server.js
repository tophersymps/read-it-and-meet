const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

// Set up view engine
app.set('view engine', 'ejs');

// Set up routes
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});