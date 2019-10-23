// Enter your code below here and ABOVE the HELPER FUNCTIONS
var bookStore = makeStore();
function makeStore(){
  var books =generateBooks(10)

  return {
    displayBook: function(book){
      return book.name+', by '+book.author+' / CATEGORY: '+book.categories+' / PRICE: '+book.price+' / ID : '+ book.id;
    },
    displayBooks: function(books){
       var tmpArray = [];
      for (var i = 0 ; i < books.length ; i++) {
        tmpArray[i] = displayBook(books[i])
      }
      return tmpArray.join('\n')
    },
    display: function(n){
      var tmpArray = books.slice(0,n);


    }
  };
}




// ==============================================================================
// HELPER FUNCTIONS

function generateBooks(n) {
  // __rawBooks is defined in books.js
  var booksArray = __rawBooks.split(',');
  var numBooks = n || booksArray.length - 1;
  var categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];

  function makeBook(bookName, id) {
    var tuple = bookName.split('by');

    return {
      id: id,
      title: tuple[0].trim(),
      author: tuple[1].trim(),
      price: parseFloat(randN(10, 35).toFixed(2)),
      category: randElt(categories)
    };
  }

  return reduce(take(booksArray, numBooks), function(books, s, i) {
    return conj(books, makeBook(s, i));
  }, []);
}
