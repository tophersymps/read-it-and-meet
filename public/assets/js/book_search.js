var itemList;

$('.book-view').on('click', '.read', function(e) {
    console.log(e.target, itemList);
    console.log ("you clicked the I want to Read button");
    var data = $(this).attr("data-listid");
    console.log ("Google ID is: " + data);
        $.post('/api/books', {google_book_id: data}).then(function(res) {
          console.log(res);
        })
    });
  
  $("#find-book").on("click", function(event){ 
  event.preventDefault();

  var book = $("#book-input").val();
  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=search" + book;

  $.ajax({
      url: queryURL,
      dataType: "json",
      success: function (data){
      },
      type: "GET"
  })
  .then(function(response) {
    console.log(queryURL);
    var results = response.items;
    
    itemList = results;
            
    for (var i = 0; i < results.length; i++) {
        // Google ID; will be used as the unique identifier for the books that get added to the db);
        console.log("Google ID: " + results[i].id);    

        // Displays the book cover image for the books that are returned from the api
        // An image is dynamically created for each result returned
        var bookImage = $("<img>");
        bookImage.attr("src", results[i].volumeInfo.imageLinks.thumbnail);
        var bookImageUrl = results[i].volumeInfo.imageLinks.thumbnail;
            
        // Create button for books already read
        // Buttons are dynamically created for each result that is returned from the api
        var readButton = $("<input>");
        readButton.attr("class", "read");
        readButton.attr("type", "button");
        readButton.attr("data-listId", results[i].id)
        readButton.attr("value", "Already Read");
          
        // Create button for books that the user wants to read
        // Buttons are dynamically created for each result that is returned from the api
        var wantToRead = $("<input>");
        wantToRead.attr("class", "read");
        wantToRead.attr("type", "button");
        wantToRead.attr("data-listId", results[i].id)
        wantToRead.attr("value", "I Want To Read");

        // Book title, author and book cover image are displayed to the page based on api search results
        $(".book-view").append(
            "Book Title: " + results[i].volumeInfo.title + "<br>" +
            "Google ID: " + results[i].id + "<br" +
            "Author: " + results[i].volumeInfo.authors + "<br>" + "<br>");
        $(".book-view").append(bookImage);
        $(".book-view").append("<br>" + "<br>");
        $(".book-view").append(readButton);
        $(".book-view").append(" ");
        $(".book-view").append(wantToRead);
        $(".book-view").append("<br>" + "<br>");
    }

    return results;

       
    }); 
  });






