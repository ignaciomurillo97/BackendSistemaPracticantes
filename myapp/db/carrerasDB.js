const db_connection = require('./db_access.js');

class CarreraDB {

  selectCarreras(){
    var query = `SELECT ` +
    `idCarrera, ` +
    `c.idEscuela, ` +
    `NombreCarrera ` +
`FROM ` +
    `Carrera c INNER JOIN ` +
    `Escuela e ON ` +
	`e.IdEscuela = c.idEscuela`;

    return new Promise (function (resolve, reject) {
      db_connection.query(query, function (err, result, fields) {
        if (err) reject(err);
        resolve(result);
      });
    })
  }
}

module.exports = CarreraDB;
