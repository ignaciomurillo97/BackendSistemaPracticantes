"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Site {
    get idSite() {
        return this.idSite;
    }
    set idSite(value) {
        this._id = value;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this._name = value;
    }
    get universityId() {
        return this.universityId;
    }
    set universityId(value) {
        this._universityId = value;
    }
    get direction() {
        return this.direction;
    }
    set direction(value) {
        this._direction = value;
    }
    constructor() {
    }
    fromDBNames(dbNames) {
        if (dbNames.idSede != undefined) {
            this._id = dbNames.idSede;
        }
        else {
            this._id = -1;
        }
        this._name = dbNames.NombreSede;
        this._universityId = dbNames.idUniversidad;
        this._direction = dbNames.Direccion;
    }
    toDBNames() {
        let obj = {
            NombreSede: this._name,
            idUniversidad: this._universityId,
            Direccion: this._direction,
        };
        if (this._id != -1) {
            obj.NombreSede = this._id;
        }
        return obj;
    }
}
exports.Site = Site;
//# sourceMappingURL=site.js.map