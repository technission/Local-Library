// This will return the account object that matches the given ID
function findAccountById(accounts, id) {
    // loop through the accounts array
    for (num in accounts) {
        if (id === accounts[num].id) {
            return accounts[num];
        }
    }
//    for (let i = 0; i < accounts.length; i++) {
//        // check to see if the id matches and return the account object that has the matching ID
//        if (id === accounts[i].id) {
//            return accounts[i];
//        }
//    }
}

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
    let total = 0;
    //console.log(books[1].borrows[1].id)
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const borrows = books[i].borrows;
        for (let j = 0; j < borrows.length; j++) {
            // console.log('borrows[j].id', borrows[j].id);
            if (account.id === borrows[j].id) {
                total += 1;
            }
        } 
    }
    return total;
} 

// This will return an array of books and authors that represents all books currently checked out by the given account and combine book and author inside the return object
function getBooksPossessedByAccount(account, books, authors) {
    //return an array
//    console.log('account', account);
//    console.log('books', books);
//    console.log('authors', authors);
    // declare the account id variable
    const accountID = account.id;
    // empty array for result
    let result = [];
    // loop through books 
    for (let i = 0; i < books.length; i++) {
        // declare variables for borrowed books and books array
        const borrows = books[i].borrows;
        const book = books[i];
            // loop through borrows array
            for (let j = 0; j < borrows.length; j++) {
                // check to see if the account id matches the borrowed id and make sure it's not be returned to the library
                if (accountID === borrows[j].id && borrows[j].returned === false) {
                    result.push(book)
                    
                    // need to add the authors array in here after books.authorID
                }
            }
    }
    console.log('accountID', accountID);
    console.log(result);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
