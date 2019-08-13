'use strict';

function register(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let rePass = document.getElementById("re_pass").value;
  if (password != rePass){
    alert('Wrong password');
    return;
  }
//  if (pass != )
    
    let encryptPass = EncryptionHelper.encrypt(password);
  let maxId = 0;
  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    if (key == EncryptionHelper.encrypt(password)){
      alert('This password is already available');
      return;
    }
    maxId = Math.max(maxId, JSON.parse(localStorage.getItem(key)).id);
  }
  let user = new User(1, name, email);
  user.userId = maxId + 1;
  let jsonUser = {
    email: user.email,
    username: user.username,
    permission: 1,
    id: user.userId,
    books: []
  };
  var serialObj = JSON.stringify(jsonUser);
  localStorage.setItem(encryptPass, serialObj);
  window.location = 'signin.html';
}
function open(){
  let username = document.getElementById("your_name").value;
  let password = document.getElementById("your_pass").value;
  let pass = EncryptionHelper.encrypt(password);
  if (pass == null){
    alert("Wrong password or username");
    return;
  }else{
    let name = JSON.parse(localStorage.getItem(pass)).username;
    if (name != username){
      alert("Wrong password or username");
      return;
    }
  }
  window.location = 'HER/index.html';
}