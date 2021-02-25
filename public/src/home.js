// It returns a number that represents the number of book objects inside of the array.
function totalBooksCount(books) {}

// It returns a number that represents the number of account objects inside of the array.
function totalAccountsCount(accounts) {}

// It returns a number that represents the number of books _that have been taken out from the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.
function booksBorrowedCount(books) {}

/* It returns an array containing five objects or less that represents the most common occurring genres, ordered from most common to least.
Each object in the returned array has two keys:
- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.
If more than five genres are present, only the top five should be returned. */
function getMostCommonGenres(books) {}

/* It returns an array containing five objects or less that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
Each object in the returned array has two keys:
- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.
If more than five books are present, only the top five should be returned. */
function getMostPopularBooks(books) {}

/* It returns an array containing five objects or less that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
Each object in the returned array has two keys:
- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.
If more than five authors are present, only the top five should be returned. */
function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
