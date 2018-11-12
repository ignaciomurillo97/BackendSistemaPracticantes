"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginToken {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get personType() {
        return this._personType;
    }
    set personType(value) {
        this._personType = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
    }
    constructor() {
    }
    fromDBNames(dbName) {
        this.id = dbName.Cedula;
        this.personType = dbName.TipoPersona;
        this.username = dbName.NombreUsuario;
        this.password = dbName.Contrasena;
    }
}
exports.LoginToken = LoginToken;
//# sourceMappingURL=loginToken.js.map