import { Person } from './person'

class Coordinator extends Person {

  get career (): number {
    return this.career;
  }
  set career (value: number) {
    this._career = value;
  }

  get site (): number {
    return this.site;
  }
  set site (value: number) {
    this._site = value;
  }


  private _career:  number;
  private _site:    number;

  constructor(){
    super();
  }

  fromDBNames(dbName: any) {
    this._id             = dbName.Cedula;
    this._firstName      = dbName.Nombre;
    this._secondName     = dbName.SegundoNombre;
    this._lastName       = dbName.Apellido;
    this._secondLastName = dbName.SegundoApellido;
    this._gender         = dbName.genero;
    this._personType     = 2;
    this._career         = dbName.idCarrera;
    this._site           = dbName.idSede;
  }

  toDBPersonNames () : Object {
    return {
      Cedula:           this.id,
      Nombre:           this.firstName,
      SegundoNombre:    this.secondName,
      Apellido:         this.lastName,
      SegundoApellido:  this.secondLastName,
      genero:           this.gender,
      TipoPersona:      2
    }
  }

  toDBCoordinatorNames () : Object {
    return {
      Cedula:     this._id,
      idSede:     this._site,
      idCarrera:  this._career
    }
  }

}

export { Coordinator }
