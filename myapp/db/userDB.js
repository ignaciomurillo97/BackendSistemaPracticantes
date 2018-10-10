const db_connection = require('./db_access.js');
const User = require('../model/user.js');

class UserDB {

  auth(user){
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
        let rows = result.map((result) =>{
          let user = new User();
          user.identificacion = result.identificacion;
          user.userName = result.userName;
          user.password = result.password;
          return user;
          //asignar valores de user, no tengo datos y me da pereza insertarlos jaja
        });

        resolve(rows);
      });
    })

  }



}

module.exports = UserDB;
