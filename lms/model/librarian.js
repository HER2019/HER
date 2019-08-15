class Librarian {
    addRequest(request){
        this.parseRequest(request);
    }
    constructor(librarianId, firstName, lastName, libary) {
        this.librarianId = librarianId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.libary = libary;
    }
    parseRequest(request){
        if(request[type]===1)
            return this.responseForBookIssue (request[userId], request[bookID]);
        else if (request[type]===2)
            return this.responseForBookRenewal (request[userId], request[bookID]);
        else if (request[type]===3)
            return this.responseForBookReturn (request[userId], request[bookID]);
        else if (request[type]===5)
            return this.responseForBookRecommend (new
            Recommendation(request[userId], request[bookID], request[recommendation]));
    }
    responseForBookRecommend (recommendation) {
        if (this.libary.findRecommendation(recommendation) === true){
            throw "recommendation already exists";
        }
        this.libary.addRecommendation(recommendation);
        return true;
    }
    responseForBookIssue (username, bookID) {
   /*     if(this.libary.checkUserHistory(userID) === false){
            throw "cant take book";
        }
        if(this.libary.checkBookAvailability(bookID) === false){
            throw new Error("no book in library");
        }*/
        this.libary.takeBook(username, bookID);
        return true;
    }
    responseForBookRenewal(username, bookID) {
        if(this.libary.checkUserHistoryForRenewal(username, bookID) === false){
            throw "cant Renewal book";
        }
        this.libary.renewalBook(username, bookID);
        return true;
    }
    responseForBookReturn (userID, bookID) {
        let diff = this.libary.checkUserHistoryForBook(userID);
        if(diff > 0){
            throw `pay ${diff}`;
        }
        this.libary.returnBook(userID, bookID);
        return true;
    }
    addBook(id, name, author){
        this.libary.registerBook(new Book(id, name, author));
    }
}
