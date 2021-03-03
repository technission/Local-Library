// This will return the account object that matches the given ID
const findAccountById = (accounts, id) =>
  accounts.find((acct) => acct.id === id);

// This will sort all accounts by last name and return every object
function sortAccountsByLastName(accounts) {
  // sort accounts array
  return accounts.sort(function compare(a, b) {
    if (a.name.last < b.name.last) {
      return -1;
    }
    if (a.name.last > b.name.last) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}

// This will return a number that states how many times the id appears in the borrows within the books array
function numberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        acc++;
      }
    }
    return acc;
  }, 0);
  return result;
}

// this will return an array of books and authors that represent all books currently checked out by given account.
// the author object that matches must be embedded in the return
function getBooksPossessedByAccount(account, books, authors) {
  // declare a varialbe for the end result
  let result = [];
  // declare a variable for the matching borrow object
  let borrowMatch = [];
  // loop through books
  books.forEach(function (item) {
    // declare a variable for just the borrows object
    const borrowed = item.borrows;
    // destructure book
    let book = { ...item, author: {}, borrows: {} };
    let { authorId } = book;

    // loop through borrowed
    borrowed.forEach(function (borrow) {
      // check to see if borrow.id is equal to accountId and book hasn't been returned
      if (borrow.id === account.id && borrow.returned === false) {
        // if match is found then push that book into the result object
        borrowMatch.push(borrow);
        // set borrows within the book object to the matching borrows array
        book.borrows = borrowMatch;
        // filter the authors array to only give the one author object not all the authors
        book.author = authors.filter((auth) => auth.id === authorId)[0];
        result.push(book); // this pushes the book object only
      }
    });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
