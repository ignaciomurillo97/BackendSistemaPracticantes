class School {

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

  get universityId (): number {
    return this.universityId;
  }

  set universityId (value: number) {
    this._universityId = value;
  }


  private _id: number;
  private _name: string;
  private _universityId: number;

}

export { School }
