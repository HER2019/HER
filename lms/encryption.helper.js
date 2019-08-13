class EncryptionHelper {

    static encrypt(password) {
        return  CryptoJS.AES.encrypt(password, "Secret Passphrase");
    }
}
