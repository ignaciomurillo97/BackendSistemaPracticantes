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

  set personType (value: number) {
    this._personType = value;
  }

  private _id: number;
  private _firstName: string;
  private _secondName: string;
  private _lastName: string;
  private _secondLastName: string;
  private _gender: string;
  private _personType: number;

  constructor(){

  }

  fromDBResult(dbResult: any) {
    this.id             = dbResult.Cedula;
    this.firstName      = dbResult.Nombre;
    this.secondName     = dbResult.SegundoNombre;
    this.lastName       = dbResult.Apellido;
    this.secondLastName = dbResult.SegundoApellido;
    this.gender         = dbResult.genero;
    this.personType     = dbResult.TipoPersona;
  }

  toDBNames () : Object {
    return {
      Cedula: this.id,
      Nombre: this.firstName,
      SegundoNombre: this.secondName,
      Apellido: this.lastName,
      SegundoApellido: this.secondLastName,
      genero: this.gender,
      TipoPersona: this.personType
    }
  }

}


export { Person };
