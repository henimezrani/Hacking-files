function makeBook(title, author, type){
	return {
		title: title,
		author: author,
		type: type
	};
}

var book1 = makeBook("Harry Potter and the Sorcerer's Stone", ["JK Rowling"], "Sci-fi")
var book2 = makeBook("Romeo and Juliet", ["Shakespear"], "Romance")
var book3 = makeBook("Structure and Interpretation of Computer Programs",["Gerald Jay Sussman","Hal Abelson"],"Science")


function displayBook(book)
{
	return (book.title +" by " + book.author.join(' and ') + " - " + book.type)
}

var books = [book1 , book2 , book3];

function displayBooks(books)
{

	for (var i =0 ; i < books.length ; i++)
	{
		console.log(i+1 + " - " + displayBook(books[i]) + "\n");
	}
}

function isMatch(query, str){
	if (typeof str === "number"){
		if (query.toLowerCase() === str.toString().toLowerCase() || str.toString().toLowerCase().indexOf(query.toLowerCase())>=0){
			return true;
		}
	} else {
		if (query.toLowerCase() === str.toLowerCase() || str.toLowerCase().indexOf(query.toLowerCase())>=0){
			return true;
		}
	}
	return false;
}

function makeResult(key, value, str){
	return {
		key: key,
		value: value,
		str: str
	}
}

function searchBook(query, books){
	var count = 0;
	var results = [];
	for (var i = 0 ; i < books.length ; i++){
		for (var key in books[i]){

			if (!Array.isArray(books[i][key])){
				if (isMatch(query, books[i][key])){
					results.push(makeResult(key, books[i][key], displayBook(books[i])))
					count++;
				}
			} else {
				if (isMatch(query, books[i][key].toString())){
					results.push(makeResult(key, books[i][key].toString().split(',').join(' and '), displayBook(books[i])))
					count++;
				}
			}		
		}
	}
	console.log("The query '" + query + "' has been found in " + count + " books:")
	for (var k = 0 ; k < results.length ; k++){
		console.log(results[k].key + " '" + results[k].value+ "' of " + results[k].str)
	}
}

function removeBook(title , books)
{
	var array = [];
	for (var i = 0; i < books.length; i++) {
	

		if (title !== books[i].title) {
			array.push(books[i])
		}
	}
	return array ;
}


// MORE PRACTICE

function makeMovie(title, director, duration, rating, actors){
	return {
		title: title,
		director: director,
		duration: duration,
		rating: rating,
		actors: actors
	};
}

var movie1 = makeMovie("Maleficent: Mistress of Evil", "Joachim Ronning", 118, 8.5, ["Angelina Jolie","Elle Fanning","Harris Dickinson","Michelle Pfeiffer","Sam Riley"])
var movie2 = makeMovie("Jojo Rabbit", "Taika Waititi", 108, 7.1, ["Roman Griffin Davis","Thomasin McKenzie","Scarlett Johansson","Taika Waititi","Sam Rockwell"])
var movie3 = makeMovie("Marriage Story", "Noah Baumbach", 136, 8.1, ["Merritt Wever","Scarlett Johansson","Adam Driver","Laura Dern","Wallace Shawn"])
var movie4 = makeMovie("The Lighthouse", "Robert Eggers", 109, 8.1, ["Willem Dafoe","Robert Pattinson","Valeriia Karaman"])
var movie5 = makeMovie("Jay and Silent Bob Reboot", "Kevin Smith", 120, 8.4, ["Melissa Benoist", "Matt Damon", "Chris Hemsworth", "Ben Affleck"])

function displayMovie(movie){
	return (movie.title + " by " + movie.director + ". Rating: " + movie.rating + ". duration: " + movie.duration+ ". Cast: " + displayCast(movie)
}

function displayCast(movie){
		return (movie.actors
		.join(', ')
		.slice(0,movie.actors
			.join(', ')
			.lastIndexOf(", ")) 
		+ " and" 
		+  movie.actors
		.join(', ')
		.slice(movie.actors
			.join(', ')
			.lastIndexOf(", ")+1));
}

var movies = [movie1, movie2, movie3, movie4, movie5];

function displayMovies(movies)
{
	for(var i = 0 ; i < movies.length ; i++)
	{
		console.log(i + 1 + ' - ' +displayMovie(movies[i]))
	}
	
}

function averageLength(movies)
{
	var total = 0 ;
	for ( var i =0 ; i < movies.length ; i++)
	{
		total+=movies[i].duration 
	}
	return total/movies.length;
}

function averageRating(movies)
{
	var total = 0 ;
	for ( var i =0 ; i < movies.length ; i++)
	{
		total+=movies[i].rating 
	}
	return total/movies.length;
}

function searchMovie(query, movies){
	var count = 0;
	var results = [];
	for (var i = 0 ; i < movies.length ; i++){
		for (var key in movies[i]){

			if (!Array.isArray(movies[i][key])){
				if (isMatch(query, movies[i][key])){
					results.push(makeResult(key, movies[i][key], displayMovie(movies[i])))
					count++;
				}
			} else {
				if (isMatch(query, movies[i][key].toString())){
					results.push(makeResult(key, displayCast(movie), displayMovie(movies[i])))
					count++;
				}
			}		
		}
	}
	console.log("The query '" + query + "' has been found in " + count + " movies:")
	for (var k = 0 ; k < results.length ; k++){
		console.log(results[k].key + " '" + results[k].value+ "' of " + results[k].str)
	}
}

