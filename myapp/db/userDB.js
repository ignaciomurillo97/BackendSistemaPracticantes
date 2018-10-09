const db_connection = require('./db_access.js');
const User = require('../model/user.js');

exports.autenticar = function (nombreUsuario, contrasena) {


};

class UserDB {

    getUser(user){
        var query = `SELECT `+
            `u.NombreUsuario, `+
            `u.Contraseña, `+
            `tp.Tipo, ` +
            `p.Cedula `+
            `FROM Usuario u inner join `+
            `Persona p on p.Cedula = u.Cedula inner join ` +
            `TipoPersona tp on tp.IdTipoPersona = p.TipoPersona ` +
            `where u.NombreUsuario = '${user.userName}'; `;


        return new Promise (function (resolve, reject) {
            db_connection.query(query, function (err, result, fields) {
                if (err) reject(err);
                console.log(result);

                resolve(result);
            });
        })

    }



}

module.exports = UserDB;
