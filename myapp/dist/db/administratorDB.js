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
        this._tipe = 3;
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('Cedula', 'Nombre', 'SegundoNombre', 'Apellido', 'SegundoApellido', 'Genero', 'TipoPersona').where({
                TipoPersona: this._tipe
            })
                .select()
                .from('Persona');
            result.map(function (row) {
                let admin = new administrator_1.Administrator();
                admin.fromDBResult(row);
                return admin;
            });
            return result;
        });
    }
    update(admin, transaction) {
        try {
            dbconnection_1.knex
                .where({
                Cedula: admin.id,
                TipoPersona: this._tipe
            })
                .update(admin.toDBNames())
                .transacting(transaction);
        }
        catch (err) {
            throw err;
        }
    }
    insert(admin, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbconnection_1.knex('Persona')
                    .insert(admin.toDBNames());
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.AdministratorDB = AdministratorDB;
//# sourceMappingURL=administratorDB.js.map