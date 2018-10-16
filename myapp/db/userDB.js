const db_connection = require('./db_access.js');
const User = require('../model/user.js');
const bcrypt = require('bcrypt');

module.exports.createUser = function (user) {
  let query = `INSERT INTO Usuario (` +
    `Cedula,` +
    `NombreUsuario,` +
    `Contrasena` +
  `) VALUES (` +
    `'${user.id}',` +
    `'${user.username}',` +
    `'${bcrypt.hashSync(user.password, 10)}'` +
  `);`

  return new Promise (function (resolve, reject) {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

module.exports.selectLoginData = function(username) {
  let query = `SELECT ` +
    `u.Cedula AS id, ` +
    `NombreUsuario AS username, ` +
    `Contrasena AS password, ` +
    `p.TipoPersona AS personType, ` +
    `tp.paginaInicio AS startPage ` +
  `FROM ` +
    `Usuario u ` +
  `INNER JOIN Persona p ON ` +
    `u.Cedula = p.Cedula ` +
  `INNER JOIN TipoPersona tp ON ` +
    `p.TipoPersona = tp.IdTipo  ` +
  `WHERE ` +
    `NombreUsuario = '${username}'; ` ;
  console.log(query);

  return new Promise (function (resolve, reject)  {
    db_connection.query(query, function (err, result, fields) {
      if (err) reject(err);
      resolve(result);
    });
  })
}

