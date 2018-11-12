import { University } from './university'
import { Site } from './site' 
import { School } from './school'
import { Career } from './career'

class Person
{
  get id (): number {
    return this._id;
  }

  set id (value: number) {
    this._id = value;
  }

  get firstName (): string {
    return this._firstName;
  }

  set firstName (value: string) {
    this._firstName = value;
  }

  get secondName (): string {
    return this._secondName;
  }

  set secondName (value: string) {
    this._secondName = value;
  }

  get lastName (): string {
    return this._lastName;
  }

  set lastName (value: string) {
    this._lastName = value;
  }

  get secondLastName (): string {
    return this._secondLastName;
  }

  set secondLastName (value: string) {
    this._secondLastName = value;
  }

  get gender (): string {
    return this._gender;
  }

  set gender (value: string) {
    this._gender = value;
  }

  get personType (): number {
    return this._personType;
  }

  protected _id:              number;
  protected _firstName:       string;
  protected _secondName:      string;
  protected _lastName:        string;
  protected _secondLastName:  string;
  protected _gender:          string;
  protected _personType:      number;

  constructor(){

  }

  fromDBNames(dbName: any) {
    this._id             = dbName.Cedula;
    this._firstName      = dbName.Nombre;
    this._secondName     = dbName.SegundoNombre;
    this._lastName       = dbName.Apellido;
    this._secondLastName = dbName.SegundoApellido;
    this._gender         = dbName.genero;
    this._personType     = dbName.TipoPersona;
  }

  toDBNames () : Object {
    return {
      Cedula:           this._id,
      Nombre:           this._firstName,
      SegundoNombre:    this._secondName,
      Apellido:         this._lastName,
      SegundoApellido:  this._secondLastName,
      genero:           this._gender,
      TipoPersona:      this._personType
    }
  }

}


export { Person };
