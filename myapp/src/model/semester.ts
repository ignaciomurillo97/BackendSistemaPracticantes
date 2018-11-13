class Semester {
  get id (): number {
    return this.id;
  }

  set id (value: number) {
    this._id = value;
  }

  get year (): number {
    return this.year;
  }

  set year (value: number) {
    this._year = value;
  }

  get number (): number {
    return this.number;
  }

  set number (value: number) {
    this._number = value;
  }



  private _id: number;
  private _year: number;
  private _number: number;

  constructor() {

  }

  fromDBNames (dbNames: any) {
    if (dbNames.IdSemestre != undefined) {
      this._id = dbNames.IdSemestre;
    } else {
      this._id = -1;
    }

    this._year = dbNames.Ano;
    this._number = dbNames.NumeroSemestre;
  }

  toDBNames () : Object {
    let obj: any = {
      Ano: this._year,
      NumeroSemestre: this._number
    }
    if (this._id != -1) {
      obj.IdSemestre = this._id;
    }
    return obj;
  }
}

export { Semester };
