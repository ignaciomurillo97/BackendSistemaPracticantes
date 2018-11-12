class TelephoneNumber {

  get id () : number {
    return this._id;
  }
  set id (value: number) {
    this._id = value;
  }

  get telephoneNumber () : string {
    return this._telephoneNumber;
  }
  set telephoneNumber (value: string) {
    this._telephoneNumber = value;
  }

  get personId () : number {
    return this._personId; }
  set personId (value: number) {
    this._personId = value;
  }
  
  private _id: number;
  private _telephoneNumber: string;
  private _personId: number;

  constructor() {

  }

  fromDBNames (dbResult: any) {
    if (dbResult.IdTelefono != undefined) {
      this._id = dbResult.IdTelefono;
    } else {
      this._id = -1;
    }
    if (dbResult.idPersona != undefined) {
      this._personId = dbResult.idPersona;
    }
    this._telephoneNumber = dbResult.Telefono;
  }

  toDBNames () : Object {
    let obj: any = {
      Telefono: this._telephoneNumber,
      idPersona: this._personId,
    }
    if (this._id != -1) {
      obj.IdTelefono = this._id;
    }

    return obj;
  }
}

export { TelephoneNumber }
