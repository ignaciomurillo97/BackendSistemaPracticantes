const db_connection = require('./db_access.js');

class CoordinadoresDB {

  selectCoordinadores(){
    var query = `SELECT ` +
      `Cedula, ` +
      `Nombre, ` +
      `SegundoNombre, ` +
      `Apellido, ` +
      `SegundoApellido, ` +
      `Genero, ` +
      `TipoPersona ` +
  `FROM ` +
      `Persona ` +
  `WHERE ` +
    `TipoPersona = 4 `;

    return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
        if (err) reject(err);
        resolve(result);
      });
    })
  }
}

module.exports = CoordinadoresDB;
