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
const coordinator_1 = require("../model/coordinator");
const personDB_1 = require("../db/personDB");
const dbconnection_1 = require("./dbconnection");
class CoordinatorDB extends personDB_1.PersonDB {
    constructor() {
        super();
        this._personType = 4;
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('Persona.Cedula', 'Nombre', 'SegundoNombre', 'Apellido', 'SegundoApellido', 'Genero', 'TipoPersona', 'idCarrera', 'idSede').where({
                TipoPersona: this._personType
            })
                .select()
                .from('Persona')
                .innerJoin('CoordinadorPractica', 'Persona.Cedula', 'CoordinadorPractica.Cedula');
            result.map(function (row) {
                let c = new coordinator_1.Coordinator();
                c.fromDBNames(row);
                return c;
            });
            return result;
        });
    }
    update(coordinator, transaction) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("update").call(this, coordinator, transaction);
        });
    }
    insert(coordinator, transaction) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("insert").call(this, coordinator, transaction);
            try {
                yield transaction('CoordinadorPractica')
                    .insert(coordinator.toDBCoordinatorNames());
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.CoordinatorDB = CoordinatorDB;
//# sourceMappingURL=coordinatorDB.js.map