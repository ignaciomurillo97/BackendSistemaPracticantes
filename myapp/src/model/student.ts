import { Person } from './person'

class Student extends Person {

  get university ():  number {
    return this.university;
  }
  set university (value:  number) {
    this._university = value;
  }

  get school ():      number {
    return this.school;
  }
  set school (value:      number) {
    this._school = value;
  }

  get site ():        number {
    return this.site;
  }
  set site (value:        number) {
    this._site = value;
  }

  get career ():      number {
    return this.career;
  }
  set career (value:      number) {
    this._career = value;
  }

  get studentId ():   number {
    return this.studentId;
  }
  set studentId (value:   number) {
    this._studentId = value;
  }

  get state ():       number {
    return this.state;
  }
  set state (value:       number) {
    this._state = value;
  }

  get semester ():    number {
    return this.semester;
  }
  set semester (value:    number) {
    this._semester = value;
  }

  private _university:  number;
  private _school:      number;
  private _site:        number;
  private _career:      number;
  private _studentId:   number;
  private _state:       number;
  private _semester:    number;

  constructor(){
    super();
  }
}

export { Student }
