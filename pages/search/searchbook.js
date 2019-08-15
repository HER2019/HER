function updateResult(query) {
    let library = ctrl.getLibrary;
    let names = library.getBooks();
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = "ID";
    cell2.innerHTML = "Name";
    cell3.innerHTML = "Author";
    cell4.innerHTML = "Availability";
    let k = 1;
    for (let i = 0 ; i < names.length; i++) {
        if(names[i].name.toLowerCase().includes(query.toLowerCase()) ||
            names[i].author.toLowerCase().includes(query.toLowerCase())) {
            row = table.insertRow(k);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell4 = row.insertCell(3);
            cell1.innerHTML = `${names[i].id}`;
            cell2.innerHTML = `${names[i].name}`;
            cell3.innerHTML = `${names[i].author}`;
            if (names[i].username === null){
                cell4.innerHTML = "True";
            }else{
                cell4.innerHTML = "False";
            }
            k++;
            row.addEventListener("click", (
                function(){
                    ctrl.getLibrary.unselectBookById();
                    ctrl.getLibrary.books[i].selected = 1;
                    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
                    localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
                    window.location.pathname = 'HER/pages/search/book.html';
                }));
        }
    }
}
function openBook()
{
    let book = ctrl.getLibrary.findSelectedBook();
    let element = document.getElementById("text");
    let para = document.createElement("h2");
    let node = document.createTextNode(book.name);
    para.appendChild(node);
    element.appendChild(para);
    let para1 = document.createElement("p");
    let node1 = document.createTextNode(book.author);
    para1.appendChild(node1);
    element.appendChild(para1);
    let para2 = document.createElement("p");
    let node2 = document.createTextNode(book.id);
    para2.appendChild(node2);
    element.appendChild(para2);
}
function takeBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
    (lib.takeBook(ctrl.getUser.username, book.id));
 //   localStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
    ctrl.getLibrary.books = lib.books;
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
}
function  recommendBook(){
    //TODO
   // library.responseForBookRecommend();
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
}
function renewalBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
    // let us = new User();
    // us.books = ctrl.getUser.books;
     (lib.renewalBook(ctrl.getUser.username, book.id));
   // localStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
}
function returnBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
 //   let us = new User();
  //  us.books = ctrl.getUser.books;
    lib.returnBook(book.username, book.id);
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
}

