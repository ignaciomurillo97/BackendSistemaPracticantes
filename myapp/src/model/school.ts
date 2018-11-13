class School {
get id (): number {
    return this.id;
  }

  set id (value: number) {
    this._id = value;
  }

  get name (): string {
    return this._name;
  }

  set name (value: string) {
    this._name = value;
  }

  get universityId (): number {
    return this._universityId;
  }
  set universityId (value: number) {
    this._universityId = value;
  }

  private _id: number;
  private _name: string;
  private _universityId: number;

  constructor() {

  }

  fromDBNames (dbNames: any) {
    if (dbNames.IdEscuela != undefined) {
      this._id = dbNames.IdEscuela;
    } else {
      this._id = -1;
    }
    this._name = dbNames.NombreEscuela;
    this._universityId = dbNames.IdUniversidad;
  }

  toDBNames () : Object {
    let obj: any = {
      NombreEscuela: this._name,
      IdUniversidad: this._universityId
    }
    if (this._id != -1) {
      obj.IdEscuela = this._id;
    }
    return obj;
  }
}

export { School }
