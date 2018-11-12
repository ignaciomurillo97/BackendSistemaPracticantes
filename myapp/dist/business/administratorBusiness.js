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
const administratorDB_1 = require("../db/administratorDB");
const userDB_1 = require("../db/userDB");
const emailDB_1 = require("../db/emailDB");
const telephoneDB_1 = require("../db/telephoneDB");
class AdministratorBusiness {
    constructor() {
    }
    selectAdministrator() {
        let promise;
        let personDB = new administratorDB_1.AdministratorDB();
        promise = personDB.select();
        let result = promise;
        return result;
    }
    createAdministrator(admin, user, emailList, telephoneList) {
        return __awaiter(this, void 0, void 0, function* () {
            let adminDB = new administratorDB_1.AdministratorDB();
            let userDB = new userDB_1.UserDB();
            let emailDB = new emailDB_1.EmailDB();
            let telephoneDB = new telephoneDB_1.TelephoneNumberDB();
            return new Promise(function (resolve, reject) {
                dbconnection_1.knex.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        // Crear Persona
                        yield adminDB.insert(admin, trx);
                        // Crear Usuario
                        yield userDB.insert(user, trx);
                        // 
                        yield emailDB.insert(emailList, trx);
                        // Correos
                        yield telephoneDB.insert(telephoneList, trx);
                        resolve();
                    }
                    catch (err) {
                        reject(err);
                    }
                }));
            });
        });
    }
}
exports.AdministratorBusiness = AdministratorBusiness;
//# sourceMappingURL=administratorBusiness.js.map