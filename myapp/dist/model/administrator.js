"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Administrator extends person_1.Person {
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
        this._personType = 3;
    }
    toDBNames() {
        return {
            Cedula: this.id,
            Nombre: this.firstName,
            SegundoNombre: this.secondName,
            Apellido: this.lastName,
            SegundoApellido: this.secondLastName,
            genero: this.gender,
            TipoPersona: 3
        };
    }
}
exports.Administrator = Administrator;
//# sourceMappingURL=administrator.js.map