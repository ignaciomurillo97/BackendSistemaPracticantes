"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("../model/person");
const dbconnection_1 = require("./dbconnection");
class PersonDB {
    constructor() {
    }
    select() {
        let query;
        query = `
      SELECT Cedula,
       Nombre,
       SegundoNombre,
       Apellido,
       SegundoApellido,
       Genero,
      TipoPersona FROM Persona
      `;
        return new Promise(function (resolve, reject) {
            dbconnection_1.DBConnection.query(query, function (err, result, fields) {
                if (err)
                    reject();
                else {
                    let PersonArray = new Array();
                    for (var i = 0; i < result.length; i++) {
                        let obj = result[i];
                        let p = dbResultToPerson(obj);
                        PersonArray.push(p);
                    }
                    resolve(PersonArray);
                }
            });
        });
    }
}
exports.PersonDB = PersonDB;
function dbResultToPerson(dbResult) {
    let p = new person_1.Person();
    p.id = dbResult.Cedula;
    p.firstName = dbResult.Nombre;
    p.secondName = dbResult.SegundoNombre;
    p.lastName = dbResult.Apellido;
    p.secondLastName = dbResult.SegundoApellido;
    p.gender = dbResult.genero;
    p.personType = dbResult.TipoPersona;
    return p;
}
//# sourceMappingURL=personDB.js.map