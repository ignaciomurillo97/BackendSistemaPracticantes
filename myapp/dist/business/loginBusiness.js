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
const loginDB_1 = require("../db/loginDB");
class LoginBusiness {
    constructor() {
        this.loginDB = new loginDB_1.LoginDB();
    }
    authenticate(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginToken = yield this.loginDB.authenticate(user);
            return loginToken;
        });
    }
}
exports.LoginBusiness = LoginBusiness;
//# sourceMappingURL=loginBusiness.js.map