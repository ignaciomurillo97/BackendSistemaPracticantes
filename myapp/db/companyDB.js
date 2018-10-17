const db_connection = require('./db_access.js');


module.exports.selectStudent = function (state) {
  let query = 'SELECT p.Cedula, Nombre, SegundoNombre, Apellido, SegundoApellido, Genero, TipoPersona FROM Persona p INNER JOIN Estudiante e on p.Cedula = e.Cedula WHERE e.Estado = ?';


  return new Promise (function (resolve, reject) {
    db_connection.query(query, [state], function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
