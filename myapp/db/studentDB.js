const db_connection = require('./db_access.js');

module.exports.createStudent = function (studentInfo) {
  let query = `INSERT INTO Estudiante (` +
    `Cedula,` +
    `Universidad,` +
    `Escuela,` +
    `Sede,` +
    `Carrera,` +
    `Carne,` +
    `Estado,` +
    `Semestre` +
    `) VALUES (` +
      `'${studentInfo.id}',` +
      `'${studentInfo.university}',` +
      `'${studentInfo.school}',` +
      `'${studentInfo.site}',` +
      `'${studentInfo.career}',` +
      `'${studentInfo.studentId}',` +
      `'${studentInfo.studentStatus}',` +
      `'${studentInfo.semester}'` +
      `);`

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
