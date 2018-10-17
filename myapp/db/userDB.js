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
        `);`;

    return new Promise (function (resolve, reject) {
        db_connection.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
        });
    })
};

class UserDB {

    authentication(user){
        let query = `SELECT `+
            `u.NombreUsuario, `+
            `u.Contraseña, `+
            `tp.Tipo, ` +
            `p.Cedula `+
            `FROM Usuario u inner join `+
            `Persona p on p.Cedula = u.Cedula inner join ` +
            `TipoPersona tp on tp.IdTipoPersona = p.TipoPersona ` +
            `where u.NombreUsuario = '${user.userName}'; `;


        return new Promise (function (resolve, reject) {
            db_connection.query(query, function (err, result, fields) {
                if (err) reject(err);
                // let rows = result.map((result) =>{
                //     let user = new User();
                //     //asignar valores de user, no tengo datos y me da pereza insertarlos jaja
                // });
                resolve(result);
            });
        })

    }


    // module.exports.selectLoginData = function(username) {
    // let query = `SELECT ` +
    //     `u.Cedula AS id, ` +
    //     `NombreUsuario AS username, ` +
    //     `Contrasena AS password, ` +
    //     `p.TipoPersona AS personType, ` +
    //     `tp.paginaInicio AS startPage ` +
    //     `FROM ` +
    //     `Usuario u ` +
    //     `INNER JOIN Persona p ON ` +
    //     `u.Cedula = p.Cedula ` +
    //     `INNER JOIN TipoPersona tp ON ` +
    //     `p.TipoPersona = tp.IdTipo  ` +
    //     `WHERE ` +
    //     `NombreUsuario = '${username}'; ` ;
    // console.log(query);
    //
    // return new Promise (function (resolve, reject)  {
    //         db_connection.query(query, function (err, result, fields) {
    //             if (err) reject(err);
    //             resolve(result);
    //         });
    //     })
}

