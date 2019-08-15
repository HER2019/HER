class User {
  books = [];
  constructor(permission, username, email, userId, books){
    this.email = email;
    this.permission = permission;
    this.userId = userId;
    this.username = username;
  }

  getId(){
    return this.userId;
  }

  returnBook(book) {
    for (let i = 0; i < this.books.length; i++) {
      if (book.author === this.books[i].author &&
          book.name === this.books[i].name) {
        this.books[i].username = null;
        sessionStorage.setItem(sessionStorage.key(0), JSON.stringify(this));
      }
    }
  }

  viewHistory(){
    return this.books;
  }

  addBook(book){
    this.books.push(book);
  }
  viewBorrowedBooks(){
    if(typeof this.books === "undefined")
      return undefined;
    let borrowedBooks = [];
    for (let i = 0; i < this.books.length; i++) {
      if (Date.parse(this.books[i].returnDate) > Date.parse(new Date())
      && this.books[i].username != null) {
        borrowedBooks.push(this.books[i]);
      }
    }
    return borrowedBooks;
  }
  request(num){
    switch(num){
      case 1:{
        let request = new RequestForBookIssue(this.userId);
        break;
      }
      case 2:{
        let request = new RequestForBookRenewal(this.userId);
        break;
      }
      case 3:{
        let request = new RequestForBookReturn(this.userId);
        break;
      }
      case 4:{
        let request = new RequestForHistory(this.userId);
        break;
      }
      case 5:{
        let request = new RequestForBookRecommend(this.userId);
        break;
      }
    }
  }
}
