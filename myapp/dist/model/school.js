"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class School {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get universityId() {
        return this._universityId;
    }
    set universityId(value) {
        this._universityId = value;
    }
    constructor() {
    }
    fromDBNames(dbNames) {
        if (dbNames.IdEscuela != undefined) {
            this._id = dbNames.IdEscuela;
        }
        else {
            this._id = -1;
        }
        this._name = dbNames.NombreEscuela;
        this._universityId = dbNames.IdUniversidad;
    }
    toDBNames() {
        let obj = {
            NombreEscuela: this._name,
            IdUniversidad: this._universityId
        };
        if (this._id != -1) {
            obj.IdEscuela = this._id;
        }
        return obj;
    }
}
exports.School = School;
//# sourceMappingURL=school.js.map