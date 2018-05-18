// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
// TODO: const authRoutes = require('./routes/auth-routes');
// TODO: const passportSetup = require('./config/passport-setup');
// TODO: const keys = require('./config/keys');

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Require models for syncing
var db = require('./models');

// Set up Express for Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static('./views'));

// Routes




// Sync Sequelize models and start Express App
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});