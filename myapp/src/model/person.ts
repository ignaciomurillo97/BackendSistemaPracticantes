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
    this.id             = dbName.Cedula;
    this.firstName      = dbName.Nombre;
    this.secondName     = dbName.SegundoNombre;
    this.lastName       = dbName.Apellido;
    this.secondLastName = dbName.SegundoApellido;
    this.gender         = dbName.genero;
    this.personType     = dbName.TipoPersona;
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
