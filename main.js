'use strict';
function getLibrary(){
    if (localStorage.getItem("e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419") !== null) {
        let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
        let lib = JSON.parse(localStorage.getItem(pass));
        let library = new Library();
        library.books = lib.books;
        library.users = lib.users;
        library.librarians = lib.librarians;
        library.recommendation = lib.recommendation;
        return library;
    }
    else{
        let tmp = new Library();
        localStorage.setItem("e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419", JSON.stringify(tmp));
        return true;
    }
}
function setLibrary(lib){
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(lib));
}

function addUser(pass, key) {
    if(typeof pass === "undefined")
        return undefined;
    let temporaryUser = JSON.parse(key);
    let user = new User();
    user.permission = temporaryUser.permission;
    user.books = temporaryUser.books;
    user.email = temporaryUser.email;
    user.userId = temporaryUser.userID;
    user.username = temporaryUser.username;
    sessionStorage.setItem(pass, JSON.stringify(user));
    setUser(user);
    return user;
}

function setUser(user) {
    sessionStorage.setItem(sessionStorage.key(0), JSON.stringify(user));
}
function getUser() {
    return JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
}

window.ctrl={
    getLibrary : getLibrary(),
    "getUser": getUser(),
    "selected": null
};


