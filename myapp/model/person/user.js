const db_connection = require('../db_access.js');

exports.autenticar = function (nombreUsuario, contrasena) {
   var query = `SELECT `+
   `u.NombreUsuario, `+
   `u.Contraseña, `+
   `tp.Tipo, ` +
   `p.Cedula `+
   `FROM Usuario u inner join `+
   `Persona p on p.Cedula = u.Cedula inner join ` +
   `TipoPersona tp on tp.IdTipoPersona = p.TipoPersona ` +
   `where u.NombreUsuario = '${nombreUsuario}'; `;


   return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
         if (err) reject(err);
         resolve(result);
      });
   })
};
