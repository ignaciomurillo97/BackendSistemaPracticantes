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
const site_1 = require("../model/site");
const dbconnection_1 = require("./dbconnection");
class SiteDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('idSite', 'idUniversidad', 'NombreSite', 'Direccion')
                .select()
                .from('Sede')
                .map(function (row) {
                let site = new site_1.Site();
                site.fromDBNames(row);
                return site;
            });
            return result;
        });
    }
    insert(site, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield transaction('Sede')
                    .insert(site.toDBNames());
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.SiteDB = SiteDB;
//# sourceMappingURL=siteBusinessDB.js.map