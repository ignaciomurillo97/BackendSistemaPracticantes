"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Student extends person_1.Person {
    get university() {
        return this._university;
    }
    set university(value) {
        this._university = value;
    }
    get school() {
        return this._school;
    }
    set school(value) {
        this._school = value;
    }
    get site() {
        return this._site;
    }
    set site(value) {
        this._site = value;
    }
    get career() {
        return this._career;
    }
    set career(value) {
        this._career = value;
    }
    get studentId() {
        return this._studentId;
    }
    set studentId(value) {
        this._studentId = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get semester() {
        return this._semester;
    }
    set semester(value) {
        this._semester = value;
    }
    constructor() {
        super();
    }
    fromDBNames(dbNames) {
        let personInformation = super.fromDBNames(dbNames);
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map