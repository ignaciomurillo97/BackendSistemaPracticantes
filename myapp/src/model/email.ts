class Email {

  get id (): number {
    return this._id;
  }
  set id (value: number) {
    this._id = value;
  }

  get email (): string {
    return this._email;
  }
  set email (value: string) {
    this._email = value;
  }

  get personId (): number {
    return this._personId;
  }
  set personId (value: number) {
    this._personId = value;
  }

  private _id: number;
  private _email: string;
  private _personId: number;

  constructor () {

  }

  fromDBNames (dbResult: any) {
    if (dbResult.IdCorreoElectronico != undefined) {
      this._id = dbResult.IdCorreoElectronico;
    } else {
      this._id = -1;
    }
    if (dbResult.idPersona != undefined) {
      this._personId = dbResult.idPersona;
    } else {
      this._personId = -1;
    }
    this._email = dbResult.CorreoElectronico;
  }

  toDBNames () : Object {
    let obj: any = {
      CorreoElectronico: this.email,
      idPersona: this.personId
    }
    if (this._id != -1) {
      obj.IdCorreoElectronico = this._id;
    }

    return obj;
  }
}

export { Email }
