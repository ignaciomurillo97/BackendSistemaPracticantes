"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Career {
    get id() {
        return this._id;
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
    get schoolId() {
        return this._schoolId;
    }
    set schoolId(value) {
        this._schoolId = value;
    }
    constructor() {
    }
    fromDBNames(dbResult) {
        if (dbResult.idCarrera != undefined) {
            this.id = dbResult.idCarrera;
        }
        else {
            this.id = -1;
        }
        this.name = dbResult.NombreCarrera;
        this.schoolId = dbResult.idEscuela;
    }
    toDBNames() {
        let obj = {
            NombreCarrera: this.name,
            idEscuela: this.schoolId
        };
        if (this.id != -1) {
            obj.idCarrera = this.id;
        }
        return obj;
    }
}
exports.Career = Career;
//# sourceMappingURL=career.js.map