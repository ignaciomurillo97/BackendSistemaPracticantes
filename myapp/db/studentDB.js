const db_connection = require('./db_access.js');

class StudentDB {

    createStudent(student) {
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
            `'${student.id}',` +
            `'${student.university}',` +
            `'${student.school}',` +
            `'${student.site}',` +
            `'${student.career}',` +
            `'${student.card}',` +
            `'${student.state}',` +
            `'${student.semester}'` +
            `);`;

        return new Promise (function (resolve, reject) {
            db_connection.query(query, function (err, result, fields) {
                if (err) reject(err);
                resolve(result);
            });
        })

    }

}

module.exports.selectStudent = function (state) {
  let query = 'SELECT p.Cedula, Nombre, SegundoNombre, Apellido, SegundoApellido, Genero, TipoPersona FROM Persona p INNER JOIN Estudiante e on p.Cedula = e.Cedula WHERE e.Estado = ?';


  return new Promise (function (resolve, reject) {
    db_connection.query(query, [state], function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
