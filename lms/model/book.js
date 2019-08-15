class Book{
    constructor(id, name, author, takenDate, returnDate, username)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.takenDate = takenDate;
        this.returnDate = returnDate;
        if(typeof username === "undefined")
            this.username = null;
        this.selected = 0;
    }
    get bookID() {
        return this.id;
    }
    getBookID() {
        return this.id;
    }
    set bookName(Name) {
        this.name = Name;
    }
    get userName() {
        return this.userId;
    }
    set userName(username) {
        this.username = username;
    }
    get bookName() {
        return this.name;
    }
    get bookAuthor() {
        return this.author;
    }


}
