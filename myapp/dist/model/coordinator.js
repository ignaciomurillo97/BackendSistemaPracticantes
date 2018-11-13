"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Coordinator extends person_1.Person {
    get career() {
        return this.career;
    }
    set career(value) {
        this._career = value;
    }
    get site() {
        return this.site;
    }
    set site(value) {
        this._site = value;
    }
    constructor() {
        super();
    }
    fromDBNames(dbName) {
        this._id = dbName.Cedula;
        this._firstName = dbName.Nombre;
        this._secondName = dbName.SegundoNombre;
        this._lastName = dbName.Apellido;
        this._secondLastName = dbName.SegundoApellido;
        this._gender = dbName.genero;
        this._personType = 2;
        this._career = dbName.idCarrera;
        this._site = dbName.idSede;
    }
    toDBPersonNames() {
        return {
            Cedula: this.id,
            Nombre: this.firstName,
            SegundoNombre: this.secondName,
            Apellido: this.lastName,
            SegundoApellido: this.secondLastName,
            genero: this.gender,
            TipoPersona: 2
        };
    }
    toDBCoordinatorNames() {
        return {
            Cedula: this._id,
            idSede: this._site,
            idCarrera: this._career
        };
    }
}
exports.Coordinator = Coordinator;
//# sourceMappingURL=coordinator.js.map