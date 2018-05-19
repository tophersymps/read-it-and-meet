var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();
// TODO: Need to install MYSQL2 "npm install mysql2"

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public/assets"));
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Middleware for Passport
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // Persistant login sessions

// Set Handlebars.
var exphbs = require("express-handlebars");

app.set("views", "./views/layouts");
app.engine("hbs", exphbs({ 
  extname: ".hbs",
  defaultLayout: "index" 
}));
app.set("view engine", ".hbs");

// Models FIXME: Potentially move to a new 'app' folder
var models = require("./models");

// Routes
var authRoute = require("./routes/auth")(app, passport);

// Load Passport Strategies
require("./config/passport/passport")(passport, models.user);

// Sync Database
models.sequelize.sync().then(function() {
  console.log("Nice! Database looks fine!");
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update...");
});

app.listen(5000, function(err) {
  if (!err) {
    console.log("Site is live! visit: http://localhost:5000");
  } else {
    console.log(err);
  }
});