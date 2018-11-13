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
const semester_1 = require("../model/semester");
const dbconnection_1 = require("./dbconnection");
class SemesterDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield dbconnection_1.knex
                    .column('IdSemestre', 'Ano', 'NumeroSemestre')
                    .select()
                    .from('Semestre')
                    .map(function (row) {
                    let semester = new semester_1.Semester();
                    semester.fromDBNames(row);
                    return semester;
                });
            }
            catch (err) {
                console.error(err);
                throw err;
            }
            return result;
        });
    }
    insert(semester, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield transaction('Semestre')
                    .insert(semester.toDBNames());
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.SemesterDB = SemesterDB;
//# sourceMappingURL=semesterDB.js.map