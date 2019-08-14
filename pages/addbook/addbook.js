function registerBook(){
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let id = document.getElementById("id").value;
    if(typeof name !== "undefined" && typeof author !== "undefined" && typeof id !== "undefined") {
        let book = new Book(id, name, author);
        ctrl.library.registerBook(book);
    }
}
