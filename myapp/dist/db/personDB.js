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
const person_1 = require("../model/person");
const dbconnection_1 = require("./dbconnection");
class PersonDB {
    constructor() {
    }
    selectType(personType) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('Cedula', 'Nombre', 'SegundoNombre', 'Apellido', 'SegundoApellido', 'Genero', 'TipoPersona').where({
                TipoPersona: personType
            })
                .select()
                .from('Persona');
            result.map(function (row) {
                let p = new person_1.Person();
                p.fromDBNames(row);
                return p;
            });
            return result;
        });
    }
    update(person, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbconnection_1.knex
                    .where({
                    Cedula: person.id,
                    TipoPersona: person.personType
                })
                    .update(person.toDBNames());
            }
            catch (err) {
                throw err;
            }
        });
    }
    insert(person, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield transaction('Persona')
                    .insert(person.toDBNames());
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.PersonDB = PersonDB;
//# sourceMappingURL=personDB.js.map