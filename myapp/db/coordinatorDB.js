const db_connection = require('./db_access.js');

module.exports.selectCoordinators = function (){
    var query = `SELECT ` + `Cedula, ` +
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

module.exports.createActivity = function(activity, eventId) {
  let query = "INSERT INTO `ActividadesPorEvento` (`idActividadesPorEvento`, `HoraInicio`, `HoraFin`, `Descripcion`, `Empresa`, `Evento`) VALUES (NULL,?, ?, '', NULL, ?);";
  return new Promise (function (resolve, reject) {
    db_connection.query(query, [activity.startTime, activity.endTime, eventId], function(err, result, fields) {
      if (err) {
        console.log(err);
        reject();
      } else {
        resolve();
      }
    });
  })
}

module.exports.createEvent = async function (event, activities) {
  let query = "INSERT INTO Evento (idEvento, Fecha, HoraInicio, HoraFin, TipoEvento, Foto, Nombre) VALUES ('', ?, ?, ?, ?, ?, ?)";
  return new Promise (function (resolve, reject) {
    db_connection.query(query, [event.date, event.startTime, event.endTime, event.type, event.photoPath, event.name], function(err, result, fields) {
      if (err) {
        console.log(err);
        reject();
      } else {
        console.log(activities); 
        activities.forEach((activity) => {
          module.exports.createActivity(activity, result.insertId);
        })
        resolve();
      }
    });
  })
}
