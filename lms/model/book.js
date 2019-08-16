class Book{
    recommendation = [];
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
    addRecommendation (recommendation){
        this.recommendation.push(recommendation);
    }
    findRecommendation(recommendation){
        for (let i = 0; i < this.recommendation.length; i++) {
            if (typeof this.recommendation[i] !== 'undefined' &&
                this.recommendation[i].UserID === recommendation.UserID) {
                return true;
            }
        }
        return false;
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
