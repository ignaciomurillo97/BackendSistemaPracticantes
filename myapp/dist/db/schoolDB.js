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
const school_1 = require("../model/school");
const dbconnection_1 = require("./dbconnection");
class SchoolDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('IdEscuela', 'IdUniversidad', 'NombreEscuela')
                .select()
                .from('Escuela')
                .map(function (row) {
                let school = new school_1.School();
                school.fromDBNames(row);
                return school;
            });
            return result;
        });
    }
    insert(school, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield transaction('Escuela')
                    .insert(school.toDBNames());
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.SchoolDB = SchoolDB;
//# sourceMappingURL=schoolDB.js.map