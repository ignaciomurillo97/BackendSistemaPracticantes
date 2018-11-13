class Site {
  get idSite (): number {
    return this.idSite;
  }

  set idSite (value: number) {
    this._id = value;
  }

  get name (): string {
    return this.name;
  }

  set name (value: string) {
    this._name = value;
  }

  get universityId (): number {
    return this.universityId;
  }

  set universityId (value:  number) {
    this._universityId = value;
  }

  get direction ():     string {
    return this.direction;
  }
  set direction (value:     string) {
    this._direction = value;
  }

  private _id:            number;
  private _name:          string;
  private _universityId:  number;
  private _direction:     string;


  constructor() {

  }

  fromDBNames (dbNames: any) {
    if (dbNames.idSede != undefined) {
      this._id = dbNames.idSede;
    } else {
      this._id = -1;
    }
    this._name = dbNames.NombreSede;
    this._universityId = dbNames.idUniversidad;
    this._direction = dbNames.Direccion;
  }

  toDBNames () : Object {
    let obj:          any = {
      NombreSede:     this._name,
      idUniversidad:  this._universityId,
      Direccion:      this._direction,
    }
    if (this._id != -1) {
      obj.NombreSede = this._id;
    }
    return obj;
  }
}

export { Site }
