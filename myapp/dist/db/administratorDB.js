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
const personDB_1 = require("../db/personDB");
class AdministratorDB extends personDB_1.PersonDB {
    constructor() {
        super();
        this._personType = 3;
    }
    select() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            return _super("selectType").call(this, this._personType);
        });
    }
    update(admin, transaction) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("update").call(this, admin, transaction);
        });
    }
    insert(admin, transaction) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("insert").call(this, admin, transaction);
        });
    }
}
exports.AdministratorDB = AdministratorDB;
//# sourceMappingURL=administratorDB.js.map