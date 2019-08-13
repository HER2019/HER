function register(){

	let name = document.getElementById("name").value;
	let lastName = document.getElementById("email").value;
	let password = document.getElementById("pass").value;
	let rePass = document.getElementById("re_pass").value;
//	if (pass != )
	let user = new User(1, name, email);
	let encryptPass = EncryptionHelper.encrypt(password);
	localStorage.setItem(encryptPass, user); 
}