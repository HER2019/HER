class User {
  static cnt = 0;
  constructor(permission, username, email, books){
    this.email = email;
    this.permission = permission;
    User.cnt++;
    this.userId = User.cnt;
    this.books = books;
    this.username = username;
  }

  getId(){
    return this.userId;
  }

  viewHistory(){
    return this.books;
  }
  viewBorrowedBooks(){
    let borrowedBooks=[];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].returnDate > new Date()) {
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
