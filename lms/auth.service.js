class AuthService {

    constructor(umService, permissionService) {
        this.umService = umService;
        this.permissionService = permissionService;
    }

    login(username, password) {
        let user = this.umService.getUserByPassword(password);

        if(user == null) {
            throw new Error(`incorrect username or password`);
        }

        else{
            let userPermissions = this.permissionService.getPermissions(username);

            sessionStorage.setItem(userId, {
                user: user,
                permissions: userPermissions
            })
        }

        return user;
    }

    logout(username){
        sessionStorage.removeItem(username);
    }

    isLogined(username) {
        return sessionStorage.getItem(username) == true;
    }
}
