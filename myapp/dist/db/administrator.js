"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const administrator_1 = require("../model/administrator");
const dbconnection_1 = require("./dbconnection");
class AdministratorDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('Cedula', 'Nombre', 'SegundoNombre', 'Apellido', 'SegundoApellido', 'Genero', 'TipoPersona').where({
                TipoPersona: 3
            })
                .select()
                .from('Persona')
                .map(function (row) {
                return dbResultToPerson(row);
            });
            return result;
        });
    }
}
function dbResultToPerson(dbResult) {
    let p = new administrator_1.Administrator();
    p.id = dbResult.Cedula;
    p.firstName = dbResult.Nombre;
    p.secondName = dbResult.SegundoNombre;
    p.lastName = dbResult.Apellido;
    p.secondLastName = dbResult.SegundoApellido;
    p.gender = dbResult.genero;
    p.personType = dbResult.TipoPersona;
    return p;
}
//# sourceMappingURL=administrator.js.map