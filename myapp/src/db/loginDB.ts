import { DBConnection } from "./dbconnection";
import {User} from "../model/user";
import {LoginToken} from "../model/loginToken";
import {log} from "util";

class LoginDB {

    private query: string;

    authenticate(user: User): Promise<LoginToken>{
        this.query = `                
        select 
            u.nombreUsuario,
            u.contrasena,
            p.tipoPersona,
            p.cedula
        from persona p
        inner join usuario u on p.cedula = u.cedula     
        where u.nombreUsuario = '${user.username}'      
        `;
        return new Promise<LoginToken>(((resolve, reject) => {
            DBConnection.query(this.query, (err, results, fields) => {

                let loginToken: LoginToken = new LoginToken();

                if(err) reject(err);

                else if(results.length > 0){

                    loginToken.errorMessage = '';
                    loginToken.password = results[0]['contrasena'];
                    loginToken.personType = results[0]['tipoPersona'];
                    loginToken.username = results[0]['nombreUsuario'];
                    loginToken.id = results[0]['cedula'];

                }

                else {
                    loginToken.errorMessage = 'No existe el usuario';
                }
                resolve(loginToken);
            })
        }))
    }
}

export { LoginDB };

