"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get username() {
        return this.username;
    }
    set username(value) {
        this._username = value;
    }
    get passwordHash() {
        return this.passwordHash;
    }
    set passwordHash(value) {
        this._passwordHash = value;
    }
    constructor() {
    }
    fromDBNames(dbResult) {
        this.id = dbResult.Cedula;
        this.username = dbResult.NombreUsuario;
        this.passwordHash = dbResult.Contrasena;
    }
    toDBNames() {
        return {
            Cedula: this.id,
            NombreUsuario: this.username,
            Contrasena: this.passwordHash,
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map