import { Person } from './person'

class Administrator extends Person {
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
    this._personType     = 3;
  }

  toDBNames () : Object {
    return {
      Cedula: this.id,
      Nombre: this.firstName,
      SegundoNombre: this.secondName,
      Apellido: this.lastName,
      SegundoApellido: this.secondLastName,
      genero: this.gender,
      TipoPersona: 3
    }
  }
}

export { Administrator }
