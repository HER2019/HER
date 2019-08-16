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
    if(book.username == null) {
        let para = `<button class="submitButton" type="button" id="Take" onclick="takeBook()">
                Take Book</button>`;
        let element = document.getElementById("btn-group");
        element.innerHTML = para;
    }else{
        let para = `<button class="submitButton" type="button" id="Renewal" onclick="renewalBook()">
                Renewal Book</button>
            <button class="submitButton" type="button" id="Return" onclick="returnBook()">
                Return Book</button>`;
        let element = document.getElementById("btn-group");
        element.innerHTML = para;
    }
}
function takeBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
    lib.takeBook(ctrl.getUser.username, book.id);
    let tmp = ctrl.getLibrary;
    tmp.books= lib.books;
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(tmp));
}
function  recommendBook() {
    let recommendation = document.getElementById("recommendation").value;
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
    let book = ctrl.getLibrary.findSelectedBook();
    lib.addRecommendation(new Recommendation(ctrl.getUser.username, book.id,recommendation));
    let tmp = ctrl.getLibrary;
    tmp.recommendation= lib.recommendation;
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(tmp));
    closeRecommendBook();
}
function  openRecommendBook(){
    let para = `<input class="inputRec" type="text" name="your_name" id="recommendation" placeholder="Your Name">
            <button class="doneButton" type="button" onclick="recommendBook()">
                Add Recommendation</button>`;
    let element = document.getElementById("Recommend");
    element.innerHTML = para;
}
function  closeRecommendBook(){
    let para = ``;
    let element = document.getElementById("Recommend");
    element.innerHTML = para;
}
function renewalBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
     (lib.renewalBook(ctrl.getUser.username, book.id));
    let tmp = ctrl.getLibrary;
    tmp.books= lib.books;
   // localStorage.setItem(sessionStorage.key(0), JSON.stringify(us));
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(tmp));
}
function returnBook(){
    let book = ctrl.getLibrary.findSelectedBook();
    let lib = new Library();
    lib.books = ctrl.getLibrary.books;
 //   let us = new User();
  //  us.books = ctrl.getUser.books;
    lib.returnBook(book.username, book.id);
    let tmp = ctrl.getLibrary;
    tmp.books= lib.books;
    let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
    localStorage.setItem(pass, JSON.stringify(tmp));
}

