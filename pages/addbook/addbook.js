function registerBook(){
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let id = document.getElementById("id").value;
    if(typeof name !== "undefined" && typeof author !== "undefined" && typeof id !== "undefined") {
        let book = new Book(id, name, author);
        ctrl.getLibrary.registerBook(book);

        let pass = "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419";
        localStorage.setItem(pass, JSON.stringify(ctrl.getLibrary));
    }
}

