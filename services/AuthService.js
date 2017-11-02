export default class AuthService {
    static authLogin = (username, password) => {
        if(username === 'username' && password === 'password'){
            return true;
        }
        else{
            return false;
        }
    }
}