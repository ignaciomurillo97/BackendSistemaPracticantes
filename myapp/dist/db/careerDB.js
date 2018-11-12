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
const career_1 = require("../model/career");
const dbconnection_1 = require("./dbconnection");
class CareerDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('idCarrera', 'idEscuela', 'NombreCarrera')
                .select()
                .from('Carrera')
                .map(function (row) {
                let career = new career_1.Career();
                career.fromDBNames(row);
                return career;
            });
            return result;
        });
    }
    insert(career, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield transaction('Carrera')
                    .insert(career.toDBNames());
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.CareerDB = CareerDB;
//# sourceMappingURL=careerDB.js.map