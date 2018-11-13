import bcriptjs = require("bcryptjs");
import {User} from "../model/user";
import {LoginToken} from "../model/loginToken";
import {LoginDB} from "../db/loginDB";




class LoginBusiness {

    private loginDB: LoginDB;

    constructor(){
        this.loginDB = new LoginDB();
    }

    async authenticate(user: User): Promise<LoginToken>{

        let loginToken: LoginToken = await this.loginDB.authenticate(user);
        //in case the user doesn't exist or the password is incorrect
        if(Object.keys(loginToken).length === 0 || !bcriptjs.compareSync(user.passwordHash, loginToken.password)){
            loginToken.errorMessage = 'El usuario o contraseña son incorrectos'
        }

        return loginToken;
    }

    // async registerStudent()
}

export { LoginBusiness };
