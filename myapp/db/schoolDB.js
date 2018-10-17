const db_connection = require('./db_access.js');

module.exports.selectSchools = function(){
  var query = `SELECT ` +
    `IdEscuela, ` +
    `e.IdUniversidad, ` +
    `NombreEscuela, ` +
    `u.NombreUniversidad ` +
    `FROM ` +
    `Escuela e INNER JOIN ` +
    `Universidad u ON ` +
    `e.IdUniversidad = u.idUniversidad`


  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
