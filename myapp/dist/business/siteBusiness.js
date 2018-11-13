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
const siteDB_1 = require("../db/siteDB");
class SiteBusiness {
    constructor() {
    }
    selectSite() {
        let promise;
        let siteDB = new siteDB_1.SiteDB();
        promise = siteDB.select();
        return promise;
    }
    createSite(site) {
        let siteDB = new siteDB_1.SiteDB();
        return new Promise(function (resolve, reject) {
            dbconnection_1.knex.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield siteDB.insert(site, trx);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
exports.SiteBusiness = SiteBusiness;
//# sourceMappingURL=siteBusiness.js.map