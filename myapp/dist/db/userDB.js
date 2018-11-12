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
const user_1 = require("../model/user");
const dbconnection_1 = require("./dbconnection");
class PersonDB {
    constructor() {
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .column('Cedula', 'NombreUsuario', 'Contrasena')
                .select()
                .from('Usuario')
                .map(function (row) {
                let user = new user_1.User();
                user.fromDBNames(row);
                return user;
            });
            return result;
        });
    }
}
//# sourceMappingURL=userDB.js.map