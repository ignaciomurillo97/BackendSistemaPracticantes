class University {
  get id (): number {
    return this.id;
  }

  set id (value: number) {
    this._id = value;
  }

  get name (): string {
    return this.name;
  }
  
  set name (value: string) {
    this._name = value;
  }

  private _id: number;
  private _name: string;

  constructor () {

  }
}

export { University }

