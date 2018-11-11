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
    fromDBResult(dbResult) {
        this.id = dbResult.Cedula;
        this.firstName = dbResult.Nombre;
        this.secondName = dbResult.SegundoNombre;
        this.lastName = dbResult.Apellido;
        this.secondLastName = dbResult.SegundoApellido;
        this.gender = dbResult.genero;
        this.personType = dbResult.TipoPersona;
    }
    toDBNames() {
        return {
            Cedula: this.id,
            Nombre: this.firstName,
            SegundoNombre: this.secondName,
            Apellido: this.lastName,
            SegundoApellido: this.secondLastName,
            genero: this.gender,
            TipoPersona: this.personType
        };
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map