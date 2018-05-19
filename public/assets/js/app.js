$(function() {

	//Main Left Sidebar Menu
	$('.sidebar-collapse').sideNav({
		edge: 'left', // Choose the horizontal origin
	});

	//Alerts
	$("#card-alert .close").click(function() {
		$(this).closest('#card-alert').fadeOut('slow');
	});

	$("#close-search").on("click", function(event) {
		$(".close").hide(newSeach);
	
	
});

function search() {

var newSearch = [`
	<div class="row">
													<div class="col s12 m12">
														<div id="card-alert" class="card box-shadow-none" style="background-color:#f5f5f5">
															<div class="card-content">
																	<form class="col s12">
																		<div class="row">
																				<button type="button" class="close right" data-dismiss="alert" aria-label="Close">
																						<span aria-hidden="true">×</span>
																					</button>
																		</div>
																			<div class="row">
																					
																				<div class="input-field col s6">
																					<i class="material-icons prefix">search</i>
																					<input id="book-input" type="text" placeholder="Title or Author">
																					<!-- <label for="book-input">Search</label> -->
																				</div>
																				<div class="input-field col s6">
																						<a id="find-book" type="submit" class="light-blue darken-3 btn">Search</a>
																					</div>
																			</div>
																		</form>
																		<div class="row">
									
																			<!-- Dump results from JSON here -->
																			<div class="have-read">
																				<div class="book-view"></div>
																			</div>
									
																	</div>
																	
															</div>
															
														</div>
													</div>
												</div>`];

												$(".searchBook").append(newSearch);

}

$("#search-book").on("click", function(event) {
	event.preventDefault();

	
	search();
	
	
});

	// Append books to search section
	

});






// This .on("click") function will trigger the AJAX Call
$("#find-book").on("click", function(event) {

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
			
			for (var i = 0; i < results.length; i++) {
				// Google ID; will be used as the unique identifier for the books that get added to the db);
				console.log("Google ID: " + results[i].id);    

				// Displays the book cover image for the books that are returned from the api
				// An image is dynamically created for each result returned
				var bookImage = [`<img src="${results[i].volumeInfo.imageLinks.thumbnail}" style="max-height:100px;>`];

				// Create button for books to add
				// Buttons are dynamically created for each result that is returned from the api
				var readButton = [`<br><a href="#"><i class="material-icons">add</i>Add Book</a>`];
				
				// Book title, author and book cover image are displayed to the page based on api search results
				var newBook = [`<div class="col s12 m6 l3">
													<div class="card book-card box-shadow-none">
														<div class="card-content">
															<span class="card-title activator grey-text text-darken-4">${results[i].volumeInfo.title}<br>
																<span class="author grey-text text-lighten-1">${results[i].volumeInfo.authors}</span>
															</span>
															<div class="center-align">${bookImage}</div>
														</div>
														<div class="card-action center-align">${readButton}</div>
													</div>
												</div>`];

				// Append books to search section
				$(".book-view").append(newBook);
			}
	})
});

/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// (function($) {

// 	skel
// 		.breakpoints({
// 			xlarge:	'(max-width: 1680px)',
// 			large:	'(max-width: 1280px)',
// 			medium:	'(max-width: 980px)',
// 			small:	'(max-width: 736px)',
// 			xsmall:	'(max-width: 480px)'
// 		});

// 	$(function() {

// 		var	$window = $(window),
// 			$body = $('body'),
// 			$wrapper = $('#page-wrapper'),
// 			$banner = $('#banner'),
// 			$header = $('#header');

// 		// Disable animations/transitions until the page has loaded.
// 			$body.addClass('is-loading');

// 			$window.on('load', function() {
// 				window.setTimeout(function() {
// 					$body.removeClass('is-loading');
// 				}, 100);
// 			});

// 		// Mobile?
// 			if (skel.vars.mobile)
// 				$body.addClass('is-mobile');
// 			else
// 				skel
// 					.on('-medium !medium', function() {
// 						$body.removeClass('is-mobile');
// 					})
// 					.on('+medium', function() {
// 						$body.addClass('is-mobile');
// 					});

// 		// Fix: Placeholder polyfill.
// 			$('form').placeholder();

// 		// Prioritize "important" elements on medium.
// 			skel.on('+medium -medium', function() {
// 				$.prioritize(
// 					'.important\\28 medium\\29',
// 					skel.breakpoint('medium').active
// 				);
// 			});

// 		// Scrolly.
// 			$('.scrolly')
// 				.scrolly({
// 					speed: 1500,
// 					offset: $header.outerHeight()
// 				});

// 		// Menu.
// 			$('#menu')
// 				.append('<a href="#menu" class="close"></a>')
// 				.appendTo($body)
// 				.panel({
// 					delay: 500,
// 					hideOnClick: true,
// 					hideOnSwipe: true,
// 					resetScroll: true,
// 					resetForms: true,
// 					side: 'right',
// 					target: $body,
// 					visibleClass: 'is-menu-visible'
// 				});

// 		// Header.
// 			if (skel.vars.IEVersion < 9)
// 				$header.removeClass('alt');

// 			if ($banner.length > 0
// 			&&	$header.hasClass('alt')) {

// 				$window.on('resize', function() { $window.trigger('scroll'); });

// 				$banner.scrollex({
// 					bottom:		$header.outerHeight() + 1,
// 					terminate:	function() { $header.removeClass('alt'); },
// 					enter:		function() { $header.addClass('alt'); },
// 					leave:		function() { $header.removeClass('alt'); }
// 				});

// 			}

// 	});

// })(jQuery);
