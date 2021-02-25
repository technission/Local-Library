// this will return the author object that has the matching id
function findAuthorById(authors, id) {
    //return an object
}

// this will return the book object that had the matching id
function findBookById(books, id) {
    //return an object
}

// this will return an array with two arrays inside of it. All of the books are either present in the first array or second array. 
// first array are books that have been loaned out and not yet returned
// second array are books that have been returned
// check the return status by looking at the first transaction in the borrows array
function partitionBooksByBorrowedStatus(books) {
    // return an array with two arrays inside of it
}

// this will return an array of all the transactions from the books borrow key. Each transaction should include the related account info and the returned key
function getBorrowersForBook(book, accounts) {
    // return an array
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
