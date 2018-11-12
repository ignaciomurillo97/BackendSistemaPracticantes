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
const loginToken_1 = require("../model/loginToken");
class LoginDB {
    authenticate(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield dbconnection_1.knex
                .select('Usuario.NombreUsuario', 'Usuario.Contrasena', 'Persona.Cedula', 'Persona.TipoPersona').from('Usuario')
                .innerJoin('Persona', 'Usuario.Cedula', 'Persona.Cedula').where({
                nombreUsuario: user.username
            });
            let loginToken = new loginToken_1.LoginToken();
            if (result.length > 0) {
                loginToken.fromDBNames(result[0]);
            }
            return loginToken;
        });
    }
}
exports.LoginDB = LoginDB;
//# sourceMappingURL=loginDB.js.map