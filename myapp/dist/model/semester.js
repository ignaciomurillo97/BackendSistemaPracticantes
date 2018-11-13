"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Semester {
    get id() {
        return this.id;
    }
    set id(value) {
        this._id = value;
    }
    get year() {
        return this.year;
    }
    set year(value) {
        this._year = value;
    }
    get number() {
        return this.number;
    }
    set number(value) {
        this._number = value;
    }
    constructor() {
    }
    fromDBNames(dbNames) {
        if (dbNames.IdSemestre != undefined) {
            this._id = dbNames.IdSemestre;
        }
        else {
            this._id = -1;
        }
        this._year = dbNames.Ano;
        this._number = dbNames.NumeroSemestre;
    }
    toDBNames() {
        let obj = {
            Ano: this._year,
            NumeroSemestre: this._number
        };
        if (this._id != -1) {
            obj.IdSemestre = this._id;
        }
        return obj;
    }
}
exports.Semester = Semester;
//# sourceMappingURL=semester.js.map