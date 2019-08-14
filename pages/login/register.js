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
    if (key != "e436137c3fd49ebb2a50f981f991dfdbf4a76f31ada645a20dd3c382190cf419")
      maxId = Math.max(maxId, JSON.parse(localStorage.getItem(key)).id);
  }
  let user = new User(1, name, email);
  user.userId = maxId + 1;
  let serialObj = JSON.stringify(user);
  localStorage.setItem(encryptPass, serialObj);
  window.location.pathname = 'HER/pages/login/signin.html';
}
function login(){
  let username = document.getElementById("your_name").value;
  let password = document.getElementById("your_pass").value;
  let pass = EncryptionHelper.encrypt(password);
  let key = localStorage.getItem(pass);
  if (key == null){
    alert("Wrong password or username");
    return;
  }else{
    let name = JSON.parse(key).username;
    if (name !== username){
      alert("Wrong password or username");
      return;
    }
  }
  getUser(pass, key);
  window.location.pathname = 'HER';
}
function logout() {
  setUser();
}
