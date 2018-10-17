const db_connection = require('./db_access.js');

module.exports.selectCoordinators = function (){
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


module.exports.createEvent = function (eventData) {
  let query = "INSERT INTO Evento (idEvento, Fecha, HoraInicio, HoraFin, TipoEvento, Foto, Nombre) VALUES ('', ?, ?, ?, ?, ?, ?)";
  return new Promise (function (resolve, reject) {
    db_connection.query(query, [eventData.date, eventData.startTime, eventData.endTime, eventData.type, eventData.photoPath, eventData.name], function(err, result, fields) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve();
      }
    });
  })

}
