var express = require("express");

var router = express.Router();

// Import the model (books.js) to use its database functions.
var books = require("../models/books.js");

router.get("/booksearch", function(req, res) {
  // express callback response by calling books.selectAllBooks
  books.all(function(data) {
    var hbsObject = {
      books: data
    };
    console.log(hbsObject);
    // renders the books data to the handlebars placeholder on the screen
    res.render("index", hbsObject);
  });
});

router.post("/booksearch/add", function(req, res) {
  books.create([req.body.book_name, req.body.book_author, req.body.book_google_id], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/booksearch", function(req, res) {
  books.create([
    "book_name", "book_author", "book_google_id"
  ], [
    req.body.book_name, req.body.book_author, req.body.book_google_id
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ book_name: req.body.book_name});
  });
});

// Export routes for books.js to use.
module.exports = router;
