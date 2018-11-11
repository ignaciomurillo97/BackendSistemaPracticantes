class GenderCatalog {

  get id (): number {
    return this.id;
  }
  set id (value: number) {
    this._id = value;
  }

  get gender (): string {
    return this.gender;
  }
  set gender (value: string) {
    this._gender = value;
  }


  private _id: number;
  private _gender: string;

  constructor() {

  }
}
