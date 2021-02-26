// this will return the author object that has the matching id
function findAuthorById(authors, id) {
  // return an object
  // loop through the authors array using for/in
  for (num in authors) {
    // check to see if the authors id matches the id inputted
    if (authors[num].id === id) {
      // if match is found then return that author object
      return authors[num];
    }
  }
  
}

// this will return the book object that had the matching id
function findBookById(books, id) {
  //return an object
  // loop through the books array using for/in
  for (num in books) {
    // check to see if the books id matches the id being inputted
    if (books[num].id === id) {
      // if match is found then return the books object
      return books[num]
    }
  }
  
}

// this will return an array with two arrays inside of it. All of the books are either present in the first array or second array. 
// first array are books that have been loaned out and not yet returned
// second array are books that have been returned
// check the return status by looking at the first transaction in the borrows array
function partitionBooksByBorrowedStatus(books) {
  let booksOut = [];
  let booksIn = [];
    // return an array with two arrays inside of it
    // loop through books
    for (num in books) {
      //console.log(books[num].borrows[0]) // this looks at the first transaction only and only looks for returned true/false
      const borrows = books[num].borrows[0];
      if (borrows.returned === true) {
        booksIn.push(books[num]);
      } else {
          booksOut.push(books[num]);
        }
    }
    const result = [...booksOut, ...booksIn]
    console.log(booksOut, booksIn)
  return result;
}

// this will return an array of all the transactions from the books borrow key. Each transaction should include the related account info and the returned key
function getBorrowersForBook(book, accounts) {
  // declare a variable for the end result which will be an array
  let result = [];
  // declare a variable for the borrows array
  const borrows = book.borrows;
    // loop through the borrows array
    for (let i = 0; i < borrows.length; i++) {
      // do this no more than ten times
      if (i < 10) {
        // loop through the accounts array
        accounts.forEach(function(acct) {
          // check to see if the acct id matches the borrowsId
          if (borrows[i].id === acct.id) {
            // destructure acct
            const account = {
              id: acct.id,
              returned: borrows[i].returned,
              picture: acct.picture,
              age: acct.age,
              name: acct.name,
              company: acct.company,
              email: acct.email,
              registered: acct.registered
            }
            result.push(account);
          }
        })
      }
    }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
