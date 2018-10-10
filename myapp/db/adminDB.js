const db_connection = require('./db_access.js');

class AdminDB {

  selectAdmins(){
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
    `TipoPersona = 3 `;


    return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
        if (err) reject(err);
        resolve(result);
      });
    })
  }

  selectSemesters(){
    var query = `SELECT ` +
      `IdSemestre, ` +
      `Ano, ` +
      `NumeroSemestre ` +
  `FROM ` +
      `Semestre`;



    return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
        if (err) reject(err);
        resolve(result);
      });
    })
  }
}


module.exports = AdminDB;
