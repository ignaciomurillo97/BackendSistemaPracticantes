class Student {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

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

    get card() {
        return this._card;
    }

    set card(value) {
        this._card = value;
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
    constructor(){
        this._id = 0;
        this._university = 0;
        this._school = 0;
        this._site = 0;
        this._career = 0;
        this._card = 0;
        this._state = '';
        this._semester = 0;
    }
}

module.exports = Student;
