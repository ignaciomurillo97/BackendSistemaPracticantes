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
const dbconnection_1 = require("../db/dbconnection");
const schoolDB_1 = require("../db/schoolDB");
class SchoolBusiness {
    constructor() {
    }
    selectSchools() {
        let promise;
        let schoolDB = new schoolDB_1.SchoolDB();
        promise = schoolDB.select();
        return promise;
    }
    createSchool(school) {
        let schoolDB = new schoolDB_1.SchoolDB();
        return new Promise(function (resolve, reject) {
            dbconnection_1.knex.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield schoolDB.insert(school, trx);
                    resolve();
                }
                catch (err) {
                    console.error(err);
                    reject(err);
                }
            }));
        });
    }
}
exports.SchoolBusiness = SchoolBusiness;
//# sourceMappingURL=schoolBusiness.js.map