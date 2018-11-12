class Career {

  get id (): number {
    return this._id;
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

  get schoolId (): number {
    return this._schoolId;
  }

  set schoolId (value: number) {
    this._schoolId = value;
  }

  private _id: number;
  private _name: string;
  private _schoolId: number;

  constructor() {

  }

  fromDBNames (dbResult: any) {
    if (dbResult.idCarrera != undefined) {
      this.id = dbResult.idCarrera;
    } else {
      this.id = -1;
    }
    this.name = dbResult.NombreCarrera;
    this.schoolId = dbResult.idEscuela;
  }

  toDBNames () : Object {
    let obj: any = {
      NombreCarrera: this.name,
      idEscuela: this.schoolId
    }
    if (this.id != -1) {
      obj.idCarrera = this.id;
    }
    return obj;
  }
}

export { Career }
