"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Student extends person_1.Person {
    get university() {
        return this.university;
    }
    set university(value) {
        this._university = value;
    }
    get school() {
        return this.school;
    }
    set school(value) {
        this._school = value;
    }
    get site() {
        return this.site;
    }
    set site(value) {
        this._site = value;
    }
    get career() {
        return this.career;
    }
    set career(value) {
        this._career = value;
    }
    get studentId() {
        return this.studentId;
    }
    set studentId(value) {
        this._studentId = value;
    }
    get state() {
        return this.state;
    }
    set state(value) {
        this._state = value;
    }
    get semester() {
        return this.semester;
    }
    set semester(value) {
        this._semester = value;
    }
    constructor() {
        super();
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map