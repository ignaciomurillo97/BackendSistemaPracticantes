const db_connection = require('./db_access.js');
const Person = require('../model/person.js');

module.exports.createPerson = function (person) {
  let query = `INSERT INTO Persona (` +
  `Cedula,` +
  `Nombre,` +
  `SegundoNombre,` +
  `Apellido,` +
  `SegundoApellido,` +
  `Genero,` +
  `TipoPersona` +
`) VALUES (` +
  `'${person.id}',` +
  `'${person.name}',` +
  `'${person.secondName}',` +
  `'${person.lastName}',` +
  `'${person.secondLastName}',` +
  `${person.gender},` +
  `${person.type}` +
`)`;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

module.exports.selectPersonByType = function (type) {
  let query = "SELECT Cedula, Nombre, SegundoNombre, Apellido, SegundoApellido, Genero, TipoPersona FROM Persona WHERE TipoPersona = ?";

  return new Promise (function (resolve, reject) {
    db_connection.query(query, [type], function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

module.exports.addEmails = function (id, emailList) {
  let query = `INSERT INTO DireccionCorreoElectronico (` +
    `CorreoElectronico,` +
    `idPersona` +
    `) VALUES`;
  for (i = 0; i < emailList.length; i++) {
    query += `(` +
      `'${emailList[i]}',` +
      `'${id}'` +
      `)`;
    if (i != emailList.length - 1) query += ',';
  }
  query += `;`;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

module.exports.addPhoneNumbers = function (id, phoneList) {
  let query = `INSERT INTO NumeroTelefono (` +
    `Telefono,` +
    `idPersona` +
    `) VALUES`;
  for (i = 0; i < phoneList.length; i++) {
    query += `(` +
      `'${phoneList[i]}',` +
      `'${id}'` +
      `)`;
    if (i != phoneList.length - 1) query += ',';
  }
  query += `;`;

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}
