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

        return loginToken;
    }
}

export { LoginBusiness };
