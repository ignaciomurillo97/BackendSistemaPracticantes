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
    set personType(value) {
        this._personType = value;
    }
    constructor() {
    }
    fromDBNames(dbName) {
        this.id = dbName.Cedula;
        this.firstName = dbName.Nombre;
        this.secondName = dbName.SegundoNombre;
        this.lastName = dbName.Apellido;
        this.secondLastName = dbName.SegundoApellido;
        this.gender = dbName.genero;
        this.personType = dbName.TipoPersona;
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