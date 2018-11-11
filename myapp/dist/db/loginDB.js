"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = require("./dbconnection");
const loginToken_1 = require("../model/loginToken");
class LoginDB {
    authenticate(user) {
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
        return new Promise(((resolve, reject) => {
            dbconnection_1.DBConnection.query(this.query, (err, results, fields) => {
                let loginToken = new loginToken_1.LoginToken();
                if (err)
                    reject(err);
                else if (results.length > 0) {
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
            });
        }));
    }
}
exports.LoginDB = LoginDB;
//# sourceMappingURL=loginDB.js.map