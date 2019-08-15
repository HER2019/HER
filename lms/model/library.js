//constants
const maxRequests = 5;
const MAX_BOOKS = 5;

class Library {
    books = [];
    recommendation = [];
    librarians = [];
    users = [];
    constructor(books){
        if(typeof books !== "undefined")
         this.books = books;
    }
    selectBookById(i){
        this.books[i].selected=1;
    }
    findSelectedBook(){
        for(let i = 0;i < this.books.length;i++){
            if(this.books[i].selected===1)
                return this.books[i];
        }
    }
    unselectBookById(){
        for(let i = 0;i < this.books.length;i++){
                this.books[i].selected = 0;
        }
    }
    librarianSize() {
        return this.librarians.length;
    }
    usersSize(){
        return this.users.length;
    }
    async addRequest(type, userID, bookID, recommendation){
        for(let i = 0;i < this.librarianSize();i++){
            if(this.librarians[i] < maxRequests){
                this.librarians[0].addRequest({
                    "type": type,
                    "userId": userID,
                    "bookId": bookID,
                    "recommendation": recommendation
                });
            }
        }
    }
    getBooks(){
        return this.books;
    }
    registerUser (user){
        this.users.push(user);
    }

    registerLibrarian (librarian) {
        this.librarians.push(librarian);
    }
    registerBook (book) {
        this.books.push(book);
    }
    addRecommendation (recommendation){
        this.recommendation.push(recommendation);
    }
    findRecommendation(recommendation){
        for (let i = 0; i < this.recommendation.length; i++) {
            if (typeof this.recommendation[i] !== 'undefined' &&
                this.recommendation[i].UserID === recommendation.UserID &&
                this.recommendation[i].BookID === recommendation.BookID) {
                return true;
            }
        }
        return false;
    }
    checkBookAvailability(bookID){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookID === bookID && typeof this.books[i].userID === "undefined")
                return true;
        }
        return false;
    }
    checkUserHistory(userID){
        let totalNumber = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].UserID === userID) {
                if(totalNumber === MAX_BOOKS) {
                    return false;
                }
                totalNumber++;
                let today = new Date();
                if(today > this.books[i].returnDate)
                    return false;
            }
        }
        return true;
    }
    viewBorrowedBooks(username){
        let borrowedBooks = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].username === username &&
                Date.parse(this.books[i].returnDate) > Date.parse(new Date())) {
                    borrowedBooks.push(this.books[i]);
                }
            }
        return borrowedBooks;
    }
    takeBook (username, bookID) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookID)
                if(this.books[i].username === null) {
                this.books[i].username = username;
                this.books[i].takenDate = new Date();
                this.books[i].returnDate = new Date(Date.now() + 12096e5);
                let us = new User();
                us.books = ctrl.getUser.books;
                us.addBook(this.books[i]);
                sessionStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
            }
        }
    }
    checkUserHistoryForRenewal(userID, bookID){
        if(this.checkUserHistory(userID) === false)
            return false;
        return this.checkUserHistoryForBook(userID, bookID);
    }
    renewalBook(username, id){
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].id === id && this.books[i].username === username) {
                let today = new Date();
                this.books[i].returnDate= new Date(Date.now() + 12096e5);
                 let us = new User();
                us.books = ctrl.getUser.books;
                us.addBook(this.books[i]);
                 localStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
                 break;
            }
        }
    }
    checkUserHistoryForBook(userID, bookID){
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].bookID === bookID && this.books[i].userID === userID)
                return true;
        }
        return false;
    }
    returnBook (username, id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id && this.books[i].username === username) {
                this.books[i].username = null;
                let us = new User();
                us.books = ctrl.getUser.books;
              //  us.addBook(this.books[i]);
                us.returnBook(this.books[i]);
                sessionStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
                break;
            }
        }
    }
    searchBookByAuthor (author) {
        let booksByAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].author === author) {
                booksByAuthor.push(this.books[i]);
            }
        }
        return booksByAuthor;
    }
    searchBookByName (name) {
        let booksByName = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].name === name) {
                booksByName.push(this.books[i]);
            }
        }
        return booksByName;
    }
    searchBookByNameAndAuthor (name, author) {
        let booksByNameAndAuthor = [];
        for (let i = 0; i < this.books.length; i++) {
            if (typeof this.books[i] !== 'undefined' && this.books[i].name === name
                && this.books[i].author === author) {
                booksByNameAndAuthor.push(this.books[i]);
            }
        }
        return booksByNameAndAuthor;
    }
}
