"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TelephoneNumber {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get telephoneNumber() {
        return this._telephoneNumber;
    }
    set telephoneNumber(value) {
        this._telephoneNumber = value;
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
        if (dbResult.IdTelefono != undefined) {
            this._id = dbResult.IdTelefono;
        }
        else {
            this._id = -1;
        }
        if (dbResult.idPersona != undefined) {
            this._personId = dbResult.idPersona;
        }
        this._telephoneNumber = dbResult.Telefono;
    }
    toDBNames() {
        let obj = {
            Telefono: this._telephoneNumber,
            idPersona: this._personId,
        };
        if (this._id != -1) {
            obj.IdTelefono = this._id;
        }
        return obj;
    }
}
exports.TelephoneNumber = TelephoneNumber;
//# sourceMappingURL=telephoneNumber.js.map