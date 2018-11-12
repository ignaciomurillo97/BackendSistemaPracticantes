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
const careerDB_1 = require("../db/careerDB");
class CareerBusiness {
    constructor() {
    }
    selectCareers() {
        let promise;
        let careerDB = new careerDB_1.CareerDB();
        promise = careerDB.select();
        let result = promise;
        return result;
    }
    createCareer(career) {
        let careerDB = new careerDB_1.CareerDB();
        return new Promise(function (resolve, reject) {
            dbconnection_1.knex.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield careerDB.insert(career, trx);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
exports.CareerBusiness = CareerBusiness;
//# sourceMappingURL=careerBusiness.js.map