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
}

export { Semester };
