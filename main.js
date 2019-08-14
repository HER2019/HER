'use strict';
let library = new Library();
let user = new User();

function getLibrary(){
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    let lib = JSON.parse(localStorage.getItem(pass));
    library.books = lib.books;
    library.users = lib.users;
    library.librarians = lib.librarians;
    library.recommendation = lib.recommendation;
}
 function setLibrary(lib){
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(lib));
}

function getUser(pass, key) {
    let temporaryUser = JSON.parse(key);
    user.permission = temporaryUser.permission;
    user.books = temporaryUser.books;
    user.email = temporaryUser.email;
    user.userId = temporaryUser.userID;
    user.username = temporaryUser.username;
    sessionStorage.setItem(pass, JSON.stringify(user));
}

 function setUser() {
    localStorage.setItem(sessionStorage.key(0), JSON.stringify(user));
}


window.ctrl={
     getLibrary : getLibrary(),
    "user": user,
"library": library};


