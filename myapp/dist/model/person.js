"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get secondName() {
        return this._secondName;
    }
    set secondName(value) {
        this._secondName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get secondLastName() {
        return this._secondLastName;
    }
    set secondLastName(value) {
        this._secondLastName = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get personType() {
        return this._personType;
    }
    constructor() {
    }
    fromDBNames(dbName) {
        this._id = dbName.Cedula;
        this._firstName = dbName.Nombre;
        this._secondName = dbName.SegundoNombre;
        this._lastName = dbName.Apellido;
        this._secondLastName = dbName.SegundoApellido;
        this._gender = dbName.genero;
        this._personType = dbName.TipoPersona;
    }
    toDBNames() {
        return {
            Cedula: this._id,
            Nombre: this._firstName,
            SegundoNombre: this._secondName,
            Apellido: this._lastName,
            SegundoApellido: this._secondLastName,
            genero: this._gender,
            TipoPersona: this._personType
        };
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map