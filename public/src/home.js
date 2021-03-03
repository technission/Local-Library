// It returns a number that represents the number of book objects inside of the array.
function totalBooksCount(books) {
  let totalBooks = 0; 
  // loop through the books array
  for (let i = 0; i < books.length; i++) {
    // add one to the totalBooks
    totalBooks += 1;
  }
  // return totalBooks after the for loop has completed
  return totalBooks;
}

// It returns a number that represents the number of account objects inside of the array.
function totalAccountsCount(accounts) {
  let totalAccounts = 0;
  // loop through the accounts array
  for (let i = 0; i < accounts.length; i++) {
    // add one to the totalAccounts for each account found
    totalAccounts += 1;
  }
  // return totalAccounts after the loop is complete
  return totalAccounts;
}

// It returns a number that represents the number of books _that have been taken out from the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.
function booksBorrowedCount(books) {
  let total = 0;
  // loop through the books array
  books.forEach(function(book) {
    const booksBorrowed = book.borrows
      // loop through the booksBorrowed array
      for (num in booksBorrowed) {
        // check to see if the returned status is false
        total = booksBorrowed[num].returned === false ? total += 1 : total = total;
      }
  });
  return total;
}

/* It returns an array containing five objects or less that represents the most common occurring genres, ordered from most common to least. */
function getMostCommonGenres(books) {
  let map = {};
  // loop through the books
  books.forEach(num => {
    // check to see if there is a genre in the map
    if (map[num.genre]) {
      // if there is then add 1
      map[num.genre]++;
    } else {
      // if there isn't then set the key and also set the value to one
      map[num.genre] = 1;
    }
  });
  // map the Object entries and return them with name and count
  return Object.entries(map).map(([name, count]) => {
    return {
      name,
      count
    }
    // sort the array so the most common comes first
  }).sort((a,b)=> b.count - a.count).slice(0, 5)
}

/* It returns an array containing five objects or less that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed. */
function getMostPopularBooks(books) {
  return books.map((book) => {
   return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}

/* It returns an array containing five objects or less that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed. */
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let theAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length
      }
    })
    result.push(theAuthor)
  })
  return result.sort((a,b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
