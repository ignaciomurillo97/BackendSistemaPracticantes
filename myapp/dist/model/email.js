"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get personId() {
        return this._personId;
    }
    set personId(value) {
        this._personId = value;
    }
    constructor() {
    }
    fromDBNames(dbResult) {
        if (dbResult.IdCorreoElectronico != undefined) {
            this._id = dbResult.IdCorreoElectronico;
        }
        else {
            this._id = -1;
        }
        if (dbResult.idPersona != undefined) {
            this._personId = dbResult.idPersona;
        }
        else {
            this._personId = -1;
        }
        this._email = dbResult.CorreoElectronico;
    }
    toDBNames() {
        let obj = {
            CorreoElectronico: this.email,
            idPersona: this.personId
        };
        if (this._id != -1) {
            obj.IdCorreoElectronico = this._id;
        }
        return obj;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map