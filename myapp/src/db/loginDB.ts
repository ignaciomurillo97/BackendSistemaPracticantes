import { knex } from '../db/dbconnection'
import {User} from "../model/user";
import {LoginToken} from "../model/loginToken";
import {log} from "util";

class LoginDB {

    private query: string;

    async authenticate(user: User): Promise<LoginToken>{
        let result = await knex
            .select(
                'Usuario.NombreUsuario',
                'Usuario.Contrasena',
                'Persona.Cedula',
                'Persona.TipoPersona'
            ).from('Usuario')
            .innerJoin(
                'Persona',
                'Usuario.Cedula',
                'Persona.Cedula'
            ).where({
                nombreUsuario: user.username
            });

        let loginToken: LoginToken = new LoginToken();
        if(result.length > 0){
            loginToken.fromDBNames(result[0]);
        }

        return loginToken;

    }
}

export { LoginDB };

