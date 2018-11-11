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
}
exports.User = User;
//# sourceMappingURL=usuario.js.map