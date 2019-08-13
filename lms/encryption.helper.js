class EncryptionHelper {

    static encrypt(password) {
        return  CryptoJS.SHA256(password).toString();
    }
}
